import React,{ useState} from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';

//  till minute 50:48, to delete a note.


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

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  )
}

export default App
