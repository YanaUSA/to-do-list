import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ToDo } from '../ToDo/ToDo';

export const ToDosItem = ({ id, title, description, status }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    if (showModal) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleChange = e => {
    console.log(e.target.checked);
  };

  return (
    <>
      <tr onClick={toggleModal}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          {status}
          <input type="checkbox" checked={status} onChange={handleChange} />
        </td>
      </tr>
      {showModal && (
        <Modal onClick={toggleModal}>
          <ToDo
            id={id}
            title={title}
            description={description}
            status={status}
            onClick={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

ToDosItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
