import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = ({ series, title }) => {
  const options = {
    chart: {
      type: "pie",
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;

          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer
              .label(
                `
                <span style="color:#26CF13; font-size:clamp(34px, 5vw, 48px); font-weight:700">${series?.data[0]?.y}</span> /
                <span style="color:#000000; font-size:clamp(10px, 2vw, 16px); font-weight:700">${series?.data[1]?.y}筆</span>
              </span>`
              )
              .css({
                color: "#000",
                textAnchor: "middle",
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft,
            y =
              series.center[1] + chart.plotTop - customLabel.attr("height") / 9;

          customLabel.attr({
            x,
            y,
          });
          //   // Set font size based on chart diameter
          //   customLabel.css({
          //     fontSize: `${series.center[2] / 12}px`,
          //   });
        },
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    title: {
      text: "",
    },

    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b>",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format:
              "{point.name}<br><span style=`color:#26CF13; font-size:１５px; font-weight:700`>{point.y}</span>",
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
    },
    series,
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;
