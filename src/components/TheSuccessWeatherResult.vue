<template>
	<div class="results">
		<p>{{ showCountry }}<img style="margin-left: 5px;" width="20" v-bind:src="flagCountry" :alt="flagAltCountry"></p>
		<p>{{ showTemp }}</p>
		<p>{{ showFeelsLike }}</p>
		<p>{{ showMinTemp }}</p>
		<p>{{ showMaxTemp }}</p>
		<div @click="$emit('close')" class="close">Очистить</div>
	</div>
</template>

<script>
export default {
	props: ['info'],
	emits: ['close'],
	computed: {
		flagCountry(){
			return `src/assets/flags/${this.info.sys.country.toLowerCase()}.png`
		},
		flagAltCountry(){
			return this.info.sys.country.toLowerCase().repeat(2)
		},
		showTemp(){
			return "Температура: " + Math.ceil(this.info.main.temp) + "°"
		},
		showFeelsLike(){
			return "Ощущается как: " + Math.round(this.info.main.feels_like) + "°"
		},
		showMinTemp(){
			return "Минимальная температура: " + Math.round(this.info.main.temp_min) + "°"
		},
		showMaxTemp(){
			return "Максимальная температура: " + Math.round(this.info.main.temp_max) +"°"
		},
		showCountry(){
			return "Код страны: " + this.info.sys.country
		},
	},
}
</script>

<style scoped>
.close{
	margin-top: 20px;
	padding: 5px 10px;
	display: inline-block;
	cursor: pointer;
	transition: all 0.3s ease 0s ;
	border-radius: 5px;
	background: #e3bc4b;
	border: 2px solid #b99935;
}
.close:hover{
	background: #c7a642;
	transform: scale(1.1);
}
</style>
