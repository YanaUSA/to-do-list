import { selectedTodos } from 'redux/to-do-selectors';
import { useSelector } from 'react-redux';
import { ToDosItem } from '../ToDosItem/ToDosItem';
import { ToDoLisTable, TableBody } from './ToDoList.styled';

export const ToDoList = () => {
  const todos = useSelector(selectedTodos);

  const tableRows = todos.map(({ id, title, description, status }) => {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          {status}{' '}
          <input
            type="checkbox"
            // checked={status}
            // onChange={handleChange}
          />
        </td>
      </tr>
    );
  });

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
        <tbody>{tableRows}</tbody>
      </ToDoLisTable>
    </>
  );
};
