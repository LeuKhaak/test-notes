import Note from './Note';
import AllTags from './AllTags';

function AllNotes(props) {

  return(
      <div className="notes">
        <ul className="notesList">
          { props.data.map((element, index) => (
            <Note key={ element } data={element} tags={props.tags} index={ index } update={props.update} deleteNote={ props.deleteNote }/>           
          ))}
        </ul>
        <AllTags tags={props.tags} deleteTag={props.deleteTag} filterNotes={props.filterNotes}/>
      </div>
  )
}

export default AllNotes