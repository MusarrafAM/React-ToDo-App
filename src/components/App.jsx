import { useState } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function updateText(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function addItem() {
    setTodoList((prevItems) => {
      return [...prevItems, text];
    });

    setText(""); //Clear the input field
  }

  function deleteItem(id) {
    setTodoList(todoList.filter((item, index) => {
      return index !== id
    }))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
        updateTextFunc = {updateText}
        currentText = {text}
        addItemFunc = {addItem}
        />
      <div>
        <ul>
          {todoList.map((todoItem, index) => (
            <TodoItems
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
