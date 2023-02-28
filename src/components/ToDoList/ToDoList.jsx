import { ToDoListUl, ToDoListLi } from './ToDoList.styled';

export const ToDoList = ({ todos }) => {
  return (
    <>
      <ToDoListUl>
        {todos.map(({ id, title, description, status }) => (
          <ToDoListLi
            key={id}
            id={id}
            title={title}
            description={description}
            status={status}
          />
        ))}
      </ToDoListUl>
    </>
  );
};
