<script lang="ts">
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';
	export let href: string;

	let className = '';
	export { className as class };
</script>

<a
	on:click
	class="relative hover:text-zinc-900 dark:hover:text-zinc-100 {$page.url.pathname === href
		? 'text-zinc-900 dark:text-zinc-100'
		: 'text-zinc-600 dark:text-zinc-400'} {className}"
	{href}
>
	<slot />
	{#if $page.url.pathname === href}
		<div
			in:scale={{ duration: 200 }}
			class="absolute hidden md:block z-10 bottom-0 h-[2px] inset-x-0 bg-gray-300 dark:bg-gray-600 -bottom-1"
		/>
	{/if}
</a>
