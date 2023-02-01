<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a
	class="hover:text-zinc-800 dark:hover:text-zinc-100 {$page.url.pathname === href
		? 'text-zinc-800 dark:text-zinc-100'
		: 'text-zinc-500 dark:text-zinc-400'}"
	{href}
>
	<slot />
</a>
