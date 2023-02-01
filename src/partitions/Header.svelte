<script lang="ts">
	import MenuLink from '$src/components/MenuLink.svelte';
	import { colorMode, toggleColorMode } from '$src/store/app';
	import { Sun as SunIcon, Moon as MoonIcon, Menu as MenuIcon } from 'lucide-svelte';
	import { clickOutside } from 'svelte-use-click-outside';
	//
	let showMobileMenu = false;
	const toggleMobileMenu = () => (showMobileMenu = !showMobileMenu);
</script>

<header class="border-b border-zinc-300 dark:border-zinc-700 !border-opacity-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
		<div class="brand">
			<a
				href="/"
				class="block py-px px-2 bg-amber-500 dark:bg-amber-400 text-zinc-800 font-semibold text-lg hover:bg-green-700 dark:hover:bg-green-600 hover:!text-white"
				>harryhdt.dev</a
			>
		</div>
		<div class="menu flex items-center gap-4 md:gap-16">
			<MenuLink class="hidden md:block" href="/">Home</MenuLink>
			<MenuLink class="hidden md:block" href="/about">About</MenuLink>
			<button
				aria-label="Toggle color mode icon"
				class="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-1"
				on:click={toggleColorMode}
			>
				{#if $colorMode === 'Dark'}
					<SunIcon class="w-6 h-6 text-zinc-600 dark:text-amber-400" />
				{:else}
					<MoonIcon class="w-6 h-6 text-zinc-600 dark:text-amber-400" />
				{/if}
			</button>
			<button
				aria-label="Menu Icon"
				class="hover:bg-zinc-200 dark:hover:bg-zinc-700 p-1 md:hidden"
				on:click={toggleMobileMenu}
			>
				<MenuIcon class="w-7 h-7" />
			</button>
		</div>
		{#if showMobileMenu}
			<div
				use:clickOutside={toggleMobileMenu}
				class="mobile-menu md:hidden fixed top-4 right-4 bg-zinc-50 dark:bg-zinc-700 z-10 flex flex-col w-40 py-1.5 shadow"
			>
				<MenuLink on:click={toggleMobileMenu} class="md:hidden py-1.5 px-4" href="/">Home</MenuLink>
				<MenuLink on:click={toggleMobileMenu} class="md:hidden py-1.5 px-4" href="/about"
					>About</MenuLink
				>
			</div>
		{/if}
	</div>
</header>
