export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#1e1b4b',
          100: '#312e81',
          200: '#3730a3',
          300: '#4338ca',
          400: '#4f46e5',
          500: '#6366f1',
          600: '#7c3aed',
          700: '#8b5cf6',
          800: '#a855f7',
          900: '#c084fc',
        },
        accent: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
      },
      backgroundImage: {
        'gradient-cosmic':
          'linear-gradient(135deg, #0c4a6e 0%, #1e1b4b 50%, #312e81 100%)',
        'gradient-space':
          'linear-gradient(90deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%)',
        'gradient-stars':
          'radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
