import { useState, useEffect } from 'react';
import './App.scss';
import CreatorNotes from './Components/CreatorNotes';
import AllNotes from './Components/AllNotes';


function App() {

  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    updateNotesList()
  }, []);

  const addNote = (value) => {  
    if(value === '') return
  
    const copyNotes = [ ...Notes ];
    const note = value.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
    copyNotes.push(note);
  
    setNotes(copyNotes);
  
    localStorage.setItem('notes', JSON.stringify(copyNotes));
  }

  const updateNotesList = () => {
    const newData = JSON.parse(localStorage.getItem('notes'));
    setNotes(newData)
  }

  return (
    
    <div className="App container">
      <CreatorNotes className="creator" add={ addNote }/>
      <AllNotes className="allNotes" data={ Notes } update={ updateNotesList }/>
    </div>
  );
}

export default App;
