<template>
	<div class="results">
		<p>Индекс массы тела: {{ result }}</p>
		<p v-if="result < 18.500">Ниже нормального</p>
		<p v-else-if="result >= 18.500 && result < 25">Нормальный вес</p>
		<p v-else-if="result >= 25 && result < 30">Избыточный вес</p>
		<p v-else-if="result >= 30 && result < 35">Ожирение 1 степени</p>
		<p v-else-if="result >= 35 && result < 40">Ожирение 2 степени</p>
		<p v-else>Ожирение 3 степени</p>
	</div>
</template>

<script>
export default {
	props: ['result']
}
</script>
<style scoped>
.results {
	margin-top: 20px;
}
.results p{
	margin-top: 10px;
}
</style>