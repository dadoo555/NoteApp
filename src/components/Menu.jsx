import "./Menu.css"

export default function Menu(props){
    return (
        <div id="menu">
            <button onClick={props.btnNew}>New note</button>
            <button >Delete</button>
        </div>
    )
}