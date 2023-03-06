import React,{setState, useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  
  function update(event){
    const newValue = event.target.value;
    const inputName = event.target.name;
    setNote(prevValue => {
        if(inputName === "title"){
            return{
                title: newValue,
                content: prevValue.content
            }
        } else if(inputName === "content"){
            return{
                title: prevValue.title,
                content: newValue
            }
        }
    })
  }
  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={update} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={update} value={note.content}></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
