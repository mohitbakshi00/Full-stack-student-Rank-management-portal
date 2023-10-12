import React, { useState,useEffect } from 'react';
import { Button } from 'reactstrap';

import base_path from '../api/bootapi';

import axios from 'axios';

const RankChecker = () => {

  useEffect(() => {
    document.title = "Rank list || Code Master";
  }, []);
  const [name, setName] = useState('');
  const [rank, setRank] = useState(null);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const checkRank = () => {
    axios.get(`${base_path}/get-rank/${name}`)
      .then((response) => {
        setRank(response.data);
        console.log(name);
      },
      (error => {
        console.error(error);
        setRank(-1);
      })
      )
  };

  return (
    <div className="flex flex-col mx-auto">
      <h2 className="mx-auto p-3">Check Your Rank</h2>
      <div className='flex flex-col bg-gray-100 border-1 p-3 border-black w-[300px] mx-auto '>
        <label className="mx-auto p-1 font-bold">Name: </label>
        <input type="text" value={name} placeholder='Enter name (Case Sensitive)' className="mx-auto border-1 p-1 border-black w-[210px]" onChange={handleInputChange} />
        <Button type ="submit" onClick={checkRank}  color="success"  className="mx-auto mt-2">
              Show Rank
        </Button>      </div>
      {rank != null && (
        <div className="flex justify-center mx-auto text-[20px] p-2 my-3 w-[200px] border-1 text-white border-black bg-green-600 ">
          { rank!=-1 ?  (
            <div className="">Your rank is {rank}</div>
          ) :(<div>Student Not found</div>)
          }
        </div>
      )}
    </div>
  );
};

export default RankChecker;