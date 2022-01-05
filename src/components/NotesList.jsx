import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({notes, handleAddNote, onDeleteNote}) => {

    return (
        <div className='notes-list'>
            {notes.map(note => (
                <Note note={note} key={note.id} onDeleteNote={onDeleteNote}/>
            ))}
           <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList
