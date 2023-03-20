<template>
	<Sidebar/>
	<div class="wrapper">
		<h1>Расчитать индекс массы тела</h1>
		<div class="inputs">
			<input v-model.number="height" @input="limitHeight" @keydown.enter="countResult" @keydown.esc="clearInfo" type="number" placeholder="Введите ваш рост">
			<input v-model.number="weight" @input="limitWeight" @keydown.enter="countResult" @keydown.esc="clearInfo" type="number" placeholder="Введите ваш вес">
		</div>
		<button class="count" v-if="height && weight" @click="countResult">Расчитать</button>
		<button class="count" v-else disabled>Введите данные</button>
		<TheBodyMassIndexResults :result="result" v-if="isCounting"/>
		<TheBodyMassIndexLoader v-show="isLoading"/>
		<div class="error" v-show="error">{{ error }}</div>
		<button v-show="isCounting" class="close" @click="clearInfo">Очистить</button>
	</div>
</template>
<script>
import TheBodyMassIndexResults from '../components/TheBodyMassIndexResults.vue';
import TheBodyMassIndexLoader from '../components/TheBodyMassIndexLoader.vue';
import Sidebar from '../components/Sidebar.vue'
export default {
	components: { Sidebar, TheBodyMassIndexResults, TheBodyMassIndexLoader },
	data () {
		return {
			isCounting: false,
			isLoading: false,
			height: '',
			weight: '',
			result: '',
			error: '',
		}
	},
	methods: {
		limitHeight(){
			if(this.height > 240){
				const truncatedNumber = Math.floor(this.height).toString().substring(0, 3);
				this.height = +truncatedNumber;
			}
		},
		limitWeight(){
			if(this.weight > 200){
				const truncatedNumber = Math.floor(this.weight).toString().substring(0, 3);
				this.weight = +truncatedNumber;
			}
		},
		countResult(){
			if(this.height > 0 && this.weight > 0){
				this.error = ''
				this.isLoading = true
				this.isCounting = false
				setTimeout(() => {
					this.isLoading = false
					this.isCounting = true
				}, 650);
				if (this.height.toString().includes('.' || ',')){
					this.result = (this.weight / Math.pow(+this.height, 2)).toFixed(3)
				} else {
					this.result = (this.weight / Math.pow(this.height/100, 2)).toFixed(3)
				}
			} else {
				this.clearInfo()
				this.error = 'Значение не может быть 0'
			}
		},
		clearInfo(){
			this.weight = ''
			this.height = ''
			this.result = ''
			this.isCounting = false
		}
	}
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.error{
	margin-top: 10px;
	color: rgb(139, 14, 14);
}
.wrapper{
	margin: 15px;
	min-height: 350px;
	background-image: linear-gradient(to right, #434343 0%, black 100%);
}
.inputs{
	display: flex;
	flex-wrap: wrap;
	column-gap: 30px;
	justify-content: center;
}
input:focus{
	border-bottom-color: rgba(255, 255, 255, 0.829);
}
.count{
	margin-top: 20px;
	padding: 10px 30px;
	border-radius: 5px;
	color: rgba(255, 255, 255, 0.795);
	border: none;
	transition: all 0.3s ease 0s;
	font-weight: 600;
	cursor: pointer;
	background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);
}
.count:disabled{
	opacity: 0.5;
	cursor:not-allowed;
}
.count:hover{
	transform: scale(1.1);
}
.close {
	background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
	border: none;
	cursor: pointer;
	margin-top: 20px;
	padding: 10px 30px;
	border-radius: 10px;
	transition: all 0.3s ease 0s;
	color: white;
}
.close:hover{
	transform: scale(1.1);
}
@media(max-width: 695px){
	.wrapper{
		width: auto;
		min-height: min-content;
	}
	.wrapper h1 {
		font-size: 24px;
	}
	.count:hover{
		transform: none;
	}
}
</style>