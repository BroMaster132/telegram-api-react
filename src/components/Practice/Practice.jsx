// import './Practice.css'


// import React, { useState, useEffect } from 'react';
// import { Chart } from 'primereact/chart';
// import { Button } from 'primereact/button';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import {useNavigate} from 'react-router-dom';

// export const Practice = () => {
// const [visible, setVisible] = useState(false);
//     function check() {
//         setVisible(!visible)
//         console.log(visible);
//     }
    
// const columns = [
//     {field: 'id', header: 'ID'},
//     {field: 'name', header: 'Имя'},
//     {field: 'pain', header: 'Коэффициент боли'},
//     {field: 'difficulty', header: 'Коэффициент сложности'},
//     {field: 'chaos', header: 'Коэффициент хаоса'},
//     {field: 'beaty', header: 'Коэффициент красоты кода'},
//   ]

//   const data = [
//     {
//       id: 1,
//       name: 'Vue',
//       pain: 0.3,
//       difficulty: 0.6,
//       chaos: 0.3,
//       beaty: 0.7,
//     },
//     {
//       id: 2,
//       name: 'React',
//       pain: 0.7,
//       difficulty: 0.3,
//       chaos: 1.0,
//       beaty: 0.3,
//     },
//     {
//       id: 3,
//       name: 'Angular',
//       pain: 1.0,
//       difficulty: 0.5,
//       chaos: 0.1,
//       beaty: 0.05,
//     },
//     {
//       id: 4,
//       name: 'Django',
//       pain: 0.4,
//       difficulty: 0.5,
//       chaos: 0.6,
//       beaty: 0.2,
//     },
//     {
//       id: 4,
//       name: 'Node.js',
//       pain: 1.0,
//       difficulty: 1.0,
//       chaos: 1.0,
//       beaty: 0.0,
//     },
//     {
//       id: 5,
//       name: 'FastAPI',
//       pain: 0.1,
//       difficulty: 0.2,
//       chaos: 0.2,
//       beaty: 0.5,
//     }
//   ]

//   const data_ = data.map((item, index) => {
//     return {
//       id: index,
//       name: item.name ,
//       pain: item.pain + '%',
//       difficulty: item.difficulty + '%',
//       chaos: item.chaos + '%',
//       beaty: item.beaty + '%',
//     }
//   })

//   const [chartData, setChartData] = useState({});
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//       const data = {
//           labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//           datasets: [
//               {
//                   label: 'Sales',
//                   data: [1,0.2,0.3,0.4],
//                   backgroundColor: [
//                       'rgba(255, 159, 64, 0.2)',
//                       'rgba(75, 192, 192, 0.2)',
//                       'rgba(54, 162, 235, 0.2)',
//                       'rgba(153, 102, 255, 0.2)'
//                     ],
//                     borderColor: [
//                       'rgb(255, 159, 64)',
//                       'rgb(75, 192, 192)',
//                       'rgb(54, 162, 235)',
//                       'rgb(153, 102, 255)'
//                     ],
//                     borderWidth: 1
//               }
//           ]
//       };
//       const options = {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       };

//       setChartData(data);
//       setChartOptions(options);
//   }, []);

//     const navigate = useNavigate()

//     function first(){
//         navigate('/first')
//     }
//     function second(){
//         navigate('/second/fuckingReact')
//     }
//     function third(){
//         navigate('/third' + '?name=Vasya&age=20')
//     }
    
//     return (
//         <div>
//             <div className="card flex justify-content-center">
//                 <Button label="Show" icon="pi pi-search" onClick={check} />
//                 {visible &&
//                     <h1>You clicked the button</h1>
//                 }
//             </div>

//             <div className="card">
//                 <DataTable value={data_} tableStyle={{ minWidth: '50rem' }}>
//                     {columns.map((column) => (
//                         <Column field={column.field} header={column.header} />
//                     ))}
//                 </DataTable>
//             </div>
//             <div>
//                 <Button label='First' onClick={() =>{first()}} />
//                 <Button label='Second' onClick={() =>{second()}} />
//                 <Button label='Third' onClick={() =>{third()}} />
//             </div>
//             <div>
//             <Chart type="bar" data={chartData} options={chartOptions} />

//             </div>
            
//             <div>
//                 { 
//                 data.map((item, index) => {
//                     if(item.name === 'React'){
//                         return (
//                             <div>
//                                 <h1>React</h1>
//                             </div>
//                         )
      
//                     }
//                     else{
//                         return(
//                             <div>
//                                 <h1>No React</h1>
//                             </div>
//                         )
//                     }
//                 })
//                 }
//             </div>
//         </div>
        
//     )
// }

