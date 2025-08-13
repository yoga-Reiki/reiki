// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.2s ease-out',
      },
    },
  },
};