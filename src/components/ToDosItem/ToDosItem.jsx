import PropTypes from 'prop-types';
import { useState } from 'react';

export const ToDosItem = ({
  id,
  title,
  description,
  status,
  // onToggleStatus,
}) => {
  const [checked, setChecked] = useState(false);
  // console.log('todos', todos);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      {/* <tr key={id}> */}
      <td key={id}>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        {/* {status} */}
        <input type="checkbox" checked={status} onChange={handleChange} />
      </td>
      {/* </tr> */}
    </>
  );
};

ToDosItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
