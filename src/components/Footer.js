const Footer = () => {
  return (
    <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
        <img
          className="relative w-[174px] h-[33px] overflow-hidden shrink-0"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch relative leading-[27px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img
          className="relative w-[130px] h-[30px]"
          alt=""
          src="/social-icons.svg"
        />
      </div>
      <div className="relative box-border w-px h-[157.87px] border-r-[1px] border-solid border-gray-400 md:hidden" />
      <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
            About Us
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
            Company
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
            News
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
            Careers
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
            How we work
          </div>
        </div>
        <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
            Account
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
            Support
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
            Support Center
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
            FAQ
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
            Accessibility
          </div>
        </div>
        <div className="relative w-[197.33px] h-[159.76px]">
          <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
            Covid Advisory
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
            More
          </div>
          <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
            Airline Fees
          </div>
          <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
            Tips
          </div>
          <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
            Quarantine Rules
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
