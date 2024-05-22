//---------------------------------------PLotly Configuration - start-----------------------------------------------
var config = {
    displayModeBar: false,  // Ocultar la barra de herramientas
    displaylogo: false,
};

var config_responsive = {
    displayModeBar: false,  // Ocultar la barra de herramientas
    displaylogo: false,
    responsive: true,
};

var config_line_responsive = {
    //displayModeBar: false,  // Ocultar la barra de herramientas
    displaylogo: false,
    responsive: true,
};

var chart_font = {
  family: "Nunito Sans",
  size: 15,
  color: "#FFFFFF"
};
//---------------------------------------PLotly Configuration - end-----------------------------------------------




//---------------------------------------Complience - start-----------------------------------------------
var gCumplimiento = new JustGage({
    id: "cumplimiento",
    value: 0.0,
    //width: 200,
    //height: 200,
    min: 0,
    max: 100,  // Ajusta el rango máximo según tus necesidades
    //label: "Disponibilidad",
    labelFontSize: 30,
    valueFontColor: "#f3f5f4", // Cambia el color del valor
    valueFontFamily: "Nunito Sans", // Cambia la fuente del valor
    valueMinFontSize: 30, // Cambia el tamaño del valor
    levelColors: ['#2E91E5'], // Cambia los colores del tacómetro
    gaugeColor: "#1C2231", // Cambia el color del fondo del tacómetro
    decimals: 1,
    gaugeWidthScale:0.3,
    labelFontColor: "#ffffff",
    symbol: '%',
    labelMinFontSize: 18,
    pointer: false,
    relativeGaugeSize: true,
    donut: true,
    minLabelMinFontSize: 15,
    maxLabelMinFontSize: 15,
    //displayRemaining: true

});
//---------------------------------------Complience - end-----------------------------------------------


