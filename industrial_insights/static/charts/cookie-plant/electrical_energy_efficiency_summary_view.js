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


//--------------------------------------consumo eléctrico start-----------------------------------------------
var trend_energia_consumida = {
  x: [1, 2, 3, 4],
  y: [0.0, 5.87, 22, 22.5],
  type: 'line',
  mode: 'lines+markers',
  name: 'Energía Consumidad',
  line: { width: 2, color: '#2E91E5' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#2E91E5',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};

var trend_energia_estandar = {
  x: [1, 2, 3, 4],
  y: [0.0, 4.87, 14.3, 20.9],
  type: 'line',
  mode: 'lines+markers',
  name: 'Energía Estándar',
  line: { width: 2, color: '#00A08B' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#00A08B',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};

var trend_energia_referencia = {
  x: [1, 2, 3, 4],
  y: [20.9, 20.9, 20.9, 20.9],
  type: 'line',
  mode: 'lines+markers',
  name: 'Energía de Referencia',
  line: { width: 2, color: '#FC0080' },
  marker: {
        symbol: 'circle',  // Símbolo de marcador: círculo
        size: 5,          // Tamaño de los marcadores en píxeles
        color: '#FC0080',     // Color de los marcadores
        opacity: 1.0       // Opacidad de los marcadores
  }
};



var data_trend_energia = [trend_energia_consumida, trend_energia_estandar, trend_energia_referencia];

var layout_trend_energia = {
  //title: 'Consumida vs Estándar vs Referencia',
  xaxis: {
      title: {
          //text: 'Tiempo',
      },
      tickfont: chart_font,
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  yaxis: {
      title: {
          text:'kWh',
          font: {
              family: "'Open Sans', sans-serif", // Establece la familia de la fuente
              size: 15, // Establece el tamaño de la fuente
              color: '#f3f5f4' // Establece el color de la fuente
          },
      },
      //range: [0.0, 25.0],
      tickfont: chart_font,
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  //showgrid: false,  // Desactivar cuadrícul
  height: 285,
  //width: "150%",
  margin: { t: 0, r: 0, l: 50, b: 0 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
  //margin: { t: 25, r: 10, l: 60 },
  legend: {
      orientation: 'h',
      //x: 0.1,
      y: -0.2,
      font: {
        family: "Nunito Sans", // Establece la familia de la fuente
        //size: 15, // Establece el tamaño de la fuente
        color: '#ffffff' // Establece el color de la fuente
    },
  }
};


Plotly.newPlot('trend_energia', data_trend_energia, layout_trend_energia, config_responsive);


//--------------------------------------consumo eléctrico end-----------------------------------------------

//---------------------------------------Eficiencia energética - start-----------------------------------------------
var gEficiencia = new JustGage({
  id: "eficiencia",
  value: 89.5,
  //width: 200,
  //height: 200,
  min: 0,
  max: 100,  // Ajusta el rango máximo según tus necesidades
  //label: "Disponibilidad",
  labelFontSize: 30,
  valueFontColor: "#f3f5f4", // Cambia el color del valor
  valueFontFamily: "Nunito Sans", // Cambia la fuente del valor
  valueMinFontSize: 30, // Cambia el tamaño del valor
  levelColors: ['#00A08B'], // Cambia los colores del tacómetro
  gaugeColor: "#1C2231", // Cambia el color del fondo del tacómetro
  decimals: 1,
  gaugeWidthScale:0.3,
  labelFontColor: "#ffffff",
  symbol: '%',
  labelMinFontSize: 18,
  pointer: true,
  relativeGaugeSize: true,
  donut: false,
  minLabelMinFontSize: 15,
  maxLabelMinFontSize: 15,
  //displayRemaining: true

});
//---------------------------------------Eficiencia energética - end-----------------------------------------------


//---------------------------------------Trend Eficiencia energética - start-----------------------------------------------
var data_trend_eficiencia = [
  {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    y: [100.0, 98.5, 97.6, 97.0, 94, 94, 90, 90, 90, 89.5, 89.5],
    type: 'line',
    mode: 'lines+markers',
    name: 'Eficiencia',
    line: { color: "#00A08B", width: 2 },
    marker: {
      symbol: 'circle',  // Símbolo de marcador: círculo
      size: 5,          // Tamaño de los marcadores en píxeles
      color: '#00A08B',     // Color de los marcadores
      opacity: 1.0       // Opacidad de los marcadores
}
  }
];

var layout_trend_eficiencia = {
  //title: 'Consumida vs Estándar vs Referencia',
  xaxis: {
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
          text: '%',
          font: {
              family: "'Open Sans', sans-serif", // Establece la familia de la fuente
              size: 15, // Establece el tamaño de la fuente
              color: '#f3f5f4' // Establece el color de la fuente
          },
      },
      tickfont: {
          family: "'Open Sans', sans-serif", // Establece la familia de la fuente
          size: 15, // Establece el tamaño de la fuente
          color: '#f3f5f4' // Establece el color de la fuente
      },
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  //showgrid: false,  // Desactivar cuadrícul
  height: 260,
  //width: "150%",
  margin: { t: 0, r: 0, l: 50, b: 50 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
  //margin: { t: 25, r: 10, l: 60 },
  //legend: { orientation: 'h', x: 0.1, y: -0.15 }
};



Plotly.newPlot('trend_eficiencia', data_trend_eficiencia, layout_trend_eficiencia, config_responsive);

//---------------------------------------Trend Eficiencia energética - end-----------------------------------------------