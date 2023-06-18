import { useContext, useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { getShop } from "../../../../API Operations/manageMerchantShop";
import { AuthContext } from "../../../../contexts/AuthProvider";
import CreateShop from "./CreateShop";

const MyShops = () => {
  const { user } = useContext(AuthContext);
  const [shopForm, setShopForm] = useState(false);
  const [shops, setShops] = useState([]);
  const createShop = () => {
    setShopForm(!shopForm);
  };
  console.log(shops);
  useEffect(() => {
    getShop(user?.email).then((data) => {
      setShops(data);
    });
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-orange-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              have not heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {shops.data?.map((shop) => (
              <>
                <div key={shop._id} className="xl:w-1/4 md:w-1/2 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                  <span className="inline-block rounded bg-orange-500 p-2 text-white">
                    <BsShop className="text-2xl" />
                  </span>

                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Shop Name: {shop.shopName}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Owner: {shop.fullName}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Email: {shop.shopEmail}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Phone: {shop.pickupPhone}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Address: {shop.shopAddress}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Pickup Area: {shop.pickupArea}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Pickup Address: {shop.pickupAddress}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Product Type: {shop.productType}
                  </p>

                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </>
            ))}

            <div className="xl:w-1/5 md:w-1/2 h-72 my-auto rounded-lg border border-gray-100 bg-orange-50 shadow-sm">
              <button
                onClick={createShop}
                className="xl:w-44 xl:h-44 bg-orange-200 rounded-full flex justify-center items-center mx-auto mt-[54px] hover:shadow-lg"
              >
                <AiOutlinePlusCircle className="text-7xl text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {shopForm ? <CreateShop /> : <></>}
    </div>
  );
};

export default MyShops;