//---------------------------------------OEE Trends - start-----------------------------------------------
var trend_oee = {
  x: [],
  y: [],
  type: 'line',
  mode: 'lines', //+markers
  name: 'OEE',
  line: { width: 2, color: '#00A08B' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#00A08B',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};

var trend_disponibilidad = {
  x: [],
  y: [],
  type: 'line',
  mode: 'lines', //+markers
  name: 'Disponibilidad',
  line: { width: 2, color: '#FC0080' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#FC0080',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};

var trend_rendimiento = {
  x: [],
  y: [],
  type: 'line',
  mode: 'lines', //+markers
  name: 'Rendimiento',
  line: { width: 2, color: '#511CFB' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#511CFB',     // Color de los marcadores
        opacity: 1.0      // Opacidad de los marcadores
  }
};

var trend_calidad = {
  x: [],
  y: [],
  type: 'line',
  mode: 'lines', //+markers
  name: 'Calidad',
  line: { width: 2, color: '#2E91E5' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#2E91E5',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};

var data_trend_oee = [
    trend_oee,
    trend_disponibilidad,
    trend_rendimiento,
    trend_calidad,
    //line: {
    //    color: ['#BCBD22', '#1F77B4', '#FF7F0E', '#2CA02C'],
    //    //opacity: 0.8,
    //},
    ];

var layout_trend_oee = {
    //title: 'Tendencia del OEE',
    xaxis: {
        title: {
            //text: 'Tiempo',
        },
        showgrid: true,
        //standoff: 50,
        tickfont: {
            family: "Nunito Sans", // Establece la familia de la fuente
            size: 15, // Establece el tamaño de la fuente
            color: '#ffffff' // Establece el color de la fuente
        },
        gridcolor: '#1e2130',
        gridwidth: 2,
    },
    yaxis: {
        title: {
            text: '%',
            position: 'v',
            font: {
                family: "Nunito Sans" ,// Establece la familia de la fuente
                size: 15, // Establece el tamaño de la fuente
                color: '#ffffff' // Establece el color de la fuente
            }
        },
        //range: [0.0, 25.0],
        showgrid: true,
        tickfont: {
            family: "Nunito Sans", // Establece la familia de la fuente Open Sans
            size: 15, // Establece el tamaño de la fuente
            color: '#ffffff' // Establece el color de la fuente
        },
        gridcolor: '#1e2130',
        gridwidth: 2,
    },
    //showgrid: false,  // Desactivar cuadrícul
    height: 200,
    //width: 540,
    margin: { t: 0, r: 0, l: 50, b: 0 },
    paper_bgcolor: "#141824",
    plot_bgcolor: "#141824",
    legend: {
        font: {
            family: "Nunito Sans", // Establece la familia de la fuente
            //size: 15, // Establece el tamaño de la fuente
            color: '#ffffff' // Establece el color de la fuente
        },
        orientation: 'h',
        y: -0.4
    }
    //margin: { t: 25, r: 10, l: 60 },
    //legend: { orientation: 'h', x: 0.1, y: -0.15 }
};

Plotly.newPlot('trend_oee', data_trend_oee, layout_trend_oee, config_responsive);
//---------------------------------------OEE Trends - end-----------------------------------------------

//--------------------------------------Availability pie - start-----------------------------------------------
var data_disponibilidad = [{
  type: "pie",
  values: [0, 0, 0],
  labels: ["Inactivo", "Operativo", "No Operativo"],
  //textinfo: "label+percent",
  textinfo: "percent",
  textposition: "auto",
  automargin: true,
  hole: .0,
  textfont: {
    family: "Nunito Sans",  // Cambia "Arial" por la fuente que desees
    size: 15,         // Tamaño de la fuente en píxeles
    color: "#f3f5f4" // Color de la fuente, reemplaza "your-color" con el color deseado
  },

  marker: {
    colors: ['#1C2231', '#00A08B', '#2E91E5'],
    line: {width: 0.5, color: "#000000"}
  }

}]

var layout_disponibilidad  = {
  height: 200,
  //width: 400,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: true,
  annotations: [
    {
      font: {
        size: 15,
        family: "Nunito Sans",
      },
      showarrow: false,
      text: '',
      //x: 0.26,
      //y: 0.5
    }],
   paper_bgcolor: "#141824",
    legend: {
      font: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          //size: 15, // Establece el tamaño de la fuente
          color: '#ffffff' // Establece el color de la fuente
      },
      orientation: 'h',
      //y: -0.05,
      //x:0
    }
};

Plotly.newPlot('disponibilidad', data_disponibilidad, layout_disponibilidad, config_responsive)
//--------------------------------------Availability pie - end-----------------------------------------------


//--------------------------------------Quality bar - start-----------------------------------------------
var data_calidad = [
  {
    x: ['Producción'],
    y: [0],
    width: [0.15],
    name: 'Unidades Producidas',
    marker: {
        color: ['#2E91E5'], 
        line: {width: 0.5, color: "#000000"}
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: [''],
    textposition: 'auto',
    hoverinfo: 'none',
    textfont: {
        family: "Nunito Sans", // Establece la familia de la fuente
        size: 15, // Establece el tamaño de la fuente
        color: '#ffffff' // Establece el color de la fuente
    }
  },
  {
    x: ['Producción'],
    y: [],
    width: [0.15],
    name: 'Unidades Aceptadas',
    marker: {
        color: ['#00A08B'],
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: [''],
    //textposition: 'outside',
    hoverinfo: 'none',
    textfont: {
        family: "Nunito Sans", // Establece la familia de la fuente
        size: 15, // Establece el tamaño de la fuente
        color: '#ffffff' // Establece el color de la fuente
    }
  },
  {
    x: ['Producción'],
    y: [],
    width: [0.15],
    name: 'Unidades Rechazadas',
    marker: {
        color: ['#1C2231'],
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: [''],
    textposition: 'outside',
    hoverinfo: 'none',
    textfont: {
        family: "Nunito Sans", // Establece la familia de la fuente
        size: 15, // Establece el tamaño de la fuente
        color: '#ffffff' // Establece el color de la fuente
    }
  },
];

var layout_calidad = {
    barcornerradius: 2,
    bargap: 0.4,
    margin: {t: 0, "b": 30, l: 0, r: 0},
    height: 200,
    barmode: "group",
    xaxis: {
        ticklabelposition: "auto",
        //showgrid: false,
        showticklabels: false,
        //showline: false,
        //zeroline: false,
        tickfont: {
            family: "Nunito Sans", // Establece la familia de la fuente
            size: 14, // Establece el tamaño de la fuente
            color: '#ffffff' // Establece el color de la fuente
        }
    },
    yaxis: {
        ticklabelposition: "auto",
        //title: 'Horas',
        showgrid: false, // Ocultar cuadrícula en el eje y
        zeroline: false,
        //showticklabels: true,  // Ocultar marcas del eje y
        tickfont: {
            family: "Nunito Sans", // Establece la familia de la fuente
            size: 15, // Establece el tamaño de la fuente
            color: '#ffffff' // Establece el color de la fuente
        }
    },
    showgrid: false,
    paper_bgcolor: "#141824",
    plot_bgcolor: "#141824",
    legend: {
      font: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          //size: 15, // Establece el tamaño de la fuente
          color: '#ffffff' // Establece el color de la fuente
      },
      orientation: 'h',
      //y: -0.05,
      //x: 0.15
  }
    };




Plotly.newPlot('calidad', data_calidad, layout_calidad, config_responsive);
//--------------------------------------Quality bar - end-----------------------------------------------


//--------------------------------------Fuell OEE - start-----------------------------------------------
var data_full_oee = [
  {
    type: "indicator",
    mode: "number+gauge",
    value: 0,
    domain: { x: [0.25, 1], y: [0.02, 0.22] },
    title: {
      text: "Calidad",
      font: chart_font,
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 100],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "#2E91E5",
        thickness: 1,
        line: {width:0, color:"#000000"},
      },
      bordercolor: "#1C2231",
      //borderwidth:3,
    },
    number: {
      suffix: "%",
      font: chart_font,
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 0,
    domain: { x: [0.25, 1], y: [0.28, 0.48] },
    title: {
      text: "Rendimiento",
      font: chart_font,
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [null, 100],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "2E91E5",
        thickness: 1,
      },
      bordercolor: "#1C2231",
    },
    number: {
      suffix: "%",
      font: chart_font,
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 0,
    domain: { x: [0.25, 1], y: [0.54, 0.74] },
    title: {
      text: "Disponibilidad",
      font: chart_font,
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [null, 100],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "2E91E5",
        thickness: 1,
      },
      bordercolor: "#1C2231",
    },
    number: {
      suffix: "%",
      font: chart_font,
    },
  },
  {
    type: "indicator",
    mode: "number+gauge",
    value: 0,
    domain: { x: [0.25, 1], y: [0.8, 1.0] },
    title: {
      text: "OEE",
      font: chart_font,
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [null, 100],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "2E91E5",
        thickness: 1,
      },
      bordercolor: "#1C2231",
    },
    number: {
      suffix: "%",
      font: chart_font,
    },
  },
];

var layout_full_oee = {
  //width: 600,
  height: 200,
  margin: { t: 0, r: 15, l: 25, b: 0 },
  paper_bgcolor: "#141824",
};

Plotly.newPlot('full_oee', data_full_oee, layout_full_oee, config_responsive);
//--------------------------------------Full OEE - end-----------------------------------------------



//--------------------------------------rendimeinto start-----------------------------------------------

var data_performance = [
  {
    type: "indicator",
    mode: "number+gauge",
    value: 0,
    domain: { x: [0.25, 1.0], y: [0.28, 0.48] },
    title: {
      text: "Estándar",
      font: chart_font,
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 10],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "#2E91E5",
        thickness: 1,
      },
      bordercolor: "#1C2231",
      //borderwidth:3,
    },
    number: {
      //suffix: " und",
      font: chart_font
    },
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 0,
    domain: { x: [0.25, 1.0], y: [0.54, 0.74] },
    title: {
      text: "Producidas",
      font: chart_font,
    },
    delta: {
      reference: 0, 
      position: "buttom",
      font: chart_font,
      increasing: { color: "#1CA71C" }, 
      decreasing: { color: "#FB0D0D" },
      //suffix: ' und'
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 10],
        visible: false
      },
      bgcolor: "#1C2231",
      bar: {
        color: "#2E91E5",
        thickness: 1,
      },
      bordercolor: "#1C2231",
      //borderwidth:3,
      threshold: {

        line: { color: "#000000", width: 3 },

        thickness: 0.9,

        value: 0

      },
    },
    number: {
      //suffix: " und",
      font: chart_font
    },
  },
];

