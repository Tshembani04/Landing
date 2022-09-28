module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        body: '#010208',
        white: '#fff',
        pink: 'pink',
        transparent: 'transparent',
        bitBlack: '#000501',
        bitRed: '#6B0F1A',
        text: '#F7F9F9',
        bitDark: '#bitDark',
        rubyRed: '#DE1A1A'
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        radialBgCircle: "url('/src/assets/img/radial-bg.svg')",
        videoBg: "url('/src/assets/img/video-bg.png')",
        circle: "url('/src/assets/img/Circles.jpg')",
        explore: "url('/src/assets/img/explore.png')",
      },
    },
  },
  plugins: [],
};
