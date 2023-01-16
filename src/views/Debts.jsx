 
import React, { useEffect , useState } from 'react';
import AddToDoComponent from '../components/AddToDoComponent.jsx'
import DeleteToDoComponent from '../components/DeleteToDoComponent.jsx'

function Week() {
 
    const [AllDayToDo, setAllDayToDo] = useState([]);
    
    useEffect(() => {
        let url = "http://localhost/backend/getTodo.php";
        let formData = new FormData();
        formData.append('due', 'weekTask');
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            enctype: 'multipart/form-data',
            body: formData
        }
        fetch(url , requestOptions)
        .then(response => response.json())
        .then(data => 
            { if(data) {setAllDayToDo(data)};}
        );
    }, []);


    return (
        <div>         
            <AddToDoComponent setAllDayToDo = {setAllDayToDo}  due={'weekTask'}/>
            {AllDayToDo.map((post, index) => {
                    return (
                        <div id= {post.id } key = {index}> 
                            <div>{post.todoBody}</div>
                            <DeleteToDoComponent setAllDayToDo = {setAllDayToDo}  id={post.id} due={'weekTask'}/> 
                        </div>
                    )
                })}         
        </div>
    )
}

export default Week;