<template>
	<div>
	  <canvas ref="pieChart"></canvas>
	</div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import { Chart, registerables } from 'chart.js';
 
 export default defineComponent({
	mounted() {
	  this.renderChart();
	},
	methods: {
	  renderChart() {
		 const data = {
			labels: ['Red', 'Blue', 'Yellow'],
			datasets: [
			  {
				 label: 'My First Dataset',
				 data: [300, 50, 100],
				 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				 hoverOffset: 4,
			  },
			],
		 };
		 const options = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
			  title: {
				 display: true,
				 text: 'Pie Chart Example',
			  },
			  legend: {
				// position: 'right',
				 labels: {
					boxWidth: 20,
					fontColor: 'black',
				 },
			  },
			},
		 };
		 Chart.register(...registerables);
		 const pieChart = new Chart(this.$refs.pieChart as HTMLCanvasElement, {
			type: 'pie',
			data,
			options,	
		 });
	  },
	},
 });
 </script>