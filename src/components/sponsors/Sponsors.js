// import sabu from "../../assets/sponsors/sabu.jpg";
// import cookery from "../../assets/sponsors/cookery.jpg";
// import madhuBuilders from "../../assets/sponsors/madhuBuilders.jpg";
// import HAC from "../../assets/sponsors/HAC.jpg";
import LegendsImg from "../../assets/sponsors/legends.jpeg";

import { Link } from "react-router-dom";

export default function Sponsors() {
  return (
    <div className="bg-black-900 py-8 sm:py-8 mb-6">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <h2 className="text-center text-4xl tracking-wider font-semibold AstranovaHeroFont leading-8 text-white">
          <span className="text-5xl text-purple-500">G</span>old{" "}
          <span className="text-5xl text-purple-500">P</span>rize{" "}
          <span className="text-5xl text-purple-500">S</span>ponser
        </h2>
        <div className="mx-auto mt-16 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <Link to={"https://www.legendsindia.co.in"}>
            <img
              className="max-h-64  w-full object-contain"
              src={LegendsImg}
              alt="Legends Company Logo"
            />
          </Link>
        </div>
        {/* <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-32  w-full object-contain lg:col-span-1"
            src={sabu}
            alt="Sabu-Quality with purity"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full  object-contain lg:col-span-1"
            src={cookery}
            alt="Cookery"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full  object-contain lg:col-span-1"
            src={madhuBuilders}
            alt="Madhu Builders"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-32 w-full  object-contain lg:col-span-1"
            src={HAC}
            alt="Hindustan Aluminium and Glasses"
            width={158}
            height={48}
          />
        </div> */}
      </div>
    </div>
  );
}
