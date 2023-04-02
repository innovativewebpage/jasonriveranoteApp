import React, { useContext } from 'react';
import NotesContext from '../context';

export default function Note({ note11 }) {
  const { dispatch } = useContext(NotesContext);

//console.log('Notepage_dispatch',dispatch);

//console.log('Notepage_props_note11',note11);

  return (
	
  
    <div className='note'>
      <p>{note11.text}</p>
	  
	  
	

 <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note11 })}
          className='edit'
        >
          Edit
        </button>
		
        <button
          onClick={() => dispatch({ type: 'DELETE_NOTE',
		  payload: note11.id })}
          className='delete'
        >
          Delete
        </button>
      </div>
	 	
      
	  
    </div>
  );
}
