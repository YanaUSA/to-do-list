import { selectedTodos } from 'redux/to-do-selectors';
import { useSelector } from 'react-redux';
import { ToDosItem } from '../ToDosItem/ToDosItem';
import { ToDoLisTable } from './ToDoList.styled';

export const ToDoList = () => {
  const todos = useSelector(selectedTodos);

  return (
    <>
      <ToDoLisTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, description, status }) => (
            <ToDosItem
              key={id}
              id={id}
              title={title}
              description={description}
              status={status}
            />
          ))}
        </tbody>
      </ToDoLisTable>
    </>
  );
};
