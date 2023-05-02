import Bun, { Subprocess } from 'bun';

import { Logger } from '@shared/domain/index.ts';

(async () => {

  const [, , ...args] = process.argv;

  const spawnProcess = async (...args: any[]): Promise<Subprocess> => {

    const _onExit = (
      subprocess: Subprocess,
      exitCode: number | null,
      signalCode: number | null
    ): void => {

    };

    return Bun.spawn(
      [...args],
      {
        // cwd: 
        env: { ...process.env, HOLA: "mundo" },
        cmd: [...args],
        stdin: process.stdin,
        onExit: _onExit,
      });
  };

  const shell = await spawnProcess(args);

});