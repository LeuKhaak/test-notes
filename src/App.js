import { useState, useEffect } from 'react';
import './App.scss';
import Creators from './Components/Creators';
import AllNotes from './Components/AllNotes';


function App() {

  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // updateNotesList()

    setNotes(JSON.parse(localStorage.getItem('notes')) || []);
    setTags(JSON.parse(localStorage.getItem('tags')) || []);

  }, []);

  const addTag = (value) => {  
    if(value === '' || value[0] !== '#') return

    const copyTags = [ ...tags ];
    
    //const newTag = value

    copyTags.push(value)
    
    const uniqueTags = Array.from(new Set(copyTags.map(JSON.stringify))).map(JSON.parse);
    
    setTags(uniqueTags) 

    localStorage.setItem('tags', JSON.stringify(uniqueTags));
  }

  const addNote = (value) => {  
    if(value === '') return
  
    const copyNotes = [ ...notes ];
    const copyTags = [ ...tags ];

    const preNote = value.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
    const note = preNote.split('#').join('');
    const newTags = value.split(' ').filter(element => element.includes("#"))
    const uniqueNewTags = Array.from(new Set(newTags.map(JSON.stringify))).map(JSON.parse); 


    copyNotes.push([note, value, uniqueNewTags]);
    copyTags.push(...uniqueNewTags)

    const uniqueTags = Array.from(new Set(copyTags.map(JSON.stringify))).map(JSON.parse);
  
    setNotes(copyNotes);
    setTags(uniqueTags)    
  
    localStorage.setItem('notes', JSON.stringify(copyNotes));
    localStorage.setItem('tags', JSON.stringify(uniqueTags));
  }

  const deleteNote = (inx) => {    
    const newData = notes.filter((elem, index) => index !== inx);

    setNotes([...newData]);

    localStorage.setItem('notes', JSON.stringify(newData));    
  }

  const updateNotesList = (inx, editedNote) => {
      const newData = [...notes]

      const preNote = editedNote.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
      const note = preNote.split('#').join('');
      const newTags = editedNote.split(' ').filter(element => element.includes("#"))
      const uniqueNewTags = Array.from(new Set(newTags.map(JSON.stringify))).map(JSON.parse);

      newData[inx][0] = note
      newData[inx][1] = editedNote
      newData[inx][2] = uniqueNewTags
      
      const allTags = [...tags]
      allTags.push(...uniqueNewTags)
      const uniqueTags = Array.from(new Set(allTags.map(JSON.stringify))).map(JSON.parse);
      

      setNotes([...newData]);
      setTags(uniqueTags)

      localStorage.setItem('notes', JSON.stringify(newData));
      localStorage.setItem('tags', JSON.stringify(uniqueTags));
        
  }
  return (
    
    <div className="App">
      <div className="container">
        <Creators add={ addNote } addTag={ addTag } update={ updateNotesList }/>
        <AllNotes className="allNotes" data={ notes } tags={tags} update={ updateNotesList } deleteNote={ deleteNote }/>        
      </div>
    </div>
  );
}

export default App;
