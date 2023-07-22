

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.updateTextFunc} type="text" value={props.currentText} />
      <button onClick={props.addItemFunc}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
