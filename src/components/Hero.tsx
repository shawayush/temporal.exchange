import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero: NextPage = () => {
  const router = useRouter();
  return (
    <section
      className="bg-black bg-cover bg-center"
      style={{
        backgroundImage: 'url("/waves-backdrop.svg")',
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h1 className="mt-8 text-center font-sans text-3xl font-light leading-tight text-[#3CC0A3] md:text-5xl lg:text-6xl">
            Revolutionary liquidity primitive:
          </h1>
          <h2 className="mt-4 font-sans text-3xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            Market-Determined Yield Curves
          </h2>
          <p
            className="mx-4"
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "Helvetica Neue",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "32px",
              marginTop: "48px",
            }}
          >
            Temporal's real-time continuous yield curves, shaped purely by
            market
            <br /> forces, allow users to customize maturity and lend/borrow at
            fixed-rates.
          </p>
        </div>
        <div />
      </div>

      {/* Section with Try Demo, Litepaper and Docs Buttons */}
      <div className="mt-16 flex flex-col justify-center space-y-4 md:flex-row md:space-x-4">
        <button
          className="mb-4 flex items-center self-center rounded-full border-2 border-[#3CC0A3] pl-16 pr-16 pt-6 pb-6 md:mb-0"
          onClick={() => router.push("https://demo.temporal.exchange/")}
        >
          <span className="text-18 font-sans-serif mr-2 text-[#3CC0A3]">
            Try Demo
          </span>
          <img src="/arrow-right.svg" alt="Arrow" />
        </button>

        <div className="flex justify-center md:justify-start md:pb-2">
          <button
            className="mr-4 flex items-center rounded-full border-2 border-[#FFFFFF] pl-12 pr-12 pt-4 pb-4"
            onClick={() => router.push("/litepaper")}
          >
            <span className="text-12 font-helvetica-neue text-[#FFFFFF]">
              Litepaper
            </span>
          </button>

          <button
            className="flex items-center rounded-full border-2 border-[#FFFFFF] pl-12 pr-12 pt-4 pb-4"
            onClick={() => router.push("/litepaper")}
          >
            <span className="text-12 font-helvetica-neue text-[#FFFFFF]">
              Docs
            </span>
          </button>
        </div>
      </div>

      {/* Features section showing 4 cards aligned right next to each other */}

      <div className="md:justify-left font-helvetica-neue mt-16 text-center text-2xl font-light text-white md:ml-24 md:flex">
        Features
      </div>

      <div className="mx-4 mt-8 grid grid-cols-1 gap-4 sm:mx-24 md:grid-cols-4">
        {/* First Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black p-8">
          <div className="mb-4 text-2xl font-semibold text-[#3CC0A3]">01</div>
          <div className="mb-2 text-lg text-white">
            Market-Determined Yield Curves
          </div>
          <div className="text-lg text-white">
            Interest rates set purely by market forces.
          </div>
        </div>

        {/* Second Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black p-8">
          <div className="mb-4 text-2xl font-semibold text-[#3CC0A3]">02</div>
          <div className="mb-2 text-lg text-white">Custom Maturities</div>
          <div className="text-lg text-white">
            Borrowing and lending durations are no longer limited by the pool.
          </div>
        </div>

        {/* Third Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black p-8">
          <div className="mb-4 text-2xl font-semibold text-[#3CC0A3]">03</div>
          <div className="mb-2 text-lg text-white">
            Flexible Collateral Levels
          </div>
          <div className="text-lg text-white">
            Enabling users to set their collateral level above floor.
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black p-8">
          <div className="mb-4 text-2xl font-semibold text-[#3CC0A3]">04</div>
          <div className="mb-2 text-lg text-white">
            No Liquidity Fragmentation
          </div>
          <div className="text-lg text-white">
            A novel order book designed to cumulate liquidity.
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mx-4 mt-32 h-0.5 bg-[#3CC0A3] bg-opacity-30 md:mx-24"></div>

      {/* Partner Section */}

      <div className="font-helvetica-neue text-4xl md:text-5xl mx-4 md:mx-0 leading-24 mt-24 text-center font-light text-white">
        Incentivized TestNet on <span className="text-[#3CC0A3]">Injective soon</span>
      </div>

      <div className="justify-center flex space-x-2 mt-8">
        <img src="/TemporalLogoWithT.svg" alt="Vector 1" />
        <img src="/xIcon.svg" alt="Vector 2" />
        <img src="/injective-logo.svg" alt="Vector 3" />
      </div>
   
      <div className="mx-4 md:mx-0 font-helvetica-neue text-18 leading-24 mt-6 text-center font-light text-white">
        Join our community, stay updated, and contribute to the future of
        finance!
      </div>

      <div className="mt-16 flex flex-col justify-center items-center md:flex-row space-y-8 md:space-y-0 md:space-x-10">
        <button
          className="flex items-center rounded-full border-2 border-[#008063] bg-[#008063] p-6"
          onClick={() => router.push("/contact")}
        >
          <span className="text-18 font-helvetica-neue mr-2 text-[#000000]">
            Join Discord
          </span>
          <img src="/DiscordIcon.svg" alt="Arrow" />
        </button>

        <button
          className="flex items-center rounded-full border-2 border-[#008063] bg-[#008063] p-6"
          
          onClick={() => router.push("/contact")}
        >
          <span className="text-18 font-helvetica-neue mr-2 text-[#000000]">
            Join Telegram
          </span>
          <img src="/TelegramIcon.svg" alt="Arrow" />
        </button>
      </div>

      <div className="font-helvetica-neue text-18 leading-24 mt-12 text-center font-light text-white">
        Follow us on
      </div>

      <div className="mt-12 flex justify-center space-x-4">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/company/temporal-exchange/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063]"
          style={{ padding: "25px" }}
        >
          <img src="/LinkedinIcon.svg" alt="LinkedIn Icon" />
        </a>

        {/* Twitter Button */}
        <a
          href="https://twitter.com/temporalfinance"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063]"
          style={{ padding: "25px" }}
        >
          <img src="/TwitterIcon.svg" alt="Twitter Icon" />
        </a>

        {/* Medium Button */}
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063]"
          style={{ padding: "25px" }}
        >
          <img src="/MediumIcon.svg" alt="Medium Icon" />
        </a>
      </div>

      <div className="mx-4 mt-32 h-0.5 bg-[#3CC0A3] bg-opacity-30 md:mx-24"></div>
      <div
        className="font-helvetica-neue mt-32 text-center font-light text-white"
        style={{ fontSize: "48px", lineHeight: "48px" }}
      >
        Disclaimer
      </div>

      <div
        className="font-helvetica-neue mt-12 mb-12 justify-center px-24 text-center font-light text-white sm:mx-auto"
        style={{ fontSize: "18px", lineHeight: "24px" }}
      >
        This is a testnet website for Temporal. All interactions are simulations
        and do not involve real assets. Ensure to exercise caution and conduct
        thorough research before using any new platform.
      </div>
    </section>
  );
};

export default Hero;
