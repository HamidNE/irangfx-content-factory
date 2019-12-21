import head from './config/head';

export default {
  head,
  build: {
    extend: (config) => {
      config.target = 'electron-renderer';
    },
  },
}
