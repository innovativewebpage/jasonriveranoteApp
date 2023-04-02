import uuid from 'uuid';

export default function reducer(state, action) {
	console.log('reducer_page_state=',state);
	console.log('reducer_page_action=',action);
	
  switch (action.type) {
    case 'ADD_NOTE':
	
      const newNote = {
        id: uuid.v4(),
        text: action.payload
      };

      const addedNotes = [...state.notes, newNote];
			
	console.log('added_Notes',addedNotes);


		return{...state,
			
		//currentNote: null,	
		notes: addedNotes	
			
		}

      /*return {
        ...state,
        notes: addedNotes
      };*/
	  
	  
    case 'DELETE_NOTE':
      const deletedNotes = state.notes.filter(
        note => note.id !== action.payload
      );

      return {
        ...state,
        notes: deletedNotes
      };
	  
	  
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      };
	  
	  
    case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currentNote,
        text: action.payload
      };
	  
	  
	 
	 //console.log('action.payload',action.payload);
	  
	  
	  
	  //console.log('updatedNote',updatedNote);
	  

      const updatedNotesIndex = state.notes.findIndex(
        note => note.id === state.currentNote.id
      );
	  
	 // console.log('state.currentNote.id',state.currentNote.id);
	  
	//  console.log('updatedNotesIndex',updatedNotesIndex);
	  

      const updatedNotes = [
        ...state.notes.slice(0, updatedNotesIndex),
        updatedNote,
        ...state.notes.slice(updatedNotesIndex + 1)
      ];
	  
	 // console.log('updatedNotes',updatedNotes)

      return {
        currentNote: null,
        notes: updatedNotes
      };
	  
    default:
      return state;
  }
}
