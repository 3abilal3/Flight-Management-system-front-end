import { useMemo } from "react";

const DestinationContainer = ({
  parisImage,
  paris,
  prop,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const detailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
      <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden shrink-0">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={parisImage}
        />
        <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
          <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
            {paris}
          </b>
          <div className="relative w-[90.92px] h-[59px]" style={detailsStyle}>
            <div
              className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]"
              style={divStyle}
            >
              {prop}
            </div>
            <div
              className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]"
              style={fromStyle}
            >
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
