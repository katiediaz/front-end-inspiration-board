import './App.css';
import Card from './components/Card';
import Board from './components/Board';
import  { useEffect, useState } from 'react';
import react from 'react';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [selectBoard, setSelectBoard] = useState({title: '', owner: '', board_id: null})

  // const selectBoard = () => {
    
  // }
  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <h2>Boards</h2>
        <ol>
          {/* <li>Board elements</li> */}
        </ol>
      </section>
      <section>
        <h2>Selected Board</h2>
        <p></p>
      </section>
     <NewBoardForm onFormSubmit={onFormSubmit}/>
      <Board />
    </div>
  );
}

export default App;
