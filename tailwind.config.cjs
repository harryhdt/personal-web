/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'fira-mono': ['Fira Mono', 'sans-serif']
			}
		}
	},
	plugins: []
};
