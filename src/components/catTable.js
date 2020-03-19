import React,{useEffect, useState} from 'react';
import CatRow from './catRow';
import PropTypes from 'prop-types'

const CatTable = () => {
  const [picArray, setPicArray] = useState([]);
  const loadMedia = async () => {
    const response = await fetch('test.json');
    const json = await response.json();
    console.log(json);
    setPicArray(json);
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <table>
      <tbody>
      {
        picArray.map((file, index) => <CatRow file={file} key={index}/>)
      }
      </tbody>
    </table>
  );
};
CatTable.propTypes={
  media: PropTypes.array,
};
export default CatTable;