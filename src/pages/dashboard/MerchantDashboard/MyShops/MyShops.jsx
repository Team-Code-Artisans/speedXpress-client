import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import {
  deleteShop,
  getShop,
} from "../../../../API Operations/manageMerchantShop";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import CreateShopForm from "./CreateShopForm";
import ShopEditModal from "./ShopEditModal";

const MyShops = () => {
  const { user } = useContext(AuthContext);
  const [shopForm, setShopForm] = useState(false);
  const createShop = () => {
    setShopForm(!shopForm);
  };

  const {
    data: shops = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-parcels"],
    queryFn: () => getShop(user?.email),
  });
  console.log(shops.data);

  const handleShopDelete = (shopId) => {
    deleteShop(shopId)
      .then((res) => {
        //console.log(res);
        if (res.deletedCount === 1) {
          toast.success("Shop deleted successful");
        } else {
          toast.error("delete shop failed");
        }
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err.message);
      });
  };
  if (isLoading) {
    <BigSpinner />;
  }

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
                <div
                  key={shop._id}
                  className="xl:w-1/4 md:w-1/2 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                  <div className="flex justify-between">
                    <span className="inline-block rounded bg-orange-500 p-2 text-white">
                      <BsShop className="text-2xl" />
                    </span>
                    <span className="inline-block rounded bg-gray-400 p-2 text-white">
                      <button onClick={() => handleShopDelete(shop?._id)}>
                        <AiOutlineDelete className="text-2xl" />
                      </button>
                    </span>
                  </div>

                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Shop Name: {shop.shopName}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Owner: {shop.ownerName}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Email: {shop.shopEmail}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Phone: {shop.phoneNumber}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Shop Address: {shop.shopAddress}
                  </p>
                  <ShopEditModal shopsData={shop} />
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
      {shopForm ? <CreateShopForm refetch={refetch} /> : <></>}
    </div>
  );
};

export default MyShops;
