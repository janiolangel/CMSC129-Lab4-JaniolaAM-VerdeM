module.exports = {
  testDir: './tests/system',
  testMatch: '**/*.spec.js',
  use: {
    baseURL: 'http://localhost:5173',
  },
  webServer: [
    {
      command: 'cd server && node server.js',
      port: 5000,
      reuseExistingServer: true,
    },
    {
      command: 'cd client && npm run dev',
      port: 5173,
      reuseExistingServer: true,
    },
  ],
};