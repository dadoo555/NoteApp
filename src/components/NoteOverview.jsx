import "./NoteOverview.css"

export default function NoteGrid(props){
    
    const list = []
    if (props.notes){
        props.notes.forEach((note)=>{
            list.push(<NoteItem 
                title={note.title}
                text={note.text}
                date={note.date} />)
        })
    }

    return (
        <ul id="note-grid">
            {list}
        </ul>
    )
}


function NoteItem(props){
    return (
        <li className="note-container">
            <div className="note-text">
                <p>{props.text}</p>
            </div>
            <h3 className="note-title">{props.title}</h3>
            <h5 className="note-date">{props.date}</h5>
        </li>
    )
}
