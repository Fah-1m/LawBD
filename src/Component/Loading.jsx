// Loading.jsx
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#36d7b7" loading={loading} size={60} />
    </div>
  );
};

export default Loading;
