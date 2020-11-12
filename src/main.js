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

barChart.update('Power', 80)
barChart.update('Stamina', 50)

export default barChart
