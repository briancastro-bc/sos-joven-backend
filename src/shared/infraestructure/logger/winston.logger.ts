import {
  createLogger,
  format,
  transports,
  Logger as ExternalLogger,
  LogCallback,
} from 'winston';
import path from 'node:path';

import { Logger } from '@shared/domain/index.ts';

class WinstonLogger implements Logger {

  private readonly DIR_PATH: Readonly<string> = path.join(import.meta.dir, '../../../../../', 'logs');

  private readonly logger: ExternalLogger;

  constructor() {
    this.logger = createLogger({
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
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      ),
      exitOnError: false,
      transports: [
        new transports.File({ filename: `info-${Date.now()}.log`, dirname: `${this.DIR_PATH}/info`, level: 'info' }),
        new transports.File({ filename: `error-${Date.now()}.log`, dirname: `${this.DIR_PATH}/error`, level: 'error' }),
        new transports.File({ filename: `success-${Date.now()}.log`, dirname: `${this.DIR_PATH}/success`, level: 'success' }),
        new transports.File({ filename: `debug-${Date.now()}.log`, dirname: `${this.DIR_PATH}/debug`, level: 'debug' }),
        new transports.File({ filename: `warning-${Date.now()}.log`, dirname: `${this.DIR_PATH}/warning`, level: 'warning' }),
      ],
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
}

export const winstonLogger = new WinstonLogger();