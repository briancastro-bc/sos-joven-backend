import 'reflect-metadata';
import path from 'node:path';
import { injectable } from 'inversify';
import {
  createLogger,
  format,
  transports,
  Logger as ExternalLogger,
  LogCallback,
  transport,
} from 'winston';
import { 
  FileTransportOptions,
  ConsoleTransportOptions, 
} from 'winston/lib/winston/transports';

import { Logger, LoggerLevels } from '@shared/domain';
import { Configuration } from '@shared/infraestructure';

@injectable()
export class WinstonLogger implements Logger {

  private readonly logger: ExternalLogger;

  private readonly isProdMode: boolean = Configuration.get<string>('NODE_ENV') === 'prod';

  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.cli(),
      ),
      exitOnError: false,
      transports: [
        this.isProdMode ? this.createFileTransport() : this.createConsoleTransport(),
      ]
    });
  }

  info(message: string, callback?: LogCallback): void {
    this.logger.info(message, callback);
  }

  debug(message: string, callback?: LogCallback): void {
    this.logger.debug(message, callback);
  }

  error(message: string, callback?: LogCallback): void {
    this.logger.error(message, callback);
  }

  warning(message: string, callback?: LogCallback): void {
    this.logger.warning(message, callback);
  }

  success(message: string, callback?: LogCallback): void {
    this.logger.log('success', message, callback);
  }

  private createFileTransport(): transport {
    const DIR_PATH: Readonly<string> = path.resolve(path.join(__dirname, '../../../../'), 'logs');
    return new transports.File({
      dirname: DIR_PATH,
    })
  }

  private createConsoleTransport(): transport {
    return new transports.Console({
      format: format.combine(
        format.colorize({
          all: true,
          colors: {
            info: 'blue',
            error: 'red',
            warning: 'yellow',
            success: 'green',
            debug: 'grey'
          },
        }),
        format.timestamp({ format: 'hh:mm:ss A' }),
      ),
    });
  }
}