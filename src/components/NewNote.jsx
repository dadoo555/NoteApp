import './NewNote.css'
import './Overview.css'
import {motion} from 'framer-motion'
import { useState } from 'react'


function NewNoteInput(props){
    return (
        <div id='container-newnote'>
            <Menu add={props.add} title={props.title} changeEvent={props.changeEventTitle}/>
            <textarea value={props.text} name="newnote" id="newnote" onChange={(e)=>{props.changeEvent(e.currentTarget.value)}}></textarea>
        </div>
    )
}

function Menu(props){
    return(
        <div className='menu-newnote'>
            <input id='newnote-title' type='text' value={props.title} onChange={(e)=>{props.changeEvent(e.currentTarget.value)}}></input>
            <button onClick={props.add}>Save</button>
        </div>
    )
}

export default function NewNote(props){
    const [valueNewNote, setValueNewNote] = useState("")
    const today = new Date()
    const [titleNewNote, setTitleNewNote] = useState(`Title ${today.toLocaleDateString('de-DE')}`)

    function changeEventNewNote(value){
        setValueNewNote(value)
    }

    function changeEventTitle(value){
        setTitleNewNote(value)
    }

    function addNote(){
        props.add(titleNewNote, valueNewNote)
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
                <NewNoteInput 
                    add={addNote} 
                    changeEvent={changeEventNewNote} 
                    text={valueNewNote} 
                    changeEventTitle={changeEventTitle} 
                    title={titleNewNote} />
        </motion.div>
    )
}