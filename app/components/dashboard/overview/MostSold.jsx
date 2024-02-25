const MostSold = () => {
  return (
    <div className="bg-white dark:bg-[#2E2E48] rounded-md shadow-sm lg:col-span-1 pt-3 pb-8 px-6 h-[330px] w-full">
      <h5 className="font-[600] dark:text-white text-[18px]">
        Most Sold Items
      </h5>
      <div className="mt-3  dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Jeans</div>
          <div>70</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-1 overflow-hidden">
          <div className="w-[70%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4  dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Shirts</div>
          <div>40</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-1 overflow-hidden">
          <div className="w-[40%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4  dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Beans</div>
          <div>60</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-1 overflow-hidden">
          <div className="w-[60%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4  dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Caps</div>
          <div>80</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-1 overflow-hidden">
          <div className="w-[80%] bg-primary h-full rounded-xl" />
        </div>
      </div>
      <div className="mt-4  dark:text-white text-[16px] w-full">
        <div className="flex justify-between items-center ">
          <div>Others</div>
          <div>20</div>
        </div>
        <div className="w-full h-3 rounded-xl bg-[#f3f3f3] mt-1 overflow-hidden">
          <div className="w-[20%] bg-primary h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default MostSold;
