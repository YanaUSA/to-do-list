import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoList } from './ToDoList/ToDoList';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'antiquewhite',
        color: '#010101',
      }}
    >
      <ToDoForm />
      <ToDoList />
    </div>
  );
};
