import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import "./quizzes.css";

function Quizzes (){
    return(
         <div>
            <div class="inprogress">
               <p>In Progress</p>
            </div>
            <div>
                <div class="row">
                    <div class="coll1">
                        <div class="b-1">
                            <p>Box-1</p>
                        </div>
                    </div>
                    <div class="coll2">
                    <div class="b-2">
                            <p>Box-2</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Quizzes;
