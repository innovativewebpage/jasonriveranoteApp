
import React, { useContext, useReducer } from 'react';

import Nav from './components/Nav';

import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';

import NotesContext from './context';

import notesReducer from './reducer';

function App() {
	
  const initialState = useContext(NotesContext);
  
  console.log('App_page_initialState',initialState);
  
  const [state, dispatch] = useReducer(notesReducer, initialState);
  
  console.log('App_page_state',state);
  
  console.log('App_page_dispatch=',dispatch);
  
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
  
}

export default App;
