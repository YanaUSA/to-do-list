import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedTodos } from 'redux/to-do-selectors';
import { updateStatus } from 'redux/to-do-slice';

export const ToDo = ({ id, title, description, status, onClick }) => {
  const dispatch = useDispatch();
  const [statCheckbox, setStatCheckbox] = useState(status);
  const todos = useSelector(selectedTodos);

  const handleClick = () => {
    setStatCheckbox(prev => !prev);
  };

  const closeAndSave = () => {
    const checkedToDo = todos.map(el => {
      if (el.id === id) {
        return {
          ...el,
          status: statCheckbox,
        };
      }
      return el;
    });
    dispatch(updateStatus(checkedToDo));
    onClick();
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <span>Description:</span>
        <p>{description}</p>
        <span>
          Status:
          <input
            type="checkbox"
            checked={statCheckbox}
            onChange={handleClick}
          />
        </span>
        <button type="button" onClick={closeAndSave}>
          Close
        </button>
      </div>
    </>
  );
};

ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
