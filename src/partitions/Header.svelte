<script lang="ts">
	import MenuLink from '$src/components/MenuLink.svelte';
	import { colorMode, toggleColorMode } from '$src/store/app';
	import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-svelte';
	//
</script>

<header class="border-b border-zinc-300 dark:border-zinc-700 !border-opacity-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
		<div class="brand">
			<a
				href="/"
				class="block py-[2px] px-2.5 bg-amber-500 dark:bg-amber-400 text-zinc-800 font-semibold tracking-wide text-lg -rotate-3 hover:rotate-0"
				>harryhdt.dev</a
			>
		</div>
		<div class="menu flex items-center gap-12">
			<MenuLink href="/">Home</MenuLink>
			<MenuLink href="/about">About</MenuLink>
			<button class="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-1" on:click={toggleColorMode}>
				{#if $colorMode === 'Dark'}
					<SunIcon class="w-6 h-6 text-zinc-600 dark:text-amber-400" />
				{:else}
					<MoonIcon class="w-6 h-6 text-zinc-600 dark:text-amber-400" />
				{/if}
			</button>
		</div>
	</div>
</header>
