const withPreact = require("next-plugin-preact");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = withPreact({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { defaultLoaders, isServer, webpack }) => {
    if (!isServer) {
      Object.assign(config.resolve, {
        fallback: {
          fs: false,
          path: false,
          stream: false,
          timers: false,
          crypto: false,
          os: false,
        },
      }); // Webpack 5
    }

    return config;
  },
});