var layout_performance = {
  //width: 600,
  height: 200,
  margin: { t: 0, r: 15, l: 25, b: 0 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
/*   annotations: [
    {
      font: {
        size: 15,
        family: "Nunito Sans",
        color: "#ffffff"
      },
      showarrow: false,
      xref: 'paper',
      yref: 'paper',
      x: 0,
      y: 0.42,
      text: 'Estándar 0 und',
      xanchor: 'auto',
      yanchor: 'middle',
      //x: 0.26,
      //y: 5
    }], */
};

Plotly.newPlot('performance', data_performance, layout_performance, config_responsive);

//--------------------------------------rendimeinto end-----------------------------------------------

function updateData() {
  // Realizar una petición AJAX para obtener los datos más recientes
  fetch('https://industrial-insights-jamesgarcia.pythonanywhere.com/goem/api/ManufacturingData/')  // Reemplaza con la URL correcta de tu vista
      .then(response => response.json())
      .then(data => {
          // Actualizar solo los datos de las trazas

          gCumplimiento.refresh(data['last_compliance']);

          Plotly.update('full_oee', {
            value: [data.last_quality, data.last_performance, data.last_availability, data.last_oee]
          });

          Plotly.update('disponibilidad', {
            values: [[data.last_downtime, data.last_operating_time, data.last_non_operating_time]]
          });

          Plotly.update('calidad', {
            y: [[data.last_processed_units], [data.last_accepted_units], [data.last_rejected_units]],
            text: [[data.last_processed_units + ''], [data.last_accepted_units + ''], [data.last_rejected_units + '']],
          });

          Plotly.update('performance', {
            value: [data.last_total_units, data.last_processed_units],
            'delta.reference': [data.last_total_units, data.last_total_units],
            'gauge.axis.range': [[0, data.last_reference_total_units], [0, data.last_reference_total_units]],
            'gauge.threshold.value': [,data.last_total_units]

          });

          //layout_performance.annotations[0].text = `Estándar ${data.last_total_units} und`;
          //layout_performance.annotations[0].x = data.last_total_units / data.last_reference_total_units;
          //layout_performance.annotations[0].x = data.last_total_units;
          
          //Plotly.relayout('performance', layout_performance);


          Plotly.update('trend_oee', {
            x: [data.last_shift_timestamps],
            y: [data.last_shift_oee, data.last_shift_availability, data.last_shift_performance, data.last_shift_quality]
          });

          var valueField = document.getElementById('reference_total_units');
          //var newValue = Math.floor(Math.random() * 10000); // Ejemplo de nuevo valor aleatorio
          //valueField.textContent = newValue;
          valueField.textContent = data.last_reference_total_units + ' und';

          var availability_field = document.getElementById('availability_field');
          availability_field.textContent = data.last_availability.toFixed(1) + '%';

          var performance_field = document.getElementById('performance_field');
          performance_field.textContent = data.last_performance.toFixed(1) + '%';

          var quality_field = document.getElementById('quality_field');
          quality_field.textContent = data.last_quality.toFixed(1) + '%';

          var date_field = document.getElementById('date_field');
          date_field.textContent = data.formatted_last_shift_start_timestamp + ' - ' + data.formatted_last_shift_end_timestamp;


      });
}

// Actualizar solo los datos cada segundo
setInterval(updateData, 1000);