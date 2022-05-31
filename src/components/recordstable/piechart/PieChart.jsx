import React, { useState, useEffect } from 'react'
import './piechart.css'
import {
  Chart, ArcElement, LineElement, BarElement,
  PointElement, BarController, BubbleController,
  DoughnutController, LineController, PieController, PolarAreaController,
  RadarController, ScatterController, CategoryScale,
  LinearScale, LogarithmicScale, RadialLinearScale,
  TimeScale, TimeSeriesScale, Decimation,
  Filler, Legend, Title, Tooltip, SubTitle
} from 'chart.js';

const Data = require("../../../json/records.json");
const { records } = Data;
// console.log(records);

Chart.register(
  ArcElement, LineElement, BarElement,
  PointElement, BarController, BubbleController,
  DoughnutController, LineController, PieController,
  PolarAreaController, RadarController, ScatterController,
  CategoryScale, LinearScale, LogarithmicScale,
  RadialLinearScale, TimeScale, TimeSeriesScale,
  Decimation, Filler, Legend, Title, Tooltip, SubTitle
);




const PieChart = () => {

  let mychart, upcount, pcount;

  useEffect(() => {

    upcount = records.filter((obj) => obj.status === "unpaid").length;
    pcount = records.filter((obj) => obj.status === "paid").length;
    setPaidcount(pcount);
    setUnpaidcount(upcount);

  }, []);

  const [unpaidcount, setUnpaidcount] = useState(upcount);
  const [paidcount, setPaidcount] = useState(pcount);
  const [data, setData] = useState({

    datasets: [{
      label: 'Payment Dues',
      data: [paidcount, unpaidcount],
      backgroundColor: [
        'rgb(7, 99, 7)',
        'rgb(229, 5, 5)',
      ],
      hoverOffset: 4
    }]
  })
  const [config, setConfig] = useState({
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,

        }
      }
    },
  })





  useEffect(
    () => {

      mychart = new Chart(
        document.getElementById("myChart"),
        config
      );


      //first this return will be executed which clean ups the code
      return () => {
        console.log("dddddddddddddddddddddddddddd");
        mychart.destroy();
      }

    }, [config]
  )

  useEffect(() => {
    setData(
      {

        datasets: [{
          label: 'Payment Dues',
          data: [paidcount, unpaidcount],
          backgroundColor: [
            'rgb(41, 190, 3)',
            'rgba(255, 10, 10, 0.493)',
          ],
          hoverOffset: 4
        }]
      }
    )
  }, [paidcount, unpaidcount]);

  useEffect(() => {

    setConfig(
      {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,

            }
          }
        },
      }
    )

  }, [data])


  //let [data,setdata] = useState( {});
  //let [config,setconfig] = useState( {});
  //console.log("......................");
  //console.log(paidcount);
  //console.log(unpaidcount);





  // const data = {
  //   labels: [
  //     'Paid',
  //     'Unpaid',
  //   ],
  //   datasets: [{
  //     label: 'Payment Dues',
  //     data: [paidcount,unpaidcount],
  //     backgroundColor: [
  //       'rgb(102, 255, 102)',
  //       'rgb(229, 5, 5)',
  //           ],
  //     hoverOffset: 4
  //   }]
  // };

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Doughnut Chart'
  //       }
  //     }
  //   },
  // };

  // mychart= new Chart(
  //   document.getElementById("myChart"),
  //   config
  //    )

  //test funcion to update doughnut values on button click
  // const enter = () => {

  //   setPaidcount(paidcount + 10);
  //   setUnpaidcount(unpaidcount + 1);
  //   console.log(paidcount);
  // }


  return (

    <>

      {/* //test button to update doughnut values on button click
      <button onClick={()=>enter()}>oooooooooooooo</button> */}


      <div className='fulldoughnutdiv'>
        <h2 className='doughnuttitle'> Doughnut View</h2>
        <div className='chartdiv' >
          <canvas id="myChart" ></canvas>
        </div>
        <div className='legendsdiv'>
          <div className='paidlegendsdiv'>
            <div className='paidlegendbox'></div>
            <div className='paidlegend'><span>Paid</span></div>
          </div>
          <br />
          <div className='unpaidlegendsdiv'>
            <div className='unpaidlegendbox'></div>
            <div className='unpaidlegend'><span>Unpaid</span></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PieChart