import Cookies from 'universal-cookie';

class Note {
    constructor(title, date, text, backgroundColor){
        this.title = title;
        this.date = date;
        this.text = text;
        this.backgroundColor = backgroundColor;
    }
}


function addNote(value){
    const cookies = new Cookies()
    const notes = cookies.get("notes") ? cookies.get("notes") : []
    const newdate = new Date()
    const newnote = new Note("Titulo aleatorio", newdate.toLocaleDateString("de-DE"), value, "preto")
    notes.push(newnote)

    cookies.set("notes", notes, {path: '/'})

}
function findAllNotes(){
    const cookies = new Cookies();
    return cookies.get("notes")    
}






export {findAllNotes, addNote}