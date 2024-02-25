const PopupWrapper = ({ children }) => {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:w-[450px] md:w-[450px] sm:w-[400px] bg-white sm:p-6 rounded-[8px] w-[85%] py-6 px-2 shadow md:p-4 lg:p-4 z-[30]  outline-none">
        {children}
      </div>
      <div className="fixed top-0 left-0 z-20 bg-black  opacity-20 w-full h-full"></div>
    </>
  );
};

export default PopupWrapper;
