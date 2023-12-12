import './NewNote.css'
import './Overview.css'
import {motion} from 'framer-motion'
import {addNote, findAllNotes} from "../functions/note"
import { useState } from 'react'


function NewNoteInput(props){
    return (
        <div id='container-newnote'>
            <Menu add={props.add}/>
            <textarea value={props.value} name="newnote" id="newnote" onChange={(e)=>{props.changeEvent(e.currentTarget.value)}}></textarea>
        </div>
    )
}

function Menu(props){
    return(
        <div className='menu-newnote'>
            <h3>New note</h3>
            <button onClick={props.add}>Add</button>
        </div>
    )
}

export default function NewNote(props){
    const [valueNewNote, setValueNewNote] = useState("")
    const [notes, setNotes] = useState([])

    function add(){
        
        addNote(valueNewNote)
        findAllNotes()
        
    }

    function changeEventNewNote(value){
        setValueNewNote(value)
    }

    return (  
        <motion.div
            initial={{
                width: props.isOpen ? "100%" : 0
            }}
            animate={{
                width: props.isOpen ? 0 : "100%"
            }}
            exit={{
                width: props.isOpen ? "100%" : 0
            }}
        >
                <NewNoteInput add={add} changeEvent={changeEventNewNote} value={valueNewNote}/>
        </motion.div>
    )
}