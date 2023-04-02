import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context';

export default function NoteList() {
  const { state } = useContext(NotesContext);
  
  
  //console.log('NoteListpage_state',state);
  //console.log('state1',state1);

  return (
    <div className='notes-container'>
      {state.notes.map((note, i) => {
			//console.log('note',note);
			//console.log('i',i);
		  
        return <Note note11={note} key={i} />;
      })}
    </div>
  );
}
