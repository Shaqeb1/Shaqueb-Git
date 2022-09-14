import { TodoListItem } from "./TodoListItem";
export const TodoList = ({todos, onCompleteTodo, onDeleteTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoListItem key={todo.id} todo={todo} onClickComplete={onCompleteTodo} onClickDelete={onDeleteTodo} />
            ))}
        </div>
    )
}