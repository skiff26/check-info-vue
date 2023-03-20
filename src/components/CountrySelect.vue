<template>
	<div class="v-select">
		<div @click="areOptionsVisible = !areOptionsVisible" class="title">{{ selected }}</div>
		<transition
		enter-active-class="enter-active"
		enter-from-class="enter-from"
		enter-to-class="enter-to"
		leave-active-class="leave-active"
		leave-from-class="leave-from"
		leave-to-class="leave-to"
		>
		<ul class="options" v-if="areOptionsVisible">
			<li v-for="option in options" :key="option.value" @click="selectOption(option)">
				{{ option.name }}
			</li>
		</ul>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
			options: {
				type: Array,
				default(){
					return []
				}
			},
			selected: {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				areOptionsVisible: false,
			}
		},
		methods:{
			selectOption(option){
				this.$emit('select', option)
				this.areOptionsVisible = false
			},
			hideSelect(){
				this.areOptionsVisible = false
			}
		},
		mounted(){
			window.addEventListener('click', event => {
				if(!this.$el.contains(event.target)){
					this.areOptionsVisible = false
				}	
			})
			// document.addEventListener('click', this.hideSelect.bind(this), true)
		},
		beforeMount(){
			document.removeEventListener('click', this.hideSelect)
		},
}
</script>
<style scoped>
.v-select {
	position: relative;
	width: 200px;
	margin: 10px auto;
	cursor: pointer;
	user-select: none;    
}
.title{
	border: 1px solid #aeaeae;
	border-radius: 5px;
	padding: 5px;
}
.v-select li{
	transition: all 0.1s ease 0s;
	margin: 0;
	list-style: none;
}
.v-select li:hover{
	background: #e7e7e7e3;
	color: rgba(0, 0, 0, 0.973);
}
.options{
	border: 1px solid #aeaeae;
	position: absolute;
	top: 35px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.89);
	border-radius: 5px;
}

.enter-active {
	transition: all 0.3s ease 0s;
}
.enter-from {
	opacity: 0;
}
.enter-to {
	opacity: 1;
}
.leave-active {
	transition: all 0.3s ease 0s;
}
.leave-from {
	opacity: 1;
}
.leave-to {
	opacity: 0;
}
</style>