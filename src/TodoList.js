import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

export default function TodoList({ todos, removeTodo, toggleTodo }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => (
					<>
						<Todo
							key={todo.id}
							task={todo.task}
							completed={todo.completed}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							id={todo.id}
						/>
						<Divider />
					</>
				))}
			</List>
		</Paper>
	);
}
