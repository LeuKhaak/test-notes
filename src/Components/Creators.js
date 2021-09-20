import CreatorNotes from './CreatorNotes';
import CreatorTags from './CreatorTags';

function Creators(props) {

  return(
      <section className="creators" >
        <CreatorNotes tags={props.tags} add={ props.add }/>
        <CreatorTags addTag={ props.addTag } tags={props.tags}/>
      </section>
  )
}

export default Creators