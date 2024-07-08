import React from 'react';
import DeleteBtn from './DeleteBtn';

const RecordsData = ({ setData, data }) => {
  function removeItem(index) {
    let tempArr = data;
    tempArr.splice(index, 1);
    setData([...tempArr]);
  }

  return (
    <>
      <div className="data-container">
        {data.map((records, index) => {
          return (
            <div key={index} className="records-data">
              <span>{records.name}</span>
              <span>{records.email}</span>
              <span>
                <DeleteBtn removeItem={() => removeItem(index)} />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecordsData;
