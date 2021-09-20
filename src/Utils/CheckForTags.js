function checkForTags(value, ref, Props) {  // checking words for matching tags
  if (value === '') return ''
  const words = ref.current.value.split(' ')

  const checkedWords = []
  words.forEach(element => {
    let Tag = element;
    
    Props.tags.forEach((tag) => {
      if (tag.slice(1).toLowerCase() === element.toLowerCase() && element[0] !== '#') 
        Tag = '#' + element  // adding # to found tags 
    })

    checkedWords.push(Tag)
  });
  const checkedNote = checkedWords.join(' ')
  
  return checkedNote;
}
  
export default checkForTags