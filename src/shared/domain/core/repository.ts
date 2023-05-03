import { Entity } from "./entity.ts";

export interface Repository<T extends Entity> {
  findAll?(): Promise<T[]>;
  findById?(id: string | number, ...args: unknown[]): Promise<T>;
  insert?(entity: T): Promise<boolean>;
  update?(entity: T): Promise<boolean>;
  delete?(id: string | number, ...args: unknown[]): Promise<boolean>;
}