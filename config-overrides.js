function override(config) {
  // Ensure config.resolve is defined
  config.resolve = config.resolve || {}

  // Ensure config.resolve.fallback is defined
  config.resolve.fallback = config.resolve.fallback || {}

  // Add polyfills for Node.js core modules
  config.resolve.fallback = {
    ...config.resolve?.fallback,
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    url: require.resolve('url/'),
    buffer: require.resolve('buffer/'),
  };

  return config;
}

module.exports = {
  override,
};
