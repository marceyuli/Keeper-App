import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes(prevValue => {
      return [...prevValue, note];
    });
    console.log(notes);
  }
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note,index)=>{
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index)=>{
        return <Note key={index} title={note.title} content={note.content}  onClick={deleteNote} id={index}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
