<template>
		<div class="results">
			<p class="success">Status: Success</p>
			<p>{{ showCountry }}<img style="margin-left: 5px;" width="20" :src="flagCountry" :alt="flagAltCountry"></p>
			<p>{{ showContinent }}</p>
			<p>{{ showRegion }}</p>
			<p>{{ showCity }}</p>
			<p>{{ showCurrency }}</p>
			<p>{{ showZip }}</p>
			<p>{{ showTimezone }}</p>
			<p>{{ showIsp }}</p>
		</div>
</template>

<script>
export default {
	props: ['info'],
	computed: {
		flagCountry(){
		return `src/assets/flags/${this.info.countryCode.toLowerCase()}.png`
		},
		flagAltCountry(){
			return this.info.countryCode.toLowerCase().repeat(2)
		},
		showCountry(){
			return "Старана: " + this.info.country
		},
		showContinent(){
			return "Континент: " + this.info.continent
		},
		showRegion(){
			return "Регион: " + this.info.regionName 
		},
		showCity(){
			return "Город: " + this.info.city
		},
		showZip(){
			return "ZIP код: " + this.info.zip
		},
		showTimezone(){
			return "Часовой пояс: " + this.info.timezone
		},
		showIsp(){
			return "Провайдер: " + (this.info.isp < 2 ? "не найден" : this.info.isp)
		},
		showCurrency(){
			return "Валюта: " + this.info.currency
		}
	},
}
</script>

<style scoped>
.success{
	position: relative;
}
.success:after{
	content: '';
	position: absolute;
	margin-left: 5px;
	border-radius: 50%;
}
.success::after{
	width: 15px;
	height: 15px;
	background-color: #23c53e;
	border: 1px solid #09ba22;
}
</style>