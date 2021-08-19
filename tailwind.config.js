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
        '17' : '4.3rem',
        '26' : '6.3rem',
        '58' : '13.7rem',
      },
      animation: {
        bounce: 'bounce 10s infinite',
        bounce_higher: 'bounce_y_balloon 5s infinite',
        fly: 'fly 30s ease-in-out infinite',
       },
       keyframes: {
        fly: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20rem) rotate(10deg)' },
          '50%': { transform: 'translateY(-100rem) rotate(-10deg)' },
          '75%': { transform: 'translateY(-20rem) rotate(13deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        }
       },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
