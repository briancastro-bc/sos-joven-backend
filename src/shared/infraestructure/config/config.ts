export class Configuration {
  static get<T>(key: string, defaultValue?: any): T {
    const value = process.env[key] ?? defaultValue;
    return value as T;
  }
}