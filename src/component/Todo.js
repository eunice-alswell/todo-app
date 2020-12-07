import React,{useState} from 'react'
import New from './TodoForm'
import { MdDelete } from "react-icons/md";
import { FaRegEdit, } from "react-icons/fa";


// todo list (adding the delete, complete and edit functionalities)

function Todo({todos,completeTodo, removeTodo, updateTodo}) {

// setting the current date and time
    const dateTime= (d) => {
         
        let hour = d.getHours()
        let minute = d.getMinutes()
        let date = d.getDate()
        let year = d.getFullYear()
        let month = d.getMonth()

        return `${hour}:${minute},${date}-${month}-${year}`
    }

    const [edit,setEdit] = useState({
        id : null,
        value : ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id,  value)
        setEdit({
            id : null,
            value : ''
        })
    }

    if (edit.id){
        return<New edit = {edit} onSubmit = {submitUpdate}/>
    }

    return  (
// returning the individual list 
        <div>

            <div div className = 'date'>{`${dateTime(new Date())}`}</div> 
            
            {todos.map((todo,index)=>(
       
                <div className ={todo.iscomplete? 'todo-row complete' : 'todo-row'} key={index}>
                    <div key={todo.id} onClick = {() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className='icons'>
                        <MdDelete onClick={() => removeTodo(todo.id)} className = 'del-btn'/>
                        <FaRegEdit onClick={() => setEdit({id :todo.id, value : todo.text})} className = 'edit-btn'/>
                    </div>
                </div>
                
            ))}

        </div>

    )
        
    
}

export default Todo