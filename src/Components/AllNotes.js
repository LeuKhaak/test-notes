import Note from './Note';
import AllTags from './AllTags';

function AllNotes(props) {

  return(
      <section className="notes">
        <ul className="notesList">
          { props.data.map((element, index) => (
            <Note key={ element } data={element} tags={props.tags} index={ index } update={props.update} deleteNote={ props.deleteNote }/>           
          ))}
        </ul>
        
        <AllTags tags={props.tags} deleteTag={props.deleteTag} filterNotes={props.filterNotes} filter={props.filter} setFilter={props.setFilter}/>
      </section>
  )
}

export default AllNotes