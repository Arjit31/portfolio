import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-75.0, -52.0, 0],
        center: [7, -30],
        scale: 2000
      }}
      style={{width:"100%", height:"100%", border:"solid #FFFFFF 3px", borderRadius:"5px"}}
    >
      <Geographies
        geography="/features.json"
        fill="#09616c"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
        
      </Geographies>
      <Annotation
        subject={[81.6296, 21.2514]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF" 
        style={{fontSize:"25px"}}>
          {"Raipur"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
