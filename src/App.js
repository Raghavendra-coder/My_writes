import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';



const App = (id) => {

  const[addItem,setAddItem] = useState([]);

  const addNote = (note) => {
   
   setAddItem((prevData) => {
     return [...prevData, note];
       });
  console.log(note);
}

  const onDelete = (id) => {
          setAddItem((prevData) => {
       return ( prevData.filter((currData,index) => {
        return index !==id;
      }))
     });
  }
    
  return ( 
    <><div className="main">
    <Header/>
    
    <Note passNote={addNote}/>
    <div className="crt_notes">
    {addItem.map((val, index) => {
      return ( <CreateNote key={index} id={index}
        title={val.title} text={val.text} deleteItem={onDelete}
      />);
    })}
    </div>
    <Footer/>
    </div>
    
    </>
  )
}
export default App; 