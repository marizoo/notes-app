import React,{ useState} from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';

// till min 33:20

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "My first Note baby!",
    date: "05/02/2022",
    },
    {
    id: nanoid(),
    text: "My first SECOND baby!",
    date: "07/02/2022",
    },
    {
    id: nanoid(),
    text: "My first THIRD baby!",
    date: "10/02/2022",
    },
    {
    id: nanoid(),
    text: "My first FOURTH baby!",
    date: "02/03/2022",
    },
    {
    id: nanoid(),
    text: "My first FIFTH baby!",
    date: "05/03/2022",
    },
]);
  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App
