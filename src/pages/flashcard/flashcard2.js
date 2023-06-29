import React, { useState } from 'react';
import './flashcard2.css';
import 'bootstrap/dist/css/bootstrap.css';
import speaker from '../../components/asserts/speaker.svg';

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
      <div className='f-2' >
        <h4>Lorem Ipsum/ Lorem Ipsum 2</h4>
        <p>Level 1-10</p>
      </div>
      <div className={`box4 ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <img className='text2' src={speaker}></img>
      <div className='front'>
        <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
      <div className='back'>
        <p className='text1'>HELLO WORLD</p>
      </div>
      </div>
    </>
  );
}

export default Flashcard2;
