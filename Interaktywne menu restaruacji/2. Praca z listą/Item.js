const Item = (props) => (
  <li 
  style={props.active ? {fontWegiht: 'bold'} : {color:'gray'}}
  onClick={() => props.changeStatus(props.id)}
  >
   {props.name}
  </li>
)