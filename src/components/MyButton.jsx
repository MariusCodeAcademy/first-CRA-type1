// new component
function MyButton(props) {
  console.log('MyButton props', props);
  // component logic
  // const veryImportantNuber = 54 * 78;
  const btnStyle = {
    margin: '1rem',
    fontSize: '1.2rem',
    color: props.color,
  };
  return <button style={btnStyle}>{props.text}</button>;
}

export default MyButton;
