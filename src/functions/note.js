import Cookies from 'universal-cookie';

class Note {
    constructor(title, date, text, backgroundColor){
        this.title = title;
        this.date = date;
        this.text = text;
        this.backgroundColor = backgroundColor;
    }
}


function setCookieNewNote(title, text){
    const cookies = new Cookies()
    const notes = cookies.get("notes") ? cookies.get("notes") : []
    const newdate = new Date()
    const newnote = new Note(title, newdate.toLocaleDateString("de-DE"), text, "preto")
    notes.push(newnote)

    cookies.set("notes", notes, {path: '/'})

}
function getCookiesNotes(){
    const cookies = new Cookies();
    return cookies.get("notes")    
}






export {setCookieNewNote, getCookiesNotes}