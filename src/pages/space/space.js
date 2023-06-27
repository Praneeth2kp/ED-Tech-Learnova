import React from "react";
// import { Link } from "react-router-dom";
import './space.css'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from '../../components/asserts/arrow.svg'


function Space() {
  return (
    <div>
       <div className="row">
          <div className="column-3">
              <div className="box-1">
                  <div className="row pt-4 px-4">
                       <div className="col activitybox">
                           <div className="row">
                               <p className="myactivity">My Activity</p>
                               <p className="month">This month</p>
                           </div>
                       </div>
                       <div className="col">
                           <img className="arrow" alt="Arrow"src={arrow}/>          
                       </div>

                  </div>
                  <div className="box-2">
                      <div className="activitybox-1">
                           <div className="row">
                               <p className="history">History</p>
                               <h1 className="lorem-1">Lorem Ipsum</h1>
                               {/* <p>Lorem Ipsum is simpl.</p> */}
                           </div>
                       </div>

                   </div>
                   <div className="box-3">

                   </div>
                   <div className="box-4">

                   </div>

              </div>
              
          </div>
          <div className="column-4">
             reddy
          </div>

       </div>
    </div>
  );
}

export default Space;
