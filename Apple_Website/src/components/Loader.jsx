import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="loader"></div>
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
