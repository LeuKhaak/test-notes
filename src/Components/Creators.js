import CreatorNotes from './CreatorNotes';
import CreatorTags from './CreatorTags';

function Creators(props) {

  return(
      <section className="creators" >
        <CreatorNotes add={ props.add }/>
        <CreatorTags addTag={ props.addTag }/>
      </section>
  )
}

export default Creators