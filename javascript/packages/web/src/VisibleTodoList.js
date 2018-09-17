import React from "react"
import { Todo,Visbility, getVisibleTodos } from "shared"
import TodoList  from "./TodoList"

const VisibleTodoList = () => (
  <Visbility.VisibilityContext.Consumer>
    {({ visibilityFilter }) => (
      <Todo.TodosContext.Consumer>
        {({ todos, clearTodo, toggleTodo, GetTodos }) => (
          <TodoList
            todos={getVisibleTodos(todos, visibilityFilter)}
            onClearTodo={id => clearTodo(id)}
            onToggleTodo={id => toggleTodo(id)}
            GetTodos={GetTodos}
          />
        )}
      </Todo.TodosContext.Consumer>
    )}
  </Visbility.VisibilityContext.Consumer>
)

export default VisibleTodoList