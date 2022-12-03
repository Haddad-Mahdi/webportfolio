import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`pt-0 flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pr-0 pt-0`}>
        <div className="flex flex-row justify-between items-center w-full py-10 pr-0 pt-0">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] pt-0 text-[52px] text-white ss:leading-[70.8px] leading-[75px]">
            Hello! <br className="sm:block hidden" />
            <span className="white">Welcome to my website</span>
          </h1>
        </div>
        <h1 className="text-gradient font-poppins font-semibold ss:text-[45px] text-[52px] pb-0 text-white ss:leading-[100.8px] w-full">
          Quick presentation
        </h1>
        <p className={`${styles.paragraph} min-w-[700px] mt-0 pt-0`}>
          Hello, my name is Mahdi HADDAD, I'm 24 years old and I'm an electrical engineer from Tunisia. I'm passionate about new technologies like artificial intelligence, internet of things and robotics... also I have interests in entrepreneurship that makes me work in developing two future startups in smart mobility and fintech.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[85%] h-[90%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
