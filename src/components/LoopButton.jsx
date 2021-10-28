function LoopButton() {
  // logic
  const buttonsArr = ['click me', 'get stuff', 'monday is free'];
  return (
    <div>
      {buttonsArr.map((btnText, index) => (
        <button key={index}>{btnText}</button>
      ))}
    </div>
  );
}

export default LoopButton;
