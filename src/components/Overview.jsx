import Menu from "./Menu";
import NewNote from "./NewNote";
import NoteGrid from "./NoteOverview";
import "./Overview.css"
import {getCookiesNotes, setCookieNewNote} from "../functions/note"
import { useState, useEffect } from "react";

export default function Homepage(){
    const [newIsOpen, setNewIsOpen] = useState(true)
    const [notes, setNotes] = useState([])

    function isNewNoteOpen(){
        setNewIsOpen((prev => !prev))
    }

    function findNotes(){
        const result = getCookiesNotes()
        setNotes(result)
    }

    function addNote(title, text){
        setCookieNewNote(title, text)
        findNotes()
    }

    useEffect(()=>{
        findNotes()
    },[])

    return (
        <div id="structure">
            <NewNote isOpen={newIsOpen} add={addNote}/>
            <div id="container-notes">
                <Menu btnNew = {isNewNoteOpen}/>
                <NoteGrid notes={notes}/>
            </div>
        </div>
    )
}
