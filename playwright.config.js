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
      timeout: 30000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'cd client && npm run dev -- --host',
      port: 5173,
      timeout: 60000,
      reuseExistingServer: !process.env.CI,
    },
  ],
};