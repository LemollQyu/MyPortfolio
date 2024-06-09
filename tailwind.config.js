/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		transitionProperty: {
        'height': 'height',
		'width' : 'width',
		'size' : 'width, height',
		'display': 'display',
        'spacing': 'margin, padding',
      },
	  keyframes: {
		  slideDown: {
			 
		  },

     
      
		  
	  },
	  animation: {
		  'slideDown': 'slideDown 5s linear infinite',
		
	  },
	},
  },
  plugins: [],
}