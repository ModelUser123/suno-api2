module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Handle font files
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|eot)$/,
      type: 'asset/resource',
    });
    
    // Handle HTML files
    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader',
    });
    
    // Ignore problematic playwright files
    config.resolve.alias = {
      ...config.resolve.alias,
      'rebrowser-playwright-core/lib/vite': false,
    };
    
    return config;
  },
}
