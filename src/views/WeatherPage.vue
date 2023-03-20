<template>
	<Sidebar />
	<div class="wrapper">
		<h1>Погодное приложение</h1>
		<p class="subtitle">Узнать погоду в {{ city == "" ? "вашем городе" : cityName}}</p>
		<input type="text" v-model="city" @keydown.enter="getWeather()" @keydown.esc="clearInfo()" placeholder="Введите город">
		<button class="button" v-if="city != ''" @click="getWeather()">Получить погоду</button>
		<button class="button" disabled v-else>Введите название города</button>
		<CourntySelect :options="options" :selected="selected" @select="optionSelect"/>
		<p class="selectCity" v-show="selected != 'Выбрать'">{{ "Выбранный город: " + selected }}</p>
		<p class="error" v-show="error">{{ error }}</p>

		<TheWeatherLoader v-show="loading"/>

		<TheSuccessWeatherResult v-if="info != null && loading === false" :info="info" @close="clearInfo"/>

	</div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../components/Sidebar.vue'
import CourntySelect from '../components/CountrySelect.vue'
import TheWeatherLoader from '../components/TheWeatherLoader.vue'
import TheSuccessWeatherResult from '../components/TheSuccessWeatherResult.vue'

export default {
	components: {
		Sidebar, CourntySelect, TheWeatherLoader, TheSuccessWeatherResult
	},
	data(){
		return {
			city: "",
			error: "",
			info: null,
			loading: false,
			selected: 'Выбрать',
			options: [
				{name: 'Warsaw', value: 1},
				{name: 'Kherson', value: 2},
				{name: 'New York', value: 3},
				{name: 'Berlin', value: 4},
				{name: 'Barcelona', value: 5},
				{name: 'Amsterdam', value: 6},
				{name: 'Bern', value: 7},
				{name: 'Dublin', value: 8},
				{name: 'London', value: 9},
				{name: 'Paris', value: 10},
		],
		}
	},
	computed: {
		cityName(){
			return "«" + this.city + "»" 
		},
	},
	methods: {
		getWeather(){
			this.loading = true
			setTimeout(() => {
				if(this.city.trim().length < 2){
					this.error = "Некорректное название"
					return false
				}
				this.selected = this.city

				axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=412a4694e6276bff6bdfd0736749921f`)
					.then(res => (this.info = res.data, this.loading = false))
			}, 500)
		},
		optionSelect(option){
			this.selected = option.name
			this.city = option.name
		},
		clearInfo(){
			this.info = null,
			this.selected = 'Выбрать',
			this.city = ''
		},
	}
}
</script>

<style scoped>
.wrapper {
	min-height: 520px;
}
@media (max-width: 427px){
	.button{
		display: block;
		margin: 0 auto;
		margin-top: 10px;
	}
	.button:hover{
		transform: none;
	}
	.wrapper h1 {
	font-size: 28px;
	}
}
</style>