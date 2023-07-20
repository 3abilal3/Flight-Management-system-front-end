import { useCallback } from "react";
import HotelCardContainer from "./HotelCardContainer";

const PopularStaysForm = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative h-[35px]">
          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[1105.34px] sm:text-3xl">
            Popular Stays
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc@2x.png"
          hotelName="Entire bungalow"
          hotelPrice="Matterhorn Suites"
          hotelReviews="$575/night"
          hotelRating="(60 reviews)"
          hotelLocation="4.9"
          hotelDimensions="/vector3.svg"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashtsn8bpopveo@2x.png"
          hotelName="2-Story beachfront suite"
          hotelPrice="Discovery Shores"
          hotelReviews="$360/night"
          hotelRating="(116 reviews)"
          hotelLocation="4.8"
          hotelDimensions="/vector4.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc1@2x.png"
          hotelName="Single deluxe hut"
          hotelPrice="Arctic Hut "
          hotelReviews="$420/night"
          hotelRating="(78 reviews)"
          hotelLocation="4.7"
          hotelDimensions="/vector5.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashyqrybvxug5q@2x.png"
          hotelName="Deluxe King Room"
          hotelPrice="Lake Louise Inn"
          hotelReviews="$244/night"
          hotelRating="(63 reviews)"
          hotelLocation="4.6"
          hotelDimensions="/vector6.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[140.66px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </div>
  );
};

export default PopularStaysForm;
