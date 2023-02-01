import type { ColorModeProps } from '$src/type';
import { get, writable } from 'svelte/store';

export const colorMode = writable<ColorModeProps>('Light');

export const initColorMode = () => {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
		colorMode.set('Dark');
	} else {
		document.documentElement.classList.remove('dark');
		colorMode.set('Light');
	}
};
export const setColorMode = (mode: ColorModeProps) => {
	colorMode.set(mode);
	localStorage.theme = mode === 'Dark' ? 'dark' : 'light';
	//
	if (mode === 'Dark') document.documentElement.classList.add('dark');
	else document.documentElement.classList.remove('dark');
};
export const toggleColorMode = () => setColorMode(get(colorMode) === 'Dark' ? 'Light' : 'Dark');
