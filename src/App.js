import { useState, useEffect } from 'react';
import './App.scss';
import Creators from './Components/Creators';
import AllNotes from './Components/AllNotes';
//import FilteredNotes from './Components/FilteredNotes';
import prepareData from './Utils/PrepareData';

function App() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filter, setFilter] = useState('no'); 
  
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || []); // loading saved data
    setTags(JSON.parse(localStorage.getItem('tags')) || []);
    
    if (!localStorage.getItem('notes')) { // loading default data
      fetch('/json/data.json')
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.notes)
        setTags(data.tags)
      })
    } // eslint-disable-next-line
  }, []);

  const addTag = (value) => {  // adding a new tag
    if(value === '' || value[0] !== '#') return

    const copyTags = [ ...tags ];
    copyTags.push(value.toLowerCase())    
    const uniqueTags = Array.from(new Set(copyTags.map(JSON.stringify))).map(JSON.parse); // duplication check
    
    setTags(uniqueTags)
    localStorage.setItem('tags', JSON.stringify(uniqueTags));
  }

  const addNote = (value) => {  // adding a new note
    if(value === '') return
  
    const copyNotes = [ ...notes ];
    const copyTags = [ ...tags ];

    const prepData = prepareData(value)

    copyNotes.push([prepData[0], value, prepData[1]]);
    copyTags.push(...prepData[1])
    const uniqueTags = Array.from(new Set(copyTags.map(JSON.stringify))).map(JSON.parse); // duplication check
  
    setNotes(copyNotes);
    setTags(uniqueTags)    
  
    localStorage.setItem('notes', JSON.stringify(copyNotes));
    localStorage.setItem('tags', JSON.stringify(uniqueTags));
  }

  const deleteNote = (inx) => { // deleting a note   
    const newData = notes.filter((elem, index) => index !== inx);

    setNotes([...newData]);
    localStorage.setItem('notes', JSON.stringify(newData));    
  }

  const deleteTag = (inx) => {    
    const newData = tags.filter((elem, index) => index !== inx);

    setTags([...newData]);
    localStorage.setItem('tags', JSON.stringify(newData));    
  }

  const updateNotesList = (inx, editedNote) => { // changing a note
      const newData = [...notes]

      const prepData = prepareData(editedNote)

      newData[inx][0] = prepData[0]
      newData[inx][1] = editedNote
      newData[inx][2] = prepData[1]
      
      const allTags = [...tags]
      allTags.push(...prepData[1])
      const uniqueTags = Array.from(new Set(allTags.map(JSON.stringify))).map(JSON.parse); // duplication check      

      setNotes([...newData]);
      setTags(uniqueTags)

      localStorage.setItem('notes', JSON.stringify(newData));
      localStorage.setItem('tags', JSON.stringify(uniqueTags));        
  }

  const filterNotes = (tag) => { // filtering notes by tag
    const data = [...notes]

    const withTag = data.filter(element => element[2].includes(tag))
    
    setFilter('yes')
    setFilteredNotes([...withTag]);
  }  

  return (    
    <div className="App">
      <div className="container">
        <Creators add={ addNote } addTag={ addTag } update={ updateNotesList } tags={tags}/>
       
        <AllNotes  data={filter === 'no' ? notes : filteredNotes} tags={tags} update={ updateNotesList } deleteNote={ deleteNote } deleteTag={deleteTag} filterNotes={filterNotes} filter={filter} setFilter={setFilter}/>       
      </div>
    </div>
  );
}

export default App;
