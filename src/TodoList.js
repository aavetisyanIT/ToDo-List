import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

export default function TodoList(props) {
	console.log(props.todos);
	return (
		<Paper>
			<List>
				{props.todos.map((todo) => (
					<>
						<Todo
							key={todo.id}
							task={todo.task}
							completed={todo.completed}
						/>
						<Divider />
					</>
				))}
			</List>
		</Paper>
	);
}
