import React from "react";

const Table = ({ columns, children }) => (
  <div
    className={`w-[90%] mx-auto my-6 shadow-md font-medium text-[14px] text-primaryBlack`}
  >
    <div className="w-full flex items-center px-2 py-3 bg-primary overflow-hidden ">
      {columns.map((item, index) => (
        <>
          <div
            className={`items-center justify-center lg:flex hidden  ${item.basis} text-sm font-semibold text-white`}
            key={item.name}
          >
            {item.name}
          </div>
          <div
            className={`items-center justify-center lg:hidden flex  basis-full text-sm font-semibold text-white  ${
              item.hidden !== undefined && "hidden"
            }`}
            key={index}
          >
            {item.inSm === undefined ? <>{item.name}</> : <>{item.inSm}</>}
          </div>
        </>
      ))}
    </div>
    <div className="bg-white h-[430px]">
      {!children ? (
        <div className="w-full h-full flex-center">
          <span class="loader"></span>
        </div>
      ) : (
        children
      )}
    </div>
  </div>
);

export default Table;
