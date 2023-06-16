import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createShop } from "../../../../API Operations/manageMerchantShop";
import SmallSpinner from "../../../../components/smallSpinner/SmallSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";

const CreateShop = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleCreateShop = (data) => {

    const {
      fullName,
      shopName,
      shopEmail,
      shopAddress,
      pickupAddress,
      pickupArea,
      pickupPhone,
      productType,
    } = data;

    const shopData = {
      fullName,
      shopName,
      shopEmail,
      shopAddress,
      pickupAddress,
      pickupArea,
      pickupPhone,
      productType,
    };

    // crete parcel here
    createShop(shopData)
      .then((data) => {
        console.log(data);
        if (data.data.acknowledged) {
          setLoading(false);
          reset();
          toast.success(data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-orange-500">
                  0151 475 4450
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                onSubmit={handleSubmit(handleCreateShop)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("fullName")}
                        type="text"
                        id="full-name"
                        placeholder="Full Name"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Full Name
                      </span>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("shopName")}
                        type="text"
                        id="shop-name"
                        placeholder="Shop Name"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Shop Name
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("shopEmail")}
                        value={user.email}
                        readOnly
                        type="email"
                        id="shop-email"
                        placeholder="Shop Email"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Shop Email
                      </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("shopAddress")}
                        type="text"
                        id="shop-address"
                        placeholder="Shop Address"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Shop Address
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("pickupAddress")}
                        type="text"
                        id="pickup-address"
                        placeholder="Pickup Address"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Pickup Address
                      </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("pickupArea")}
                        type="text"
                        id="pickup-area"
                        placeholder="Pickup Area"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Pickup Area
                      </span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("pickupPhone")}
                        type="number"
                        id="pickup-phone"
                        placeholder="Pickup Phone"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Pickup Phone
                      </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="userName"
                      className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                    >
                      <input
                        {...register("productType")}
                        type="text"
                        id="product-type"
                        placeholder="Product Type"
                        className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Product Type
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-orange-600 px-8 py-3 mt-5 font-medium text-white sm:w-auto"
                  >
                    {loading ? <SmallSpinner /> : "Create Shop"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateShop;
