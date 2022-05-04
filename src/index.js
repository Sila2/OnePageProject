import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderFunction from './HeaderFunction';
import MainBodyClass from './MainBodyClass';
import FooterFunction from './FooterFunction';

let objectData={
  main:"Main bilgisi",
computerName:"com52Xy",
computerTrade:"Marka",
computerPrice:"12"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
    <HeaderFunction head="header_name"/>
    <MainBodyClass main={objectData.main} computerName={objectData.computerName} computerTrade={objectData.computerTrade} computerPrice={objectData.computerPrice}/>
    <FooterFunction foot="footer bilgisi"/>
    </React.StrictMode>
);

reportWebVitals();


