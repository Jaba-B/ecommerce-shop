import React, { useState } from 'react'
import chartMock from '../mocks/chart.mock'
import { SlArrowDown } from 'react-icons/sl'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export const Chart = () => {
  const [show, setShow] = useState(true)
  const data = {
    labels: chartMock.labels,
    datasets: [
      {
        data: chartMock.data,
        backgroundColor: 'transparent',
        borderColor: '#bfa181',
        pointBorderColor: 'transparent',
        tension: 0.5,
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        border: {
          dash: [10],
        },
      },
    },
  }

  return (
    <div
      className={`w-full h-full ${
        show ? 'lg:h-[330px] h-[197px] ' : 'h-auto'
      }`}
    >
      <div className="flex items-center pl-5 rounded-2xl">
        {show ? (
          <div onClick={() => setShow(!show)}>
            <SlArrowDown className="ml-1 mr-3 fill-[#bfa181] pt-1 cursor-pointer" />
          </div>
        ) : (
          <div onClick={() => setShow(!show)}>
            <SlArrowDown className="mr-3 fill-[#bfa181] pt-1 rotate-180 cursor-pointer" />
          </div>
        )}
        <span>Visitors History (K)</span>
      </div>
      {show ? (
        <div style={{ height: '100%', width: '100%', padding: '0 0 0 20px' }}>
          <Line style={{ margin: '0px' }} data={data} options={options}></Line>
        </div>
      ) : null}
    </div>
  )
}

export default Chart