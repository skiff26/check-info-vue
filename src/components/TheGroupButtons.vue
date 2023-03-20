<template>
	<div class="group">
		<button @click="$emit('back')" class="group-return">
			<BaseIcon name="back" w="20" h="20" />
		</button>
		<button v-if="map" @click="markMap" class="group-map">
			<BaseIcon name="map" w="20" h="20" />
		</button>
		<button @click="$emit('clear')" class="group-clear">
			<BaseIcon name="clear" w="20" h="20" />
		</button>
	</div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
	components: { BaseIcon },
	props: ['info', 'map'],
	emits: ['back', 'clear'],
	methods: {
		markMap(){
			window.open(`https://www.google.com/maps/@${this.info.lat},${this.info.lon},5000m/data=!3m1!1e3`, '_blank');
		},
	}
}
</script>

<style scoped>
.group {
	position: absolute;
	top: 2em;
	right: 2.5em;
}
.group button{
	display: inline-block;
	padding: 10px 15px;
	border-radius: 15px;
	border: none;
	position: relative;
}
.group-clear, .group-refresh, .group-return, .group-map{
	margin-left: 10px;
	transition: all 0.3s ease 0s;
	cursor: pointer;
}
.group-clear:hover,
.group-refresh:hover,
.group-return:hover,
.group-map:hover{
	background-color: rgba(199, 1, 1, 0.863);
	transform: scale(1.1);
	transform: translate(0, -5px);
}
.group-clear:hover svg,
.group-return:hover svg,
.group-refresh:hover svg,
.group-map:hover svg{
	fill: white;
}
@media (max-width: 1000px){
	.group{
		width: max-content;
		top: -3.5em;
		left: 0;
	}
}</style>