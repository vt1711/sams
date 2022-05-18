import React from 'react'
import './piechart.css'
import {
    Chart,ArcElement,LineElement,BarElement,
    PointElement,BarController,BubbleController,
    DoughnutController,LineController,PieController,PolarAreaController,
    RadarController,ScatterController,CategoryScale,
    LinearScale,LogarithmicScale,RadialLinearScale,
    TimeScale,TimeSeriesScale,Decimation,
    Filler,Legend,Title,Tooltip,SubTitle
      } from 'chart.js';

const Data=require("../../../json/records.json");
const{records}=Data;
// console.log(records);

Chart.register(
    ArcElement,LineElement,BarElement,
    PointElement,BarController,BubbleController,
    DoughnutController,LineController,PieController,
    PolarAreaController,RadarController,ScatterController,
    CategoryScale,LinearScale,LogarithmicScale,
    RadialLinearScale,TimeScale,TimeSeriesScale,
    Decimation,Filler,Legend,Title,Tooltip,SubTitle
  );
  

  const paidcount = records.filter((obj) => obj.status === "paid").length;
  const unpaidcount = records.filter((obj) => obj.status === "unpaid").length;

  //   console.log("......................");
//   console.log(paidcount);
//   console.log(unpaidcount);
  
  const data = {
    labels: [
      'Paid',
      'Unpaid',
    ],
    datasets: [{
      label: 'Payment Dues',
      data: [paidcount,unpaidcount],
      backgroundColor: [
        'rgb(102, 255, 102)',
        'rgb(229, 5, 5)',
            ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  new Chart(
    document.getElementById('myChart'),
    config
  );

const PieChart = () => {
    

    return (
        <>
            <div className='chartdiv' >
                <canvas id="myChart"></canvas>                
            </div>
        </>
    )
}

export default PieChart