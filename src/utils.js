export const capitalizeFirstLetter = (string)=> {
  const strArray = string.split(' ');
  const capitalized = strArray.map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return capitalized.join(' ')
}
