// tailwind.config.js
tailwind.config = {
  theme: {
    extend: {
      boxShadow: { // custom shadow
        'small-Shadow': '0 0 80px 0 rgba(0, 0, 0, 0.25)',
        'medium-Shadow': '0 0 200px 0 rgba(0, 0, 0, 0.40)',
      },

      gap: { // custom gap
        'xlGap': '80px',
        'largGap': '65px',
        'mediumGap': '40px',
        'smallGap': '20px',
      },

      colors: { // custom custom color
        'lightblack': 'rgb(22, 33, 32)',
        'darkgray': 'rgb(46, 62, 72)',
        'OliveGreen': 'rgb(202, 243, 137)',
        'dark-white': 'rgb(229, 231, 235)',
        'optical-gray': 'rgb(46, 62, 72)',
        'light-gray': 'rgb(61,81,99)',
        'light-perpal': 'rgb(142, 167, 255)',
        'off-gray': 'rgb(212 212 216)',
      },

      fontSize: { // custom font size
        'n-text': '14px',
        'normalpsg': '16px',
        'largepsg': '18px',
        'smallText': '20px',
        'm-text': '22px',
        'mediumText': '25px',
        '2xlText': '50px',
        'xlText': '40px',
        'largText': '34px',
      },

      fontFamily: { // custom font family
        'mono-s': ['IBM Plex Mono', 'monospace'],
        'dm': ['DM Sans', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      fontWeight: {  // custom font weight
        'normal-w': '400',
        'light-w': '500',
        'bold-w': '600',
        'extra-w': '700',

      },
      lineHeight: {  // custom line-hight
        'large-lh': '1.5',
        'medium-lh': '1.2',
        'small-lh': '1.1',
      },
      margin: { // custom margin value
        'medium-m': '5%',
        'medium-m': '6%' // Add your custom margin value here
      },

    }
  }
};

// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}

