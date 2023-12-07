const user = true;

export default function Protected(props) {
  if (user === true) {
    return props.component;
  } else {
    return <h3>No Autorizado</h3>;
  }
}
