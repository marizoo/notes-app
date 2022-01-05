import React, {useState} from 'react'


const AddNote = ({handleAddNote}) => {
    //2-way binding for the input of textarea
    const [noteText, setNoteText] = useState('')

    const characterLimit = 200;

    const handleChange = (ev) => {
        if(characterLimit - ev.target.value.length >= 0) {
            setNoteText(ev.target.value)
        }
    } 

    // save this value of noteText when the Save button is clicked
    const handleSaveClick = () => {
        
        if(noteText.trim().length > 0) { 
        handleAddNote(noteText);
        setNoteText('');
        } 
    }

    return (
        <div className='note new'>
            <textarea 
                cols="10" 
                rows="8"
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote

