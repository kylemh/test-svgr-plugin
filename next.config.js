// const withSVGR = require('@newhighsco/next-plugin-svgr');

// module.exports = withSVGR();

const urlLoader = {
  loader: 'url-loader',
  options: {
    limit: 8192,
    fallback: {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/images',
        outputPath: 'static/images',
      },
    },
    publicPath: '/_next/',
    outputPath: 'static/images/',
    name: '[name]-[hash].[ext]',
  },
};

const svgrLoader = {
  loader: '@svgr/webpack',
};

const svgRegExp = /\.svg$/;

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: svgRegExp,
        use: [svgrLoader, urlLoader],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: svgRegExp,
        use: [urlLoader],
      }
    );

    return config;
  },
};
