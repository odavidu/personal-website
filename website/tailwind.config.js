/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },

      keyframes: {
        // Fade only from each direction
        'fade-in-left':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-in-right': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-in-up':    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-in-down':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },

        // Slide only from each direction
        'slide-in-left':  { '0%': { opacity: '0', transform: 'translateX(-1rem)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        'slide-in-right': { '0%': { opacity: '0', transform: 'translateX(1rem)'  }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        'slide-in-up':    { '0%': { opacity: '0', transform: 'translateY(1rem)'  }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'slide-in-down':  { '0%': { opacity: '0', transform: 'translateY(-1rem)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        // Fade animations (no movement)
        'fade-in-left':  'fade-in-left 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'fade-in-up':    'fade-in-up 0.5s ease-out forwards',
        'fade-in-down':  'fade-in-down 0.5s ease-out forwards',

        // Slide animations (no fade)
        'slide-in-left':  'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-in-up':    'slide-in-up 0.5s ease-out forwards',
        'slide-in-down':  'slide-in-down 0.5s ease-out forwards',
      },
    },
  }
}

