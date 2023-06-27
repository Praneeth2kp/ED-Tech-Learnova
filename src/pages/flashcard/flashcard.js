import React from 'react';
// import rectangle1 from 'C:/Users/Balaji/Desktop/reactapp/reactapp/src/components/asserts/Rectangle1.png'/
import rectangle1 from '../../components/asserts/Rectangle1.png' ;
import rectangle2 from '../../components/asserts/Rectangle2.png' ;

import './flashcard.css'
import 'bootstrap/dist/css/bootstrap.css';

 function  Flashcard() {
  return (
    <>
    <div className="f1">
      Recent cards
    </div>
    <div class="container">
        <div class="img0"></div>
        <div class="img1"></div>
        <div class="img2"></div>
    </div>
    </>
    
  )
}

export default  Flashcard;



