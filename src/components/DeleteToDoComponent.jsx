import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

 function DeleteToDo (props) {
    function DeleteToDoFromDb(){
        let url = "http://localhost/backend/deleteTodo.php";
        let formData = new FormData();
        formData.append('id', props.id);
        formData.append('due', props.due);
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            enctype: 'multipart/form-data',
            body: formData
        }
        fetch(url , requestOptions)
        .then(response => response.json())
        .then(data => 
            { 
                props.setOrderMap(data.sortMap);
                props.setAllDayToDo(data.row) 
            }
        );
    };

    return (
        
          <button 
          className='deleteBtn' 
          onClick={ (e)=>{
              e.preventDefault();
              DeleteToDoFromDb();
             
          }}>
           <FontAwesomeIcon className='faTrashCan' icon={faTrashCan} />   
        </button>
        
    )
}

export default DeleteToDo;