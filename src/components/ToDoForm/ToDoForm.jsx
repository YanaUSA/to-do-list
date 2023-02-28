import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ToDoForm.styled';

export const ToDoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todo, setToDo] = useState();

  const addToDo = obj => {
    const newToDo = {
      id: nanoid(),
      status: null,
      ...obj,
    };
    setToDo(newToDo);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        return;
    }
  };

  console.log('addToDo', todo);

  const handleSubmit = evt => {
    evt.preventDefault();
    addToDo({ title, description });

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Title:
        <FormInput
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Enter title"
        />
      </FormLabel>
      <FormLabel>
        Description:
        <FormInput
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </FormLabel>
      <FormButton type="submit">Create</FormButton>
    </Form>
  );
};
