import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({notes}) => {
    return (
        <div className='notes-list'>
            {notes.map(note => (
                <Note note={note} key={note.id}/>
            ))}
           <AddNote />
        </div>
    )
}

export default NotesList
