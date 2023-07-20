import { useCallback } from "react";
import FlightMainContainer from "./FlightMainContainer";

const RecentSearchesContainer = () => {
  const onHotelClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-lg text-darkslategray-300 font-components-button-large md:block">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <b className="self-stretch relative tracking-[0.04em] uppercase">
          Recent Searches
        </b>
        <div className="self-stretch flex flex-col items-start justify-center gap-[36px] text-5xl text-cornflowerblue-300 md:flex-col">
          <div className="self-stretch flex flex-row items-center justify-center gap-[15px] md:flex-col">
            <FlightMainContainer
              flightOrigin="SIN"
              flightDestination="/duration.svg"
              flightOriginCode="LAX"
              departureDate="Depart on: "
              returnDate="7 Sep 2021"
            />
            <FlightMainContainer
              flightOrigin="MY"
              flightDestination="/duration1.svg"
              flightOriginCode="DUB"
              departureDate="Depart on:"
              returnDate=" 9 Sep 2021"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-lg text-lightgray md:w-full">
            <div className="self-stretch relative tracking-[0.04em] uppercase">
              Prepare for your trip
            </div>
            <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
                onClick={onHotelClick}
              >
                <img
                  className="relative w-[65.39px] h-[65.39px]"
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-left">
                  Hotel
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <div className="relative w-[65.39px] h-[65.39px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-[65.39px] h-[65.39px]" />
                  <img
                    className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/ticket.svg"
                  />
                </div>
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                  Attractions
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <img
                  className="relative w-[65.39px] h-[65.39px]"
                  alt=""
                  src="/eats-icon.svg"
                />
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                  Eats
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <div className="relative w-[65.39px] h-[65.39px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-[65.39px] h-[65.39px]" />
                  <img
                    className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                  Commute
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <div className="relative w-[70px] h-[65.39px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-[65.39px]" />
                  <img
                    className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[32.12px]">
                  Taxi
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                <div className="relative w-[65.39px] h-[65.39px]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-[65.39px] h-[65.39px]" />
                  <img
                    className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                  Movies
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
