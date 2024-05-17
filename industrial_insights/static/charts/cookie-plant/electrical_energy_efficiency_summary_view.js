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
  mode: 'lines', //+markers
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
  mode: 'lines', //+markers
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
  mode: 'lines', //+markers
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
  height: 200,
  //width: "150%",
  margin: { t: 0, r: 0, l: 50, b: 0 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
  //margin: { t: 25, r: 10, l: 60 },
  legend: {
      orientation: 'h',
      //x: 0.1,
      y: -0.4,
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
    mode: 'lines', //+markers
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
      tickfont: chart_font,
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  yaxis: {
      title: {
          text: '%',
          font: chart_font,
      },
      tickfont: chart_font,
      gridcolor: '#1e2130',
      gridwidth: 2,
  },
  //showgrid: false,  // Desactivar cuadrícul
  height: 200,
  //width: "150%",
  margin: { t: 0, r: 0, l: 50, b: 50 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
  //margin: { t: 25, r: 10, l: 60 },
  //legend: { orientation: 'h', x: 0.1, y: -0.15 }
};



Plotly.newPlot('trend_eficiencia', data_trend_eficiencia, layout_trend_eficiencia, config_responsive);

//---------------------------------------Trend Eficiencia energética - end-----------------------------------------------

//--------------------------------------Consumo energía vs estándar - start-----------------------------------------------

var data_energy_consumption = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 11.55,
    domain: { x: [0.25, 1.0], y: [0.5, 0.7] },
    title: {
      text: "Consumida",
      font: chart_font,
    },
    delta: {
      reference: 9.4, 
      position: "buttom",
      font: chart_font,
      suffix: ' kWh',
      increasing: { color: "#FB0D0D" },
      decreasing: { color: "#1CA71C" }
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 20.9],
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

        value: 9.4

      },
    },
    number: {
      suffix: " kWh",
      font: chart_font
    },
  },
];

var layout_energy_consumption = {
  //width: 600,
  height: 200,
  margin: { t: 0, r: 15, l: 25, b: 0 },
  paper_bgcolor: "#141824",
  plot_bgcolor: "#141824",
  annotations: [
    {
      font: chart_font,
      showarrow: false,
      xref: 'paper',
      yref: 'paper',
      x: 9.4/20.9,
      y: 0.42,
      text: 'Estándar 9.4 kWh',
      xanchor: 'auto',
      yanchor: 'middle',
      //x: 0.26,
      //y: 5
    }],
};

Plotly.newPlot('energy_consumption', data_energy_consumption, layout_energy_consumption, config_responsive);

//--------------------------------------Consumo energía vs estándar - end-----------------------------------------------

//--------------------------------------Consumo energía index vs estándar - start-----------------------------------------------

/* var data_consumption_index = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 0.003,
    domain: { x: [0.25, 1], y: [0.5, 0.7] },
    title: {
      text: "Consumida",
      font: chart_font,
    },
    delta: {
      reference: 0.002, 
      position: "buttom",
      font: chart_font,
      //suffix: ' kWh/und',
      increasing: { color: "#FB0D0D" },
      decreasing: { color: "#1CA71C" }
    },
    gauge: {
      shape: "bullet",
      axis: {
        range: [0, 0.003],
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

        value: 0.002

      },
    },
    number: {
      suffix: " kWh/und",
      font: chart_font
    },
  },
];

var layout_consumption_index = {
  //width: 600,
  height: 200,
  margin: { t: 0, r: 0, l: 25, b: 0 },
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
      x: 0.002/0.003,
      y: 0.42,
      text: 'Estándar 0.002 kWh/und',
      xanchor: 'auto',
      yanchor: 'middle',
      //x: 0.26,
      //y: 5
    }],
};

Plotly.newPlot('consumption_index', data_consumption_index, layout_consumption_index, config_responsive);
 */
//--------------------------------------Consumo energía index vs estándar - end-----------------------------------------------



function updateData() {
  // Realizar una petición AJAX para obtener los datos más recientes
  fetch('https://industrial-insights-jamesgarcia.pythonanywhere.com/goem/api/ElectricalEnergyEfficiencyData/')  // Reemplaza con la URL correcta de tu vista
      .then(response => response.json())
      .then(data => {
          // Actualizar solo los datos de las trazas

          var last_total_energy_consumed_field = document.getElementById('last_total_energy_consumed_field');
          last_total_energy_consumed_field.textContent = data.last_total_energy_consumed.toFixed(1) + ' kWh';

          var last_reference_total_energy_field = document.getElementById('last_reference_total_energy_field');
          last_reference_total_energy_field.textContent = data.last_reference_total_energy.toFixed(1) + ' kWh';

          var last_standard_total_energy_field = document.getElementById('last_standard_total_energy_field');
          last_standard_total_energy_field.textContent = data.last_standard_total_energy.toFixed(1) + ' kWh';

          var last_electrical_overconsumption_field = document.getElementById('last_electrical_overconsumption_field');
          last_electrical_overconsumption_field.textContent = data.last_electrical_overconsumption.toFixed(1) + ' kWh';

          var last_kwh_price_field = document.getElementById('last_kwh_price_field');
          last_kwh_price_field.textContent = data.last_kwh_price.toFixed(0) + ' COP';

          var last_electrical_energy_cost_field = document.getElementById('last_electrical_energy_cost_field');
          last_electrical_energy_cost_field.textContent = data.last_electrical_energy_cost.toFixed(0) + ' COP';

          var last_electrical_energy_cost_overrun_field = document.getElementById('last_electrical_energy_cost_overrun_field');
          last_electrical_energy_cost_overrun_field.textContent = data.last_electrical_energy_cost_overrun.toFixed(0) + ' COP';

          var last_total_electricity_consumption_index_field = document.getElementById('last_total_electricity_consumption_index_field');
          last_total_electricity_consumption_index_field.textContent = data.last_total_electricity_consumption_index.toFixed(3) + ' kWh/und';

          gEficiencia.refresh(data['last_total_electrical_energy_efficiency']);

          Plotly.update('trend_eficiencia', {
            x: [data.last_shift_timestamps],
            y: [data.last_shift_total_electrical_energy_efficiency]
          });


          Plotly.update('energy_consumption', {
            value: [data.last_total_energy_consumed],
            'delta.reference': [data.last_standard_total_energy],
            'gauge.axis.range': [[0, data.last_reference_total_energy]],
            'gauge.threshold.value': [data.last_standard_total_energy]

          });

          layout_energy_consumption.annotations[0].text = `Estándar ${data.last_standard_total_energy.toFixed(1)} kWh`;
          layout_energy_consumption.annotations[0].x = data.last_standard_total_energy / data.last_reference_total_energy;
          
          Plotly.relayout('energy_consumption', layout_energy_consumption);

          Plotly.update('trend_energia', {
            x: [data.last_shift_timestamps],
            y: [data.last_shift_total_energy_consumed, data.last_shift_standard_total_energy, data.last_shift_reference_total_energy]
          });

          var date_field = document.getElementById('date_field');
          date_field.textContent = data.formatted_last_shift_start_timestamp + ' - ' + data.formatted_last_shift_end_timestamp;


      });
}

// Actualizar solo los datos cada segundo
setInterval(updateData, 1000);