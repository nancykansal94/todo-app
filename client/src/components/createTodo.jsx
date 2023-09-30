import axios from "axios";
import { useState } from "react";

export function CreateTodo({onCreate}) {
    const [todo, setTodo] = useState({ title : "", description : "" });
    const [error, setError] = useState('');

    const handleTitleChange = (event) => {
        if(error !== '')
        {
            setError('');
        }
        setTodo({ 
            title : event.target.value,
            description : todo.description   
        })
    }

    const handleDescriptionChange = (event) => {
        setTodo({ 
            title : todo.title,
            description : event.target.value   
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();     // to prevent reload

        if(todo.title === ''){
            setError("Title is required");
            return;
        }
        axios
            .post("http://localhost:8500/api/todo", todo)
            .then(() => {
                setTodo({ title : "", description : ""})
                onCreate(todo);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="contents">
                <form onSubmit={handleSubmit}>
                    <label className="label">
                        Title
                    </label>
                    <input className="input" type="text" name="title" value={todo.title} onChange={handleTitleChange}/>
                    <label className="label">
                        Description
                    </label>
                    <input className="input" type="text" name="description" value={todo.description} onChange={handleDescriptionChange}/>
                    <button className="button" type="submit">
                        Create Todo
                    </button>
                </form>
                <div style={{ color:"red"}}>
                    {error}
                </div>
            </div>            
        </div>
    );
};