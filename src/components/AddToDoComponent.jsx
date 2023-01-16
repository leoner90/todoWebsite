import React, { useState } from 'react';


 function AddTodo (props) {
    const [newTodoText, setNewTodoText] = useState('');
    function addTodoDB(){
        let url = "http://localhost/backend/addTodo.php";
        let formData = new FormData();
        formData.append('body', newTodoText);
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
                setNewTodoText('');
                props.setOrderMap(data.sortMap); 
                data ? props.setAllDayToDo(data.row) : props.setAllDayToDo([]); 
                
            }
        );
    };

    return (
        <div className="addTodoWrapper">
            <input className="inputAddTodo"  type={'text'} placeholder={'Add New To Do.'} value={newTodoText}  onChange={(e)=> setNewTodoText(e.target.value)}/>
            <button 
                className="addTodobtn"
                onClick={ (e)=>{
                    e.preventDefault();
                    addTodoDB();
                    
                }}>
                    Add TODO
            </button>
            </div>
    )
}

export default AddTodo;