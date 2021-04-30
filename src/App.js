import React from 'react'
import './App.css';
// Components
import ViewAllProperty from './Component/ViewAllProperty/ViewAllProperty';
import Home from './Component/GetRigthFullHomePage/Home';
import Buy from './Component/GetRightBuy/Buy'
import Rent from './Component/GetRightRent/Rent'
import Plot from './Component/GetRigthPlot/Plot'

// Property Sale Components
import PropertySalePage from './PropertySalePage/propertySale';

function App() {
  return (
    <div className="App">
      {/* This is Property Page are There  Is You Want To See The View All Property Please Uncomment The <ViewAllProperty/> component and Do Comment <Home/> Component */}
      {/* <ViewAllProperty/>*/}
      {/* Here the Main home Page*/}
      {/* <Home/> */}
      {/* Here the Buy Property Page*/}
      {/* <Buy/> */}
      {/* Here the Rent Property Page */}
      {/* <Rent/>*/}
      {/* Here the Plot Property Page */}
      <Plot/>
      {/* Here We Start To Design The Property Sale Page*/}
      {/* <PropertySalePage/>*/}
    </div>
  );
}

export default App;
