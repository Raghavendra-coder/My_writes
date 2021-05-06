import React, { useState } from 'react';
import './index.css';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';

const Note = (props) => {
    
    const [caption,setCaption] = useState("Title");
    const [content,setContent] = useState("Write a note...");
    const [expand,setExpand] = useState(false);
    const[note,setNote] = useState({
        title : "",
        text : "",
    });

const inputEvent = (event) => {
const {name , value} = event.target;
          setNote((preData) => {
              return { 
                  ...preData,
                  [name] : value,
              };
          });
          console.log(note);
        };

const addEvent = () => {
    if(note.title===""){
        setCaption("Title not given");
          }
       else  if(note.text===""){
        setContent("Content is Empty");
    }
       else{
           props.passNote(note);
            setNote({
                title : "",
                text : "",
            });
            setCaption("Title") 
              }
}

const badhaDo = () => {
       setExpand(true);
   } 
   const Chota = () => {
    setExpand(false);
    setCaption("Title");

    
} 
 
  return ( 
    <>
    <div className="chota" onDoubleClick={Chota}>
    <form>
        <div className="main_note" >
          <input className="inp" type="text" placeholder={caption}  
             autoComplete="off" name="title" value={note.title} onChange={inputEvent} 
             onClick={badhaDo} />

            {expand ? <textarea className="txt" row="" columns=""
             placeholder={content}  name="text" value={note.text} onChange={inputEvent}/> : null}
              
              {expand ?  <IconButton className="add_btn" onClick={addEvent}><NoteAddIcon className="add_icon"/></IconButton> : null }
          </div>
          </form>
          </div>
          
    </>
  )
}
export default Note; 