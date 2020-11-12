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

// test functions for changing the bar values randomly
const getRandom = (max = 100, min = 0) => {
  min = Math.floor(min)
  max = Math.ceil(max)
  return Math.round(Math.random() * (max - min)) + min
}

const updateData = (chart, options, time) => {
  setTimeout(() => {
    const index = getRandom(options.length - 1)
    const option = options[index]
    const value = getRandom()
    chart.update(option, value)
    // recursive
    updateData(chart, options, time)
  }, time)
}
// changes value of characterisitcs every 2 seconds
updateData(barChart, characteristics, 2000)

export default barChart
