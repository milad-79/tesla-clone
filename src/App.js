import React from 'react';
import ChargerCom from './components/charger';
import Header from './components/header';
import ModelSCom from './components/model s';
import ModelXCom from './components/model x';
import Model3Com from './components/model3';
import ModelYCom from './components/modely';
import Sidebar from './components/sidebar';
import SolarPanelCom from './components/solarpanel';
import SolarRoofCom from './components/solarrof';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Model3Com/>
      <ModelYCom/>
      <ModelSCom/>
      <ModelXCom/>
      <SolarPanelCom/>
      <SolarRoofCom/>
      <ChargerCom/>
    </div>
  );
}

export default React.memo(App);
