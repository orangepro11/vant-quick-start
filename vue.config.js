const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: process.env.PUBLICK_PATH, // 默认'/'，部署应用包时的基本 URL
  outputDir: process.env.OUT_PUT_DIR, // 'dist', 生产环境构建文件的目录
  // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  configureWebpack: (config) => {
    const plugins = [];
    if (IS_PROD) {
      config.mode = "production";
      config["performance"] = {
        // 打包文件大小配置
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"));

    config.optimization.minimizer("terser").tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
    // 防止多页面打包卡顿
    (config) => config.plugins.delete("named-chunks");

    if (IS_PROD) {
      // 压缩图片
      config.module
        .rule("images")
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: {
            progressive: true,
            quality: 75,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.75, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
        });
    }

    return config;
  },
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          // 自定义主题色配置
          hack: `true; @import "${resolve("src/assets/less/vantTheme.less")}";`,
        },
      },
    },
  },
  devServer: {
    disableHostCheck: true,
  },
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require("os").cpus().length > 1,
  pwa: {},
};
