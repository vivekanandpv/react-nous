import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Report = (props) => {
  const { year } = useParams();

  useEffect(() => {
    if (!+year) {
      alert('invalid year!');
    }
  }, []);

  return (
    <>
      <h3>Report Component</h3>
    </>
  );
};

export default Report;
