import React from "react";

const = [markPoem, setMarkPoem] = useState([false])
function Poem({poem}) {
  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>{poem.author}</strong>
      </p>
      {
      markPoem?
      <button onClick = {() => {setMarkPoem(false)}> Mark as read </button>)
      :( <button onClick={() => setMarkRead(true)} </button> )}
    </div>
  );
}

export default Poem;
