import React, { useRef, useState } from "react";
import "@google/model-viewer";

const Card = ({ item }) => {
  const [value, setvalue] = useState(0);
  const modelViewRef = useRef()

  function handleArBtn(){
    if(modelViewRef.current){
       modelViewRef.current.activateAR()
    }
  }

  return (
    <>
      <div className="card bg-white shadow-md ">
        <div className="card-top flex justify-center ">
          <model-viewer
            ref={modelViewRef}
            ar
            camera-controls
            src={`/${item.location}.glb`}
          ></model-viewer>
        </div>
        <div className="card-bottom md:px-4 flex flex-col gap-3">
          <div className="card-head font-semibold text-lg flex justify-between">
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
          <div className="card-body md:text-base text-xs ">{item.desc}</div>
          <div className="card-foot flex justify-between items-center">
            <div className="cart-btn shadow-sm py-1 px-5 border-2 border-orange-400 rounded-2xl flex">
              {value > 0 ? (
                <>
                  <button className="px-2 py-1 hover:bg-gray-200 rounded-md " onClick={() => setvalue((prev) => prev - 1)}>
                    -
                  </button>
                  <div className="px-2 py-1">{value}</div>
                  <button className="px-2 py-1 hover:bg-gray-200 rounded-md " onClick={() => setvalue((prev) => prev + 1)}>
                    +
                  </button>
                </>
              ) : (
                <button className="px-2 py-1" onClick={() => setvalue(1)}>+ Add to cart</button>
              )}
            </div>
            <button onClick={()=>handleArBtn()} className="ar-btn bg-orange-400 shadow-sm hover:bg-orange-500 p-2 rounded-xl relative flex justify-center items-center">
              <div className="scan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-scan"
                >
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                </svg>
              </div>
              <div className="box absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-box"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
