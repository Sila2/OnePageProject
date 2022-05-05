import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormBind from './FormBind';
//import EventBind from './EventBind';
//import MemoryData from './MemoryData';
// import HeaderFunction from './HeaderFunction';
// import MainBodyClass from './MainBodyClass';
// import FooterFunction from './FooterFunction';
//import EventStringifyParse from './EventStringifyParse';

// let objectData={
//   main:"Main bilgisi",
// computerName:"com52Xy",
// computerTrade:"Marka",
// computerPrice:"12",
// mainData:"Javascript",
// classData:"ES6"
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
    {/* //burda data gönderip data alabilirim. */}
    {/* //data göndermek istediğimde props yapısını kullanırım */}

    <FormBind/>
    {/*<MemoryData dataBind="dataBindValue" dataChange="dataChangeValue" dataInMemory="dataInMemoryValue"/>
    <EventBind language="js java html5"/>
    <EventStringifyParse header={objectData.mainData} classData={objectData.classData}/>
     <HeaderFunction head="header_name"/>
    <MainBodyClass main={objectData.main} computerName={objectData.computerName} computerTrade={objectData.computerTrade} computerPrice={objectData.computerPrice}/>
    <FooterFunction foot="footer bilgisi"/> */}
    </React.StrictMode>
);

reportWebVitals();


