import React from 'react';
import { Link } from 'react-router-dom';
// import rectangle1 from 'C:/Users/Balaji/Desktop/reactapp/reactapp/src/components/asserts/Rectangle1.png'/
import rectangle1 from '../../components/asserts/Rectangle1.png';
import rectangle2 from '../../components/asserts/Rectangle2.png';
import rectangle3 from '../../components/asserts/Rectangle3.png';


import './flashcard.css'
import 'bootstrap/dist/css/bootstrap.css';

function Flashcard() {
    return (
        <>
            <div className="f1">
                Recent cards
            </div>
            <div className='row'>
                <div className='container-1'>
                    <div className='col c1'>
                        <div className='img-container'>
                            <Link to='/flashcard2'>
                                <a> <img src={rectangle1} /></a></Link>
                        </div>
                        <p className='p1'>Lorem Ipsum</p>
                        <p className='f2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </div>
                    <div className='col'>
                        <div className='img-container2'>
                            <Link to='/flashcard2'><img src={rectangle2} /></Link>
                        </div>
                        <p className='p1'>Lorem Ipsum </p>
                        <p className='f2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col'>
                        <div className='img-container3'>
                            <a > <img src={rectangle3} /></a>
                        </div>
                        <p className='p1'>Lorem Ipsum</p>
                        <p className='f2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
            <div className='f3'>
                Based On Your Interest
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='box'>

                    </div>
                </div>
                <div className='col'>
                    <div className='box2'>

                    </div>
                </div>
                <div className='col'>
                    <div className='box3'>

                    </div>
                </div>
            </div>





        </>

    )
}

export default Flashcard;



