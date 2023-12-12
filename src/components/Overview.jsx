import Menu from "./Menu";
import NewNote from "./NewNote";
import NoteGrid from "./NoteOverview";
import "./Overview.css"
import {findAllNotes} from "../functions/note"
import { useState } from "react";


function Grid(props){
    return (
        <div id="containerHome">
            <Menu btnNew = {props.btnNew}/>
            <NoteGrid notes={findAllNotes()}/>
        </div>
    )
}


export default function Homepage(){
    const [newIsOpen, setNewIsOpen] = useState(true)

    function isNewNoteOpen(){
        setNewIsOpen((prev => !prev))
    }

    return (
        <div id="structure">
            <NewNote isOpen={newIsOpen}/>
            <Grid btnNew={isNewNoteOpen}/>
        </div>
    )
}

export {Grid}