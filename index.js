import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

ReactDOM.render(
  <div>
     <h1 >My Contacts</h1>
     <Cards name = 'Akash kamal' src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" college='roorkee institute of technology' number='123456789'/>,
     <Cards name='Manjay yadav' src='https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg' college='TMU' number='987654321'/>
     <Cards name='Sandeep kushwaha' src='https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg' college='IFTM' number='123498765'/>
     
     </div>,
   
 
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
