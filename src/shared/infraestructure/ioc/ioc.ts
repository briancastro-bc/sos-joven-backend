import 'reflect-metadata';

import { 
  of,
  map,
  every,
  lastValueFrom,
  Observable,
} from 'rxjs';
import { Container, inject } from 'inversify';
import { buildProviderModule, fluentProvide, autoProvide } from 'inversify-binding-decorators';

import { IOC_TYPES } from './ioc-types.ts';

import { IoC } from '@shared/domain/index.ts';

const provideSingleton = (identifier: any) => {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done(true);
}

const ioc = new Container();
ioc.load(buildProviderModule());

const initializeContainer = async (): Promise<boolean> => {
  const types: IoC[] = Object.entries(IOC_TYPES).map(([key, value]) => ({ 
    [key]: { 
      symbol: value.symbol as symbol, 
      value: value.value, 
      type: value.type,
    } 
  }));

  const observable$: Observable<boolean> = of(types).pipe(
    map(([ element ]) => {
      const [ key ] = Object.keys(element);
      const type = element[key].type as symbol;
      ioc
        .bind<typeof type>(element[key].symbol as symbol)
        .to(element[key].value)
        .inSingletonScope();
      return true;
    }),
    every((source) => source === true)
  );

  const resolve: boolean = await lastValueFrom<boolean>(observable$);
  if (!resolve) {
    return Promise.reject<boolean>("Couldn't bind all dependencies on IoC");
  }

  return resolve;
}

export {
  ioc,
  inject,
  autoProvide,
  provideSingleton,
  initializeContainer,
  IOC_TYPES,
}