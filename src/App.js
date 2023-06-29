import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Space from './pages/space/space';
import Flashcard from './pages/flashcard/flashcard';
import Quizzes from './pages/quizzes/quizzes';
import Flashcard2 from '../src/pages/flashcard/flashcard2';
function App() {
  return (
    <Router>
      
      <div className="row">
        <div className="column-1">
        <Navbar />
          
        </div>
        <div className="column-2">
          <Routes>
            <Route path='/space' element={<Space />} />
            <Route path='/flashcard' element={<Flashcard />} />
            <Route path='/quizzes' element={<Quizzes />} />
            <Route path='/flashcard2' element={<Flashcard2 />}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
