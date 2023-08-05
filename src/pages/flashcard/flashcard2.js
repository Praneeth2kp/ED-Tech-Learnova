import React, { useState } from 'react';
import './flashcard2.css';
import 'bootstrap/dist/css/bootstrap.css';
import speaker from '../../components/asserts/speaker.svg';
import settings from '../../components/asserts/Settings1.svg';
import embedded from '../../components/asserts/Embedd.svg';
import share from '../../components/asserts/Share.svg';
import Quiz from '../../components/asserts/quiz.svg';
import ai from '../../components/asserts/AI1.svg';



function Flashcard2() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isFlipped) {
      setIsFlipped(false);
    } else {
      setIsFlipped(true);
    }
  };
  

  return (
    <>
    <div className='row'>
      <div className='col-6 f-2' >
        <h4>Lorem Ipsum/ Lorem Ipsum 2</h4>
        <p>Level 1-10</p>
        </div>
        <div className='col-1 s1'>
        <img src={share}></img>
        </div>
        <div className='col-1 s1'>
        <img src={settings}></img>
        </div>
        <div className='col-1 s1'>
        <img  src={embedded}></img>
        </div>
      </div>
          <div className='row'>
              <div className='col'>
                  <div className='box-100'>

                      <div className={` box4 ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                          <img className='text2' src={speaker}></img>
                          <div className='front'>
                              <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                          </div>
                          <div className='back'>
                              <p className='text1'>HELLO WORLD</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='col'>
                      <div className='q1'>
                          <img src={Quiz}></img> <br></br> <br></br> <br></br>
                          <img src={ai}></img>
                      </div>
              </div>
              
          </div> 
     
    

      
       

    </>
  );
}

export default Flashcard2;
