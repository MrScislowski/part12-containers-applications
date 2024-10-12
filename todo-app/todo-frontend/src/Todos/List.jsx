import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => <Todo key={todo.text} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>).reduce((acc, cur) => [...acc, <hr key={cur.text} />, cur], [])}
    </>
  )
}

export default TodoList
