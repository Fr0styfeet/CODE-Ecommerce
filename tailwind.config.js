/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        customBlue: '#4A99D3',
      },
      boxShadow: {
        'lol': '5px 20px 30px rgba(74, 153, 211, 0.2)',
      },
      backgroundImage: {
        'trans': "url('./images/Rectangle 22.png')",
      },  
    },
  },
  plugins: [],
}

