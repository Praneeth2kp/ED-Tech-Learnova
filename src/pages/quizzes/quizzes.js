import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./quizzes.css";
import brainprogress from '../../components/asserts/brain-progress.svg'

function Quizzes() {
    return (
        <div>
            <div className="inprogress">
                <p>In Progress</p>
            </div>
            <div className="row">
                <div className="ybox">
                    <div className="row">
                        <div className="col-9">
                            <h5 className="hfive">Lorem Ipsum</h5>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                        <div className="col-3">
                            <div className="cpro" data-progress="50">
                            <img src={brainprogress} alt="Image" />
                            <div className="proimg">

                            </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="ybox1">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="hfive" >Lorem Ipsum</h5>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                        <div className="col-2">

                        </div>

                    </div>
                    

                </div>
            </div>
            <div className="row">
                <div className="pbox">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="hfive">Lorem Ipsum</h5>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </div>
                <div className="pbox1">
                    <div className="row">
                        <div className="col-10">
                            <h5 className="hfive">Lorem Ipsum</h5>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                        <div className="col-2">
                            
                        </div>

                    </div>
                    

                </div>
            </div>

        </div>
    )
}
export default Quizzes;
