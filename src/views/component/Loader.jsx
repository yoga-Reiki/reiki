import React from "react";
import { ClipLoader, BounceLoader, GridLoader, PulseLoader } from 'react-spinners';

function Loader() {
  return (
    <div>
      <ClipLoader
        size={80}
        color="#4fa94d"
        loading={true}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default Loader;