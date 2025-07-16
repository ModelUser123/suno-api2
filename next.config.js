module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: [
    'electron',
    'rebrowser-playwright-core',
    '@playwright/browser-chromium'
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        'electron',
        'rebrowser-playwright-core',
        '@playwright/browser-chromium',
        /^electron$/,
      ];
    }
    
    // Completely ignore electron
    config.resolve.alias = {
      ...config.resolve.alias,
      'electron': false,
    };
    
    return config;
  },
}
