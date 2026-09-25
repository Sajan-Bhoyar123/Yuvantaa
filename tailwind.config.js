/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Locked Yuvantaa Color System
        navy: {
          950: '#040B13',
          900: '#071321', // Primary Deep Navy specified in prompt
          850: '#0B1A2D',
          800: '#0F223A',
          700: '#162F4E',
          600: '#1F3F66',
        },
        brand: {
          orange: '#FF6026',
          coral: '#FF1E56',
          magenta: '#D80075',
        },
        surface: {
          white: '#FFFFFF',
          warm: '#FBFBFD',
          muted: '#F1F5F9',
        },
        content: {
          primary: '#111827',   // Primary text from prompt
          secondary: '#64748B', // Secondary text from prompt
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6026 0%, #FF1E56 50%, #D80075 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #FF7036 0%, #FF2E66 50%, #E81085 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(255, 96, 38, 0.08) 0%, rgba(255, 30, 86, 0.08) 50%, rgba(216, 0, 117, 0.08) 100%)',
        'navy-surface': 'linear-gradient(180deg, #071321 0%, #040B13 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'controlled-sm': '0 1px 3px 0 rgba(7, 19, 33, 0.05), 0 1px 2px -1px rgba(7, 19, 33, 0.05)',
        'controlled-md': '0 4px 16px -2px rgba(7, 19, 33, 0.06), 0 2px 6px -2px rgba(7, 19, 33, 0.04)',
        'controlled-lg': '0 12px 32px -4px rgba(7, 19, 33, 0.08), 0 4px 12px -2px rgba(7, 19, 33, 0.04)',
        'controlled-xl': '0 20px 48px -8px rgba(7, 19, 33, 0.12)',
        'brand-glow': '0 8px 30px rgba(255, 30, 86, 0.28)',
        'brand-glow-lg': '0 14px 45px rgba(255, 30, 86, 0.35)',
      }
    },
  },
  plugins: [],
}
