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
        navBlue: '#193F92',
      }
    },
    fontFamily : {
      'primary' : '-apple-system-body'

    },
    container: {
      center: true,
    },
    extend: {
      inset: {
       '76': '18rem',
      },
      spacing: {
        '18' : '4.7rem',
        '17' : '4.3rem',
        '26' : '6.3rem',
        '58' : '13.7rem',
      },
      animation: {
        bounce: 'bounce 10s infinite',
        bounce_higher: 'bounce_y_balloon 5s infinite',
        bounce_low:'bounce_low 10s infinite',
        fly: 'fly 30s ease-in-out infinite',
        falling: 'diagonal 30s ease infinite',
       },
       keyframes: {
        fly: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20rem) rotate(10deg)' },
          '50%': { transform: 'translateY(-100rem) rotate(-10deg)' },
          '75%': { transform: 'translateY(-20rem) rotate(13deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        diagonal: {
            '0%': { transform: 'translateY(-40em) scale(.1,.1)' },
            '50%': { transform: 'scale(.6,.6)' },
            '100%': { transform: 'translateY(7rem) scale(.1,.1)' },
       },
       bounce_low: {
        '0%' :{ transform: 'rotate(5deg)' }, 
        '50%': { transform: 'rotate(25deg)' },
        '100%': { transform: 'rotate(5deg)' },
       },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"),require('@tailwindcss/forms'),],
};
