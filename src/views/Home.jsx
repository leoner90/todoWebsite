 
import React, { useEffect , useState } from 'react';
import AddToDoComponent from '../components/AddToDoComponent.jsx'
import DeleteToDoComponent from '../components/DeleteToDoComponent.jsx'
import EditTodoComponent from '../components/EditTodoComponent.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("old", ev.target.id);
  }
 


function Home() {
    const [AllDayToDo, setAllDayToDo] = useState([]);
    const [orderMap, setOrderMap] = useState([]);
    const [contenteditableID, setContenteditableID] = useState();
    const [saveTodoTextForEdit, setSaveTodoTextForEdit] = useState();
    useEffect(() => {
        let url = "http://localhost/backend/getTodo.php";
        let formData = new FormData();
        formData.append('due', 'dayTask');
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
                setOrderMap(data.sortMap);
                data ? setAllDayToDo(data.row) : setAllDayToDo([]); 
        }
        );
    }, []);
 

    


    function drop(ev) {
        let url = "http://localhost/backend/changeOrder.php";
        let formData = new FormData();
        formData.append('idOfElWhereIputNew' ,ev.target.id );
        formData.append('curentElId' ,Number(ev.dataTransfer.getData("old")));
        formData.append('due', 'dayTask');
    
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
                console.log(data.sortMap)
                setOrderMap(data.sortMap);
                data ? setAllDayToDo(data.row) : setAllDayToDo([]); 
            }
        );
      }
      
    return (
        <div>      
            <h1 className="dailyHeader">Just do it.</h1>
            
            <AddToDoComponent setAllDayToDo = {setAllDayToDo} setOrderMap={setOrderMap}  due={'dayTask'}/>
            <div id='dragDropMainBox'  onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}  style={{display: "flex", flexDirection: 'column' }}>
             
                {orderMap.map((curentElementIdShoudBe, index) => {
                    let test = 0;
                   
                    let curentEl = (AllDayToDo.find(x => x.id === curentElementIdShoudBe)) ;  
                    if (curentEl.id === contenteditableID) {
                        test = true;
                    } else {
                        test = false;
                    }      
                    return (
                        <div className='todoWrapper' id={curentEl.id} key = {index} draggable="true" onDragStart={(e)=>drag(e)}>  
                            <FontAwesomeIcon icon={faCoffee} />                    
                            <span contentEditable = {test} 
                                className='todoText' id={curentEl.id} 
                                key = {index} draggable="true" 
                                onDragStart={(e)=>drag(e)}
                            >
                                {curentEl.todoBody}
                            </span>
                            <EditTodoComponent id={curentEl.id}  
                                setContenteditableID = {setContenteditableID} 
                                saveTodoTextForEdit= {saveTodoTextForEdit}
                                setSaveTodoTextForEdit={setSaveTodoTextForEdit}
                                AllDayToDo ={AllDayToDo}
                            />  
                            <DeleteToDoComponent setOrderMap={setOrderMap} setAllDayToDo = {setAllDayToDo}  id={curentEl.id} due={'dayTask'}/>   
                        </div>
                    )
                })}        
            </div>    

        </div>
    )
}

export default Home;