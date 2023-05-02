
export type LoggerLevels = 'info' | 'debug' | 'error' | 'success' | 'warning';

/** 
 * 
 * @interface Logger - Represents the domain layer for any kind of logger.
 * 
*/
export interface Logger {

  info(message: string, callback?: any | Function): void;

  debug(message: string, callback?: any | Function): void;

  error(message: string, callback?: any | Function): void;

  success(message: string, callback?: any | Function): void;

  warning(message: string, callback?: any | Function): void;
}