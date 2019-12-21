import css from './config/css';
import head from './config/head';
import modules from './config/modules';

export default {
  css,
  head,
  modules,
  
  build: {
    extend: (config) => {
      config.target = 'electron-renderer';
    },
  },
}
