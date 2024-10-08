/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': '../Images/BgImageCoverPage.jpeg',
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {


        '2xs':'50px',

        

        'xs':'480px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',

        '1md':'847px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1205px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        CustomeTeal:'#03989F',
        Customgray:"#B9B9B9"
      }
    },
  },
  plugins: [],
}