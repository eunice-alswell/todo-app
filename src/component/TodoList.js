import React,{useState } from 'react'
import New from './TodoForm'
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addtodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
    }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        
    };

    const updateTodo = (todoId,newvalue) => {
        if (!newvalue.text || /^\s*$/.test (newvalue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newvalue:item))
        );
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const completeTodo = id =>{
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.iscomplete = !todo.iscomplete;
            }
            return todo
        });
        setTodos(updateTodos)
    }
    return (
        <div className='add-todo'>
            <h1>What's up today?</h1>
            <New onSubmit = {addtodo}/>
            <Todo todos =  {todos} completeTodo ={completeTodo} removeTodo = {removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
