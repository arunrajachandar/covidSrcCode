import React from 'react';
import { Chart } from "react-google-charts";

 function Map ({chartData}){
    return (
        <Chart
         height={'300px'}
         padding={'40px'}
        chartType="GeoChart"
        data={chartData}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyDj3reNpBglRu9Tuqri7MpJ4zSKkB_spSU"
        rootProps={{ 'data-testid': '1' }}
        options={{
          colorAxis: { colors: ['#f2908d','#e31b23'] },
          datalessRegionColor: '#fff',
          defaultColor: '#f5f5f5',
        } 
      }
      />
    );
}
export default Map;