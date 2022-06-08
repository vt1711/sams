import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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

//for data retreival from json file
// const Data = require("../../../json/records.json");
// const { records } = Data;
// // console.log(records);

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

  const navigate =useNavigate();

  let mychart, upcount, pcount;

  ///////////////////////////////////////db data fetch/////////////////////////////
  let Data;
  const [records, setRecords] = useState([]);

  const getfunction = async () => {
    let res;
    res = await fetch(`/showrecords`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
         },
         credentials :"include"
        });

    Data = await res.json();
    // console.log(Data[0].full_name);
    // alert(Data[0].full_name);
    // alert(JSON.stringify(Data));
    console.log(Data)
    
    if(res.status=== 401){
      
      navigate('/unauthorized');
    }
    else if (res.status === 404 || !Data) {

      console.log("Error ! Could not fetch records");
      window.alert("Error ! Could not fetch records");
    }
    else { 
      console.log("Records fetched");
      // window.alert("Records fetched");

      // console.log("dataaaaaaaa pre");
      // console.log(Data);
      // console.log("cetntereeeeeeeee pre");
      // console.log(center);


      setRecords(Data);
      console.log("........Data.....",Data);
      // console.log("cetntereeeeeeeee post");
      
    }
  }

  useEffect(() => {
    getfunction();


  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////



  useEffect(() => {

    upcount = records.filter((obj) => obj.status === "Unpaid").length;
    pcount = records.filter((obj) => obj.status === "Paid").length;
    setPaidcount(pcount);
    setUnpaidcount(upcount);

  }, [records]);

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
        console.log("....old doughnut cleanup...");
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