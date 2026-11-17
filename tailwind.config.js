/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          indigo: '#6366f1',
          purple: '#a855f7',
          cyan: '#22d3ee',
          pink: '#ff2e88',
          amber: '#f59e0b',
        },
        studio: {
          dark: '#080c14',
          card: '#0f172a',
          border: 'rgba(148, 163, 184, 0.12)',
          ink: '#f8fafc',
          muted: '#94a3b8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.85' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.985)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
