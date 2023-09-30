import axios from "axios";

function TodoCard({ todo, onDelete }) {
    const handleDeleteClicked = () => {
        axios
            .delete("http://localhost:8500/api/todo/"+ todo._id)
            .then((res) => {
                console.log(res.data);
                onDelete(todo);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div>
                {todo.title} - {" "}
                {todo.description}
            </div>
            <button className="button" onClick={handleDeleteClicked}>Delete</button>
        </div>
    );
}

export function ShowTodoList({todos, onDelete1}) {        

    return (
        <div className="container">
            <div className="contents">
                <h1>TODO</h1>
                <ul className="list-container">
                    {todos.map((todo) => (
                        <TodoCard todo={todo} onDelete={onDelete1}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}