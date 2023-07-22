function TodoItems(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoItems;

// !Line Through instead of delete
// import React, { useState } from "react";

// function TodoItems(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone(!isDone); //if true false or if false true.
//   }

//   return (
//     <li
//       onClick={handleClick}
//       style={{ textDecoration: isDone ? "line-through" : "none" }}
//     >
//       {props.text}
//     </li>
//   );
// }

// export default TodoItems;
