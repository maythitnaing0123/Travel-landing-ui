// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // adjust to your file structure

    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f5faff',
            100: '#e0f0ff',
            200: '#b3dbff',
            300: '#80c4ff',
            400: '#4daeff',
            500: '#1a99ff',
            600: '#007be6',
            700: '#005bb3', // ← your custom bg-primary-700
            800: '#003d80',
            900: '#001f4d',
          },
        },
      },
    },
  };
  