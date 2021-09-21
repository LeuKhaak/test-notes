function AllTags(props) {
    
  return(
      <div className="allTags">
        <ul className="tagList">
            { props.tags.map((element, index) => (
                <li className="tagItem" key={ element }>

                  <button className="delete delTag" onClick={() =>  props.deleteTag(index)}>&#10006;</button>
                  
                  {/* <button className="edit" onClick={() =>  props.filterNotes(element.toLowerCase())}  >&#128269;</button> */}

                  <span className="tag" onClick={() =>  props.filterNotes(element.toLowerCase())}>{ element.toLowerCase()}</span>
                </li>           
            ))}
        </ul>
        <button style={props.filter === 'yes' ? {display: 'block'} : {display: 'none'}} onClick={() =>  props.setFilter('no')} className="createButton">Show all notes</button>
      </div>
  ) 
} // props.filter

export default AllTags