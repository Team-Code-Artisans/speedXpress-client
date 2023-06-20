import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { editShop } from "../../../../API Operations/manageMerchantShop";

export default function ShopEditModal({ shopsData }) {
  let [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleShopUpdate = (data) => {
    console.log(data);
    editShop(shopsData._id, data)
      .then((res) => {
        console.log(res);
        toast.success("Shop updated successful");
        reset();
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500"
        >
          Edit Shop Info
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Your Shop Info
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleShopUpdate)}>
                      <div>
                        <label
                          htmlFor="userName"
                          className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                        >
                          <input
                            {...register("shopName")}
                            defaultValue={shopsData.shopName}
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
                      <div>
                        <label
                          htmlFor="userName"
                          className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                        >
                          <input
                            {...register("ownerName")}
                            defaultValue={shopsData.ownerName}
                            type="text"
                            id="shop-owner"
                            placeholder="Shop Owner"
                            className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />

                          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Shop Owner
                          </span>
                        </label>
                      </div>
                      <div>
                        <label
                          htmlFor="userName"
                          className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
                        >
                          <input
                            {...register("phoneNumber")}
                            defaultValue={shopsData.phoneNumber}
                            type="number"
                            id="shop-number"
                            placeholder="Shop Number"
                            className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />

                          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                            Shop Number
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
                            defaultValue={shopsData.shopAddress}
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
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
