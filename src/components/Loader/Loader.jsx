import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function Loader() {
  return (
    <div className="loader-container">
    <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
    </div>
  );
}
