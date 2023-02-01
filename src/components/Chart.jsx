import React, { useState } from 'react'
import {SlArrowDown} from 'react-icons/sl'
import {chartMock} from '../mocks/chart.mock'

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
      } bg-lightModeBg rounded-2xl my-2`}
    >
      <div className="flex justify-center items-center pl-5 rounded-2xl">
        {show ? (
          <div onClick={() => setShow(!show)}>
            <SlArrowDown className="mr-3 fill-gold pt-1 cursor-pointer" />
          </div>
        ) : (
          <div onClick={() => setShow(!show)}>
            <SlArrowDown className="mr-3 fill-gold pt-1 rotate-180 cursor-pointer" />
          </div>
        )}
        <span>Visitors History</span>
      </div>
      {show ? (
        <div style={{ height: '100%', width: '100%' }} className="flex justify-center">
          <Line style={{ margin: '0px' }} data={data} options={options}></Line>
        </div>
      ) : null}
    </div>
  )
}
