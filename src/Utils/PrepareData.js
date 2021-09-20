import checkForSigns from "./CheckForSigns";

function prepareData(incomingData) { // preparing data for use in functions
  const preNote = incomingData.replace(/(^|\W)(#[a-z\d][\w-]*)/ig, '$1<span>$2</span>');
    const note = preNote.split('#').join('');
    const newTags = incomingData.toLowerCase().split(' ').filter(element => element.includes("#"))
    
    const newTags1 = checkForSigns(newTags) // checking for non-alphabetic characters at the end of the tag
    const uniqueNewTags = Array.from(new Set(newTags1.map(JSON.stringify))).map(JSON.parse); // checking for doubles
    return [note, uniqueNewTags]
}
  
export default prepareData