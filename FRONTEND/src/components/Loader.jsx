import { useLayoutEffect } from "react";
import "../styles/loader.css";
const Loader = () => {
  // useLayoutEffect(() => {
  //   const loader = document.getElementById("loader");
  //   setTimeout(() => {
  //     loader.classList.add("loaded");
  //     setTimeout(() => {
  //       document.body.removeChild(loader);
  //     }, 300);
  //   }, 2000);
  // }, []);

  return (
    <>
      <div id="loader" class="loading">
        <span class="loader"></span>
      </div>
    </>
  );
};

export default Loader;
