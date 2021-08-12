module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },    
    colors: {
      primary: {
        orange: '#EA5835',
        yellow: '#F6A022',
        blue: '#3959A5',
        nude: '#EFBC98',
        white: '#FFFFFF',
      },
      secondary: {
        brownLight:'#CE4B30',
        yellowGray:'#EAA548',
        blueLight:'#ACD6C4',
      },
      other: {
        creme : '#EDE1CA',
        greyDark : '#3A484C',
        greyLight : '#4F5A5C',
        brown : '#80403A',
        brownDark : '#592F2D',
      }
    },
    fontFamily : {
      'primary' : '-apple-system-body'

    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '18' : '4.7rem',
      },
      animation: {
        bounce: 'bounce 10s infinite',
       },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
