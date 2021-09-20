function checkForSigns(arg) { // checking for non-alphabetic characters at the end of the tag
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
  
export default checkForSigns