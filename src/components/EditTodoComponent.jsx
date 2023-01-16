import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import React, {   } from 'react';
 function EditTodoComponent (props) {
    
    // function DeleteToDoFromDb(){
    //     let url = "http://localhost/backend/deleteTodo.php";
    //     let formData = new FormData();
    //     formData.append('id', props.id);
    //     formData.append('due', props.due);
    //     const requestOptions = {
    //         method: 'POST',
    //         mode: "cors",
    //         enctype: 'multipart/form-data',
    //         body: formData
    //     }
    //     fetch(url , requestOptions)
    //     .then(response => response.json())
    //     .then(data => 
    //         { 
    //             props.setOrderMap(data.sortMap);
    //             props.setAllDayToDo(data.row) 
    //         }
    //     );
    // };

    function editStart() {
        if(props.saveTodoTextForEdit){
            let lastEl = (props.AllDayToDo.find(x => x.id === props.saveTodoTextForEdit));
            let x = lastEl.todoBody;
            lastEl.todoBody = 2214 ;
        }
        props.setContenteditableID(props.id)
        let el = document.getElementById(props.id);
        el.setAttribute("contenteditable", true);
        el.focus()
        window.getSelection().selectAllChildren(el)
        window.getSelection().collapseToEnd()
        props.setSaveTodoTextForEdit(props.id)
    }
    
    return (
        
          <button 
          className='deleteBtn' 
          onClick={ (e)=>{
              e.preventDefault();
              editStart();
             
          }}>
           <FontAwesomeIcon className='faPenToSquare' icon={faPenToSquare} />   
        </button>
        
    )
}

export default EditTodoComponent;