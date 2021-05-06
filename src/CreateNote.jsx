import React from 'react';
import './index.css';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import IconButton from '@material-ui/core/IconButton';

const CreateNote = (props) => {

 const deleteNote = () => {
     props.deleteItem(props.id);
 }    

  return ( 
    <><div className="crt_form">
     <form>
         <div className="crt_note">
         <h1 className="crt_inp">{props.title}</h1>
              <p row="" column="" className="crt_txt">{props.text}</p>
            <IconButton aria-label="delete" className="dlt_btn" onClick={deleteNote}> <DeleteSweepIcon /></IconButton>
      
         </div>
     </form>
     </div>
    </>
  )
}
export default CreateNote; 