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


//---------------------------------------OEE KPI - start-----------------------------------------------
// var data_oee = [
//   {
//     type: "indicator",
//     mode: "number",
//     value: 68.7,
//     domain: { x: [0, 1], y: [0, 1] },
//     //delta: { reference: 4720, position: "right", increasing: { color: "#2CA02C" }, decreasing: { color: "#D62728" } },
//     number: {
//         //prefix: "OEE ",
//         suffix: "%",
//           font: {
//             family: "Nunito Sans",  // Cambia "Arial" por la fuente que desees
//             //size: 28,         // Tamaño de la fuente en píxeles
//             color: "#FFFFFF" // Color de la fuente, reemplaza "your-color" con el color deseado
//           }

//     },
//   }
// ];

// var layout_oee = {
//   //width: 600,
//   //height: 320,
//   height: 100,
//   margin: { t: 0, b: 0, l: 10, r: 0 },
//   paper_bgcolor: "#141824"
// };

// Plotly.newPlot('oee', data_oee, layout_oee, config_responsive);

//---------------------------------------OEE KPI - end-----------------------------------------------


//---------------------------------------OEE all - start-----------------------------------------------
// var data_oee_all = [{
//     x: [97, 77.1, 91.9],
//     y: ['Calidad ', 'Rendimiento ', 'Disponibilidad '],
//     width: [0.45,0.45,0.45],
//     name: 'Unidades Producidas',
//     orientation: 'h',
//     marker: {
//         color: ['#2E91E5', '#511CFB', '#1616A7'],
//         //colorbar : {ticklabelposition: "inside top"},
//         //opacity: 1.0,
//     },
//     type: 'bar',
//     text: ['97%', '77.1%', '91.9%'],
//     textposition: 'outside',
//     hoverinfo: 'none',
//     textfont: {
//         family: "Nunito Sans", // Establece la familia de la fuente
//         size: 15, // Establece el tamaño de la fuente
//         color: '#ffffff' // Establece el color de la fuente
//     }
// }];


// var layout_oee_all = {
//     barcornerradius: 5,
//     bargap: 0.1,
//     margin: {t: 0, "b": 0, l: 100, r: 0},
//     height: 120,
//     xaxis: {
//         range: [-1, 115],
//         showgrid: false,
//         showticklabels: false,
//         showline: false,
//         zeroline: false
//     },
//     yaxis: {
//         ticklabelposition: "outside",
//         //title: 'Horas',
//         showgrid: false, // Ocultar cuadrícula en el eje y
//         showticklabels: true,  // Ocultar marcas del eje y
//         tickfont: {
//             family: "Nunito Sans", // Establece la familia de la fuente
//             size: 14, // Establece el tamaño de la fuente
//             color: '#ffffff' // Establece el color de la fuente
//         }
//     },
//     showgrid: false,
//     paper_bgcolor: "#141824",
//     plot_bgcolor: "#141824",
//     };

// Plotly.newPlot('oee_all', data_oee_all, layout_oee_all, config_responsive);
//---------------------------------------OEE all - end-----------------------------------------------


//---------------------------------------Complience - start-----------------------------------------------
var gCumplimiento = new JustGage({
    id: "cumplimiento",
    value: 56.1,
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
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [80.5, 60.3, 70.4, 90.1, 90.5, 80.6, 75.7, 70.9, 65.9, 50.6],
  type: 'line',
  mode: 'lines+markers',
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
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [70.5, 40.3, 10.4, 50.1, 60.5, 70.6, 55.7, 50.9, 45.9, 30.6],
  type: 'line',
  mode: 'lines+markers',
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
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [90.5, 80.3, 50.4, 70.1, 80.5, 90.6, 35.7, 40.9, 55.9, 80.6],
  type: 'line',
  mode: 'lines+markers',
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
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [30.5, 20.3, 0.4, 40.1, 50.5, 40.6, 35.7, 30.9, 55.9, 70.6],
  type: 'line',
  mode: 'lines+markers',
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
        y: -0.2
    }
    //margin: { t: 25, r: 10, l: 60 },
    //legend: { orientation: 'h', x: 0.1, y: -0.15 }
};

Plotly.newPlot('trend_oee', data_trend_oee, layout_trend_oee, config_responsive);
//---------------------------------------OEE Trends - end-----------------------------------------------


//--------------------------------------Compliance - start-----------------------------------------------
// var data_cumplimiento_unidades = [
//   {
//     type: "indicator",
//     mode: "number+gauge+delta",
//     gauge: {
//       shape: "bullet",
//       axis: { range: [null, 6500], tickfont: { color: '#FFFFFF', family: "Nunito Sans" }, visible: false },
//       bgcolor: "#1C2231",
//       bar: { color: "#2E91E5", thickness: 1 },
//       bordercolor: "#1C2231",
//       threshold: {
//         line: { color: "#1616A7", width: 3, gradient: { yanchor: "vertical" } },
//         thickness: 0.9,
//         value: 4720
//       },
//     },
//     value: 3640,
//     domain: { x: [0, 1], y: [0, 1] },
//     delta: { reference: 4720, position: "top", increasing: { color: "#00FE35" }, decreasing: { color: "#FB0D0D" } },
//     number: {
//           font: {
//             family: "Nunito Sans",  // Cambia "Arial" por la fuente que desees
//             size: 25,         // Tamaño de la fuente en píxeles
//             color: "#FFFFFF" // Color de la fuente, reemplaza "your-color" con el color deseado
//           }

//     },
//     title: {
//       text: 'Rendimiento',
//       align: 'center',
//       font: {
//         family: "Nunito Sans",  // Cambia "Arial" por la fuente que desees
//         size: 15,         // Tamaño de la fuente en píxeles
//         color: "#FFFFFF" // Color de la fuente, reemplaza "your-color" con el color deseado
//       },
//     },
//   }
// ];

