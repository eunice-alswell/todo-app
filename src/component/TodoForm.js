import React,{useState,useEffect,useRef} from 'react'

export default function New(props) {

    const [input,setInput] = useState('')
// setting the input field on focus
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('')
        
    }
    return (

// from (input & button) of the app
// conditional statement for the edit
        <div>
           <form onSubmit={handleSubmit} className ='todo-form'>
                {
                    !props.edit ?(
                        <div>
                            <input
                                className='todo-input' 
                                type = 'text' 
                                placeholder = 'Enter list....'
                                value= {input}
                                onChange = {e =>setInput(e.target.value)}
                                ref ={inputRef}
                            />
                            <button className='btn'>Add Todo</button>
                        </div>
                    ):(
                        <div>
                            <input
                                className='todo-input' 
                                type = 'text' 
                                placeholder = 'Edit list'
                                value= {input}
                                onChange = {e =>setInput(e.target.value)}
                                ref ={inputRef}
                            />
                            <button className='btn'>Update</button>
                        </div>
                    )
                }   
            </form> 
        </div>
    )
}
