import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

const useQuery = (location) => {
  return parse(location.search);
};

const Report = (props) => {
  //   const { year } = useParams();
  const { country, language } = useQuery(useLocation());

  return (
    <>
      <h3>Report Component</h3>
      <p>
        Country: {country}; Language: {language}
      </p>
    </>
  );
};

export default Report;
