/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#FFFFFF',
          base: '#F8F8F6',
          muted: '#F3F3F0',
          border: '#E8E8E3',
        },
        life: {
          text: '#1C1C1A',
          subtext: '#6E6E6A',
          dim: '#9E9E98',
          amber: '#E68A00',
          orange: '#EE6C4D',
          green: '#2A9D8F',
          teal: '#264653',
          indigo: '#4A4E69',
          violet: '#6B5B95',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'system-ui',
          'sans-serif'
        ]
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
