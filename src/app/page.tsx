import React from 'react';
import CarMap from './Components/CarMap';
import ChildComponent from './Components/ChildComponent';
import ParentComponent from "./Components/PrentComponent"
import MapArray from './Components/MapArray';


const page = () => {
  return (
    <div>
      <ParentComponent />
      <ChildComponent />
      <MapArray />
      <CarMap />
    </div>
  );
}

export default page;
