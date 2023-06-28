import React from "react";
import { Link } from "react-router-dom";
import './space.css'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from '../../components/asserts/arrow.svg'
import arrow1 from '../../components/asserts/arrow1.svg'
import settings from '../../components/asserts/settings.svg'
import profile from '../../components/asserts/profile.png'


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
                           <btn><img className="arrow" alt="Arrow"src={arrow}/></btn>
                                     
                       </div>

                  </div>
                  <div className="box-2">
                     
                           <div className="row activitybox-1">
                               <p className="history">▶   History</p>
                              
                               <Link className="lorem-1" to="">Lorem Ipsum<img className="px-1" src={arrow1}  alt="" /></Link>
                              
                               <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley .</h6>
                           </div>
                      

                   </div>
                   <div className="box-3">
                           <div className="row activitybox-1">
                               <p className="history">▶  Computers</p>
                              
                               <Link className="lorem-1" to="">Lorem Ipsum<img className="px-1" src={arrow1}  alt="" /></Link>
                              
                               <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley .</h6>
                           </div>

                   </div>
                   <div className="box-4">
                           <div className="row activitybox-1">
                               <p className="history">▶   Mathematics</p>
                              
                               <Link className="lorem-1" to="">Lorem Ipsum<img className="px-1" src={arrow1}  alt="" /></Link>
                              
                               <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley .</h6>
                           </div>

                   </div>

              </div>
              
          </div>
          <div className="column-4">
             <div className="row pt-5">

                <div className='col'>
                    <div className='boxs-1'>
                      <btn><img className='btn-1 px-2 pt-2' src={settings}/></btn>
                    </div>

                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <btn><img className='btn-2' src={profile}/></btn>
                           
                        </div>
                        <div className='col profile'>
                          
                            <Link className="lorem-1" to=""><p className='pro-1'>login</p></Link>
                            <Link className="lorem-1" to=""><p className='pro-2'>student</p></Link>
                        </div>
                    </div>
                </div>
             </div>
             <div className='boxs-2'>
             <div className="row  ">
                       <div className="col activitybox-2">
                           <div className="row">
                               <p className="myactivity">Schedule</p>
                               <p className="month">This week</p>
                           </div>
                       </div>
                       <div className="col">
                           <btn><img className="arrow" alt="Arrow"src={arrow}/>  </btn>
                                   
                       </div>

                  </div>

             </div>
          </div>

       </div>
    </div>
  );
}

export default Space;
