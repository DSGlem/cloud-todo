module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "JBL Quantum";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variables.scss";`
      },
      scss: {
        additionalData: `@import "@/style/variables.scss";`
      }
    }
  },
  productionSourceMap: false
};
