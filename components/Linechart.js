import {Line} from 'react-chartjs-2';

const state = {
  labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets:[
    {
      label:'RainFall',
      fill:false,
      lineTension:0.5,
      backgroundColor:'rgba(75,192,192,1)',
      borderColor:'rgba(0,0,0,1)',
      borderWidth:2,
      data:[
        69,40,57,82,56,70
      ]
    }
  ]
}

function Linechart() {
  return (
    <div className="bar-chart">
      <Line  data={state} options={{
        title:{
          display:true,
          text:'Average RainFall Per Month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
      />
    </div>
  );
}

export default Linechart;