import type { NextPage } from "next";

const Features: NextPage = () => {
    return (
        <section className="dark:text-gray-100">
            {/* Disclaimer Section */}
            <div
                className=" mt-24 text-center font-light text-white"
                style={{ fontSize: "48px", lineHeight: "48px" }}
            >
                Disclaimer
            </div>

            <div
                className="  mt-12 mb-24 justify-center text-center font-light text-white  max-w-[725px] mx-auto"
                style={{ fontSize: "18px", lineHeight: "24px" }}
            >
                This is a testnet website for Temporal. All interactions are simulations
                and do not involve real assets. Ensure to exercise caution and conduct
                thorough research before using any new platform.
            </div>
            {/* Disclaimer Section */}

        </section>
    )
}

export default Features;