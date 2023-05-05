
export type LoggerLevels = 'info' | 'debug' | 'error' | 'success' | 'warning';

/** 
 * 
 * @interface Logger - Represents the domain layer for any kind of logger.
 * 
*/
export interface Logger {

  info(message: Required<NonNullable<string>>, callback?: any | Function): void;

  debug(message: Required<NonNullable<string>>, callback?: any | Function): void;

  error(message: Required<NonNullable<string>>, callback?: any | Function): void;

  warning(message: Required<NonNullable<string>>, callback?: any | Function): void;

  success?(message: Required<NonNullable<string>>, callback?: any | Function): void;
}