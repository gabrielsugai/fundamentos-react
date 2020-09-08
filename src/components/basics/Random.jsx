export default (props) =>{
  var min = Math.ceil(props.min)
  var max = Math.floor(props.max)
  return Math.floor(Math.random() *(max - min)) + min
}