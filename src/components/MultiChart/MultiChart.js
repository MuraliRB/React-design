import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'Asia', 'America'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'No of users in million',
  },
  vAxis: {
    title: 'No of devices in million',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Chart
          width={'650px'}
          height={'250px'}
          chartType="LineChart"
          className='chart-div'
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default MultiLineChart;