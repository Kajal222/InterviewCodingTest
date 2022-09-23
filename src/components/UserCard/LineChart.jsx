import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const LineChart = ({graphData}) => {
  
const dataSource = {
    chart: {
       
        rotatelabels: "1",
        setadaptiveymin: "1",
        theme: "fusion",
        "bgAlpha": 0,
        "maxColWidth": "25",
        "showXAxisLine": false,
        "showYAxisLine": false,
        "showPlotBorder": false,
        "showBorder": false,
        "showVLineLabelBorder": false,
        "showHLineLabelBorder": false,
        showLegend: false,
        yAxisNameFontColor: 'rgb(255, 255, 255)',
        yAxisNameFontColor: 'rgb(255, 255, 255)',
        "baseFontSize":0,
         "numDivLines": 0,
         "canvasBorderAlpha": 0,

        "numVisiblePlot": "0",
        "staggerLines": 0,
        drawcrossline: false,
        "showValues": "0",
        drawAnchors: false,
        "usePlotGradientColor": "0",
        "yAxisLineThickness": 0,

     },
    data: graphData
};
  return (
        <ReactFusioncharts
            type="line"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );

}
export default LineChart