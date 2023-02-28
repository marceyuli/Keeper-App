import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import notes from './notes.js';
export default function App(){
    return(
        <div >
            <Header />
            {notes.map(function createNote(note){
                return <Note key={note.key} title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    )
}
