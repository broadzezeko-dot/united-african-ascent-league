module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uaal: {
          dark: '#07131d',
          panel: '#101b27',
          gold: '#d9b45d',
          goldSoft: '#f0d17b',
          text: '#edf0f4',
          muted: '#a3afbd',
          green: '#1fcf96',
          red: '#ff5b5b',
          soft: '#121d2b',
        },
      },
      boxShadow: {
        gold: '0 0 20px rgba(217, 180, 93, 0.25)',
      },
      backgroundImage: {
        stripe: 'linear-gradient(90deg, rgba(217,180,93,0.08) 0%, rgba(217,180,93,0.02) 100%)',
      },
    },
  },
  plugins: [],
};
