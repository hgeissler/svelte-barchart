import BarChart from './BarChart.svelte'

const characteristics = ['Power', 'Stamina', 'Intelligence', 'Focus']

const barChart = new BarChart({
  target: document.body,
  props: {
    title: 'Characteristics bar chart',
  },
})

characteristics.forEach((entry) => {
  barChart.addOption(entry)
})

export default barChart
