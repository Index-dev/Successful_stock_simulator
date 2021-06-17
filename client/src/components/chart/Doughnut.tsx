import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data ={
    datasets:[
        {
            data:[10,20,30],
            // backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
        }
    ],
    labels:[
        'Red',
        'Yellow',
        'Blue'
    ]
}

const DoughnutChart = ()=>{
    return(
        <div>
            <Doughnut 
                type="doughnut" 
                // width={100}
                // height={50}
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
            />
        </div>
    );

}

export default DoughnutChart;