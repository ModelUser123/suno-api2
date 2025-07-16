module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  experimental: {
    serverComponentsExternalPackages: [
      'rebrowser-playwright-core',
      '@playwright/browser-chromium',
      'electron'
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        'rebrowser-playwright-core',
        '@playwright/browser-chromium',
        'electron'
      ];
    }
    return config;
  },
}
