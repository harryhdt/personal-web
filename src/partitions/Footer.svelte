<script lang="ts">
	import { Heart as HeartIcon } from 'lucide-svelte';
</script>

<footer class="border-t border-zinc-200 dark:border-zinc-800 mt-auto text-sm">
	<div class="max-w-7xl text-center py-4 mx-auto px-4">
		<a
			href="/"
			class="font-medium text-green-700 hover:text-green-800 dark:text-green-600 dark:hover:text-green-700 mb-1 inline-block"
		>
			{'{ harryhdt.dev }'}
		</a>
		<br />
		Copyright {new Date().getFullYear()}
		made with <HeartIcon class="text-red-600 dark:text-red-500 inline w-3.5 h-3.5" /> love.
	</div>
</footer>
