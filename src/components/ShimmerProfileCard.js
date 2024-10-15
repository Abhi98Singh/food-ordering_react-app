const ShimmerProfileCard = () => {
  return (
    <>
      <div className="cardContainer h-[310px] flex justify-center items-center flex-col mt-5 font-bold">
        <div className="w-[8rem]  text-center h-4 bg-slate-300"></div>
        <div className=" profileCard w-[18rem] h-[284px] mt-2 pb-2 bg-slate-300  rounded-lg ">
          <div className="cardImgg w-[99%] h-[250px] bg-slate-200 "></div>

          <h2 className="card-title profileDetails pt-3 text-center h-5 bg-slate-200"></h2>
          <h4 className="card-text profileDetails  text-center h-5 bg-slate-200"></h4>
        </div>
      </div>
    </>
  );
};

export default ShimmerProfileCard;
