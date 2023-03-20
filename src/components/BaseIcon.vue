<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="w || 16" :height="h || 16" fill="currentColor" viewBox="0 0 16 16"
		v-html="path">
	</svg>
</template>

<script>
import icons from '../icons'

export default {
	props: ['name', 'w', 'h'],
	data(){
		return {
			path: icons[this.name]
		}
	}
}
</script>