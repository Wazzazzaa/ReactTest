import React from 'react';
import CatRow from './catRow';
import PropTypes from 'prop-types'

const CatTable = ({media}) => {
  return(
    <table>
      <tbody>
      {
        media.map((file,index) => <CatRow file={file} key={index}/>)
      }
      }
      </tbody>
    </table>
  );
};
CatTable.propTypes={
  media: PropTypes.array,
};
export default CatTable;