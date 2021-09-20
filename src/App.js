import { useState, useEffect } from 'react';
import './App.scss';
import Creators from './Components/Creators';
import AllNotes from './Components/AllNotes';


function App() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  
  
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || []);
    setTags(JSON.parse(localStorage.getItem('tags')) || []);
    
    if (!localStorage.getItem('notes')) {
      fetch('/json/data.json')
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.notes)
        setTags(data.tags)
      })
    }

    // eslint-disable-next-line
  }, []);

  const addTag = (value) => {  
    if(value === '' || value[0] !== '#') return

    const copyTags = [ ...tags ];
    copyTags.push(value.toLowerCase())    
    const uniqueTags = Array.from(new Set(copyTags.map(JSON.stringify))).map(JSON.parse);
    
    setTags(uniqueTags)
    localStorage.setItem('tags', JSON.stringify(uniqueTags));
  }

  const checkForSigns = (arg) => {
    const result = []
    arg.forEach(element => {
      const end = element[element.length - 1]
      if (end === '!' || end === '.' || end === ',' || end === ':') {
        const elem = element.slice(0, element.length - 1)        
        result.push(elem)
      }
      else result.push(element)
    });
    return result;
  }

  const addNote = (value) => {  
    if(value === '') return
  
    const copyNotes = [ ...notes ];
    const copyTags = [ ...tags ];

    const preNote = value.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
    const note = preNote.split('#').join('');
    const newTags = value.toLowerCase().split(' ').filter(element => element.includes("#"))
    
    const newTags1 = checkForSigns(newTags)
    const uniqueNewTags = Array.from(new Set(newTags1.map(JSON.stringify))).map(JSON.parse);

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

  const deleteTag = (inx) => {    
    const newData = tags.filter((elem, index) => index !== inx);

    setTags([...newData]);
    localStorage.setItem('tags', JSON.stringify(newData));    
  }

  const updateNotesList = (inx, editedNote) => {
      const newData = [...notes]

      const preNote = editedNote.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
      const note = preNote.split('#').join('');
      const newTags = editedNote.toLowerCase().split(' ').filter(element => element.includes("#"))

      const newTags1 = checkForSigns(newTags)
      const uniqueNewTags = Array.from(new Set(newTags1.map(JSON.stringify))).map(JSON.parse);

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

  const filterNotes = (tag) => {
    const data = [...notes]

    const withTag = data.filter(element => element[2].includes(tag))
    const withoutTag = data.filter(element => element[2].toString().indexOf(tag) === -1)
    const filteredData = withTag.concat(withoutTag)    
    
    setNotes([...filteredData]);
    localStorage.setItem('notes', JSON.stringify(filteredData));
  }

  return (    
    <div className="App">
      <div className="container">
        <Creators add={ addNote } addTag={ addTag } update={ updateNotesList } tags={tags}/>
       
        <AllNotes data={ notes } tags={tags} update={ updateNotesList } deleteNote={ deleteNote } deleteTag={deleteTag} filterNotes={filterNotes}/>        
      </div>
    </div>
  );
}

export default App;