// var layout_cumplimiento_unidades = {
//   //width: 600,
//   //height: 320,
//   height: 40,
//   margin: { t: 10, b: 10, l: 100, r: 5 },
//   paper_bgcolor: "#141824"
// };

// Plotly.newPlot('cumplimiento_unidades', data_cumplimiento_unidades, layout_cumplimiento_unidades, config_responsive);
//--------------------------------------Compliance - end-----------------------------------------------


//--------------------------------------Availability pie - start-----------------------------------------------
var data_disponibilidad = [{
  type: "pie",
  values: [35, 351, 49],
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
    y: [3752],
    width: [0.15],
    name: 'Unidades Producidas',
    marker: {
        color: ['#2E91E5'], 
        line: {width: 0.5, color: "#000000"}
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: ['3752'],
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
    y: [3640],
    width: [0.15],
    name: 'Unidades Aceptadas',
    marker: {
        color: ['#00A08B'],
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: ['3640'],
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
    y: [112],
    width: [0.15],
    name: 'Unidades Rechazadas',
    marker: {
        color: ['#1C2231'],
        //colorbar : {ticklabelposition: "inside top"},
        //opacity: 1.0,
    },
    type: 'bar',
    text: ['112'],
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
    value: 97,
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
    value: 77.1,
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
    value: 91.9,
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
    value: 68.7,
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

//--------------------------------------test- start-----------------------------------------------
// var data = [{

//   type: "sunburst",

//   labels: ["Operativo", "No Operativo", "Inactivo", "Disponible"],

//   parents: ["Disponible", "Disponible", "", ""],

//   values:  [351, 49, 35, 400],

//   outsidetextfont: {size: 20, color: "#377eb8"},

//   leaf: {opacity: 0.4},

//   marker: {line: {width: 2}},

// }];

// var layout = {

//   margin: {l: 0, r: 0, b: 0, t: 0},
//   height: 500,
//   paper_bgcolor: "#141824",

// };
  
  
  
// Plotly.newPlot('disponibilidad_test', data, layout, config_responsive)

//--------------------------------------test- end-----------------------------------------------

//--------------------------------------rendimeinto start-----------------------------------------------

var data_performance = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 3640,
    domain: { x: [0.25, 1.0], y: [0.5, 0.7] },
    title: {
      text: "Aceptadas",
      font: chart_font,
    },
    delta: {
      reference: 4720, 
      position: "buttom",
      font: chart_font
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 6500],
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

        line: { color: "#00A08B", width: 3 },

        thickness: 1.0,

        value: 4720

      },
    },
    number: {
      //suffix: " aceptadas",
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
  annotations: [
    {
      font: {
        size: 15,
        family: "Nunito Sans",
        color: "#ffffff"
      },
      showarrow: false,
      xref: 'paper',
      yref: 'paper',
      x: 4720/6500,
      y: 0.42,
      text: 'Estándar 4720',
      xanchor: 'auto',
      yanchor: 'middle',
      //x: 0.26,
      //y: 5
    }],
};

Plotly.newPlot('performance', data_performance, layout_performance, config_responsive);
//--------------------------------------rendimeinto end-----------------------------------------------

//--------------------------------------consumo eléctrico start-----------------------------------------------
var trend_energia_consumida = {
  x: [1, 2, 3, 4],
  y: [0.0, 5.87, 22, 22.5],
  type: 'line',
  mode: 'lines',
  name: 'Consumo',
  line: { color: "#00B5F7", width: 3 }
};

var trend_energia_estandar = {
  x: [1, 2, 3, 4],
  y: [0.0, 4.87, 14.3, 20.9],
  type: 'line',
  mode: 'lines',
  name: 'Estándar',
  line: { color: "#F6F926", width: 3 }
};

var trend_energia_referencia = {
  x: [1, 2, 3, 4],
  y: [20.9, 20.9, 20.9, 20.9],
  type: 'line',
  mode: 'lines',
  name: 'Referencia',
  line: { color: "#FF9616", width: 3 }
};



var data_trend_energia = [trend_energia_consumida, trend_energia_estandar, trend_energia_referencia];

var layout_trend_energia = {
  //title: 'Consumida vs Estándar vs Referencia',
  xaxis: {
      title: {
          //text: 'Tiempo',
      },
      tickfont: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          size: 15, // Establece el tamaño de la fuente
          color: '#f3f5f4' // Establece el color de la fuente
      },
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  yaxis: {
      title: {
          text:'Energía [kWh]',
          font: {
              family: "'Open Sans', sans-serif", // Establece la familia de la fuente
              size: 15, // Establece el tamaño de la fuente
              color: '#f3f5f4' // Establece el color de la fuente
          },
      },
      //range: [0.0, 25.0],
      tickfont: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          size: 15, // Establece el tamaño de la fuente
          color: '#f3f5f4' // Establece el color de la fuente
      },
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  //showgrid: false,  // Desactivar cuadrícul
  height: 280,
  //width: "150%",
  margin: { t: 25, r: 20, l: 40, b: 40 },
  paper_bgcolor: "#252831",
  plot_bgcolor: "#252831",
  //margin: { t: 25, r: 10, l: 60 },
  legend: {
      orientation: 'h',
      x: 0.1,
      y: -0.15,
      font: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          size: 15, // Establece el tamaño de la fuente
          color: '#f3f5f4' // Establece el color de la fuente
      },
  }
};


Plotly.newPlot('trend_energia', data_trend_energia, layout_trend_energia, config_responsive);


//--------------------------------------consumo eléctrico end-----------------------------------------------