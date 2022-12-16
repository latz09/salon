/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		extend: {},
		fontFamily: {
			bodoni: ['Bodoni Moda', 'serif'],
			nunito: ['Nunito Sans', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
		},
		colors: {
			light: '#EEEDE5',
			medium: '#D4D2B7',
			dark: '#919700',
			colorPop: '#00AC94',
			black: '#2E2E28',
			white: '#F2F8EF',
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
