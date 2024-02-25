const OrderComplete = () => {
  return (
    <div className="min-h-[500px] w-full flex-center">
      <Success />
    </div>
  );
};

const Success = () => {
  return (
    <div>
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderComplete;
