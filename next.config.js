module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400',
        },
      ],
    },
  ],
  optimizeFonts: true,
};
