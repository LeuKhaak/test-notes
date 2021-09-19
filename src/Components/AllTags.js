// eslint-disable-next-line
import React, {useState, useEffect} from 'react';

function AllTags(props) {
    const [tagsList, setTagsList] = useState('')
    //console.log(props)

    useEffect(() => {  
       setTagsList(createTagsList())
    }, []) // eslint-disable-line
    
    const createTagsList = () => {
        if (localStorage.getItem('tags')) return
        const data = JSON.parse(localStorage.getItem('tags'));

        console.log(data);
        // const tags = []
        // data.forEach(element => {
        //     tags.push(...element[2]) 
        // });
        // console.log(data[0][2])
        // console.log(tags)
        return data && data.map(element => <span key={element}>{element}</span> )
    }

  return(
      <div className="allTags">
        <ul className="notesList">
            { props.tags.map(element => (
                <li key={ element }>{ element }</li>           
            ))}
        </ul>
      </div>
  )
}

export default AllTags