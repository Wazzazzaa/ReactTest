import React from 'react';
import PropTypes from 'prop-types';

const CatRow=({file})=>{
  return(
        <tr>
          <td>
            <img src={file.thumbnails.w160} alt={file.title} />
          </td>
          <td>
            <h3>{file.title}</h3>
            <p>{file.description}</p>
          </td>
          <td>
            <a href={file.filename}>View</a>
          </td>
        </tr>
  );
};
CatRow.propTypes={
  pic:PropTypes.array,
};
export default CatRow;