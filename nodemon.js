// import nodemon from 'nodemon';
const nodemon = require('nodemon');

nodemon({
  ext: 'js ts json',
  script: 'src/server.ts',
  watch: ['src'],
  ignore: [
    '.git',
    'dist',
    'node_modules',
  ],
  verbose: true,
  restartable: 'rs',
}).on('restart', (files) => {
  console.log('Restarting server:', files);
})