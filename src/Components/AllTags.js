function AllTags(props) {
    
  return(
      <div className="allTags">
        <ul className="tagList">
            { props.tags.map((element, index) => (
                <li className="tagItem" key={ element }>
                  <button className="delete" onClick={() =>  props.deleteTag(index)}>&#10006;</button>
                  <button className="edit" onClick={() =>  props.filterNotes(element.toLowerCase())}  >&#128269;</button>
                  <span>{ element.toLowerCase()}</span>
                </li>           
            ))}
        </ul>
      </div>
  ) 
}

export default AllTags