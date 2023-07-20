const FlightMainContainer = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className="flex-1 rounded-lg flex flex-col p-5 items-center justify-center gap-[21px] text-left text-5xl text-cornflowerblue-300 font-components-button-large border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="relative w-[44.73px] h-7">
          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
            {flightOrigin}
          </b>
        </div>
        <img
          className="relative w-[117.35px] h-6"
          alt=""
          src={flightDestination}
        />
        <div className="relative w-[51.27px] h-7 text-right">
          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
            {flightOriginCode}
          </b>
        </div>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
