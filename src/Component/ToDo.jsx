import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [todos, settodos] = useState([]);

  const [todo, settodo] = useState("");
  // Function to delete a todo
  const deleteTodo = (id) => {
    settodos(todos.filter((obj) => obj.id !== id));
  
  };



  return (
    
        <div className="app">
          <div className="mainHeading">
            <h1>ToDo List</h1>
          </div>
         
          <div className="input">
            {/* first input in display  face  */}
            <input
              type="text"
              placeholder="🖊 Add item..."
              value={todo}
              onChange={(e) => settodo(e.target.value)}
            />
            <i
              onClick={() => settodos([...todos,{id:Date.now(), Text: todo,status:false} ])}
              className="fas fa-plus"
            ></i>
          </div>
          <div className="todos">
            {/* when ever the map run then the todo is display in the  page */}
            { 
            todos.map((obj)=>
            {
                return(
                  <div className="todo">
                        <div className="left">
                            <input onChange={(e)=>{
                                console.log(e.target.checked);
                                console.log(obj);
                                settodos(todos.filter(obj2=>{
                                    if(obj2.id===obj.id){
                                        obj2.status=e.target.checked
                                    }
                                    return obj2
                                }))
                            }}  value={obj.status} type="checkbox" name="" id="" />
                          <p>{obj.Text}</p>
                         </div>
                         <div className="right"
                         >
                             <i onClick={() => deleteTodo(obj.id)}   className="fas fa-times"></i>
                         </div>
                    </div>
                )
             })
            
             }
    
             {
                todos.map((obj)=>{
                    if(obj.status){
                        return(
                            <div className="result-page">
                                <h1>{obj.Text}</h1>
                            </div>
                        )
                    }
                    return null
                })
             }
             
            
          </div>
        </div>
   
  );
}

export default ToDo;
