import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  console.log(response.data);

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  const userId = todo.userId;

  logTodo(id, title, completed, userId);
});

const logTodo = (
  id: number,
  title: string,
  completed: boolean,
  userId: number
) => {
  console.log(`
  Todo with id ${id}
  Has title of ${title}
  Is it finished? ${completed}
  Which user does this todo belong to? ${userId}
`);
};
