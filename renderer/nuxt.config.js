import css from './config/css';
import head from './config/head';
import modules from './config/modules';
import bootstrapVue from './config/bootstrapVue';

export default {
  css,
  head,
  modules,
  bootstrapVue,

  build: {
    extend: (config) => {
      config.target = 'electron-renderer';
    },
  },
}
