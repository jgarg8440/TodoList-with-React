import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let[todos,setTodos] = useState([{task:"sample-task" , id: uuidv4()}]);
    let[newTodo,senewTodo] = useState("");
        
     let addNewTask = () =>{
        setTodos((prevTodos)=>{
           return [...prevTodos,{task:newTodo, id: uuidv4()}];
        });
        senewTodo("");
    };
     let updateTodoValue =(event) =>{
        senewTodo(event.target.value);
     };
      let deleteTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id != id));
      };
      let upperCaeAll = () => {
        setTodos((prevTodos) => {
          return prevTodos.map((todo) => {
            console.log(todo);
            return {
              ...todo,
              task: todo.task.toUpperCase(),
            };
          });
        });
      };
      
      let UpperCaseOne = (id) =>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
            if(todo.id == id)
            {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                  };
            }
             else{
                return todo;
             }  
            });
          });
      }
    return (
        <div>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>TodoList</h4>
             <ul>
              { 
               todos.map((todo) =>(
                 <li key={todo.id}>
                     <span>{todo.task}</span> &nbsp;&nbsp;
                    <button onClick={()=> deleteTodo(todo.id)}>delete</button>
                    <button onClick={()=> UpperCaseOne(todo.id)}>UpperCase One</button>

                    </li>
               ))} 
            </ul> 
            <br></br>
            <button onClick={upperCaeAll}>UpperCase All</button>
        </div>
    );
}