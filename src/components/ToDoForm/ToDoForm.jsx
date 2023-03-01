import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormLabel, FormInput, FormButton } from './ToDoForm.styled';
import { addedToDo } from 'redux/to-do-slice';

export const ToDoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const addToDo = obj => {
    const newToDo = {
      id: nanoid(5),
      ...obj,
      status: false,
    };

    dispatch(addedToDo(newToDo));
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

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!title) {
      setIsInputEmpty(true);
      return;
    }
    setIsInputEmpty(false);

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
        {isInputEmpty ? (
          <FormInput
            style={{ borderColor: 'red' }}
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        ) : (
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        )}
        {isInputEmpty && <p style={{ color: 'red' }}>This field is empty</p>}
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
