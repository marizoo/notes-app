import React,{ useState, useEffect} from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

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

// to search text
const [searchText, setSearchText] = useState('');

//for dark mode
const [darkMode, setDarkMode] = useState(false);

//to add new data to the local storage
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes) {
    setNotes(savedNotes);
  }
},[])

// to save data to local storage
useEffect( () => {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
}, [notes])

// adding notes
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

// to delete notes
const deleteNote = (id) => {
  const newNotes = notes.filter(note => note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        onDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
