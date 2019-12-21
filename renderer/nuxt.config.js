import css from './config/css';
import head from './config/head';

export default {
  css,
  head,
  build: {
    extend: (config) => {
      config.target = 'electron-renderer';
    },
  },
}
