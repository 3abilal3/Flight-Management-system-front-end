import { useMemo } from "react";

const HotelCardContainer = ({
  hotelImageUrl,
  hotelName,
  hotelPrice,
  hotelReviews,
  hotelRating,
  hotelLocation,
  hotelDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const stayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 text-left text-base text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src={hotelImageUrl}
        />
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[11px]"
          style={stayDetailsStyle}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {hotelName}
            </div>
            <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
              {hotelPrice}
            </b>
            <div className="self-stretch relative text-lg tracking-[0.04em]">
              {hotelReviews}
            </div>
          </div>
          <img
            className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
            alt=""
            src="/video1.svg"
          />
        </div>
        <div className="self-stretch relative h-[19px] text-cornflowerblue-200">
          <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.37px]">
            {hotelRating}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px] text-darkslategray-300">
            <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
              {hotelLocation}
            </div>
            <img
              className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={hotelDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
            More details
          </div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
