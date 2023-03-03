/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    const prod = process.env.NEXT_PUBLIC_ENVIROMENT === 'production';

    return { ...config, mode: prod ? 'production' : 'development' };
  },
};

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true, // Suppresses all logs
//   // authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
//   release: new Date().getTime().toString(),
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// };

module.exports = nextConfig;
