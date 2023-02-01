<script lang="ts">
	import '@fontsource/fira-mono';
	import '$src/app.css';
	import Header from '$src/partitions/Header.svelte';
	import Footer from '$src/partitions/Footer.svelte';
	import { initColorMode } from '$src/store/app';
	//
	initColorMode();
</script>

<div
	id="app"
	class="font-fira-mono bg-zinc-100 text-zinc-700 dark:text-zinc-400 dark:bg-zinc-900 min-h-screen absolute inset-0 flex flex-col"
>
	<Header />
	<main class="mx-auto px-4 max-w-7xl h-full overflow-auto w-full">
		<slot />
	</main>
	<Footer />
</div>
