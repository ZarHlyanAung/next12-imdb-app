import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result, key) => (
        <h2 key={key}>{result.title}</h2>
      ))}
    </div>
  );
};

export default Results;
