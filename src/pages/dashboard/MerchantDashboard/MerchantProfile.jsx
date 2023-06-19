import { useContext } from "react";
import { getUser } from "../../../API Operations/manageUsers";
import profile from "../../../Assets/profile.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MerchantProfile = () => {
  const { user } = useContext(AuthContext)
  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUser(user?.email),
  });

  return (
    <div className="w-3/4 mx-auto">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 gap-6 sm:items-center">
        <div className="rounded-lg bg-white py-4 px-5 lg:py-11 lg:px-20 shadow-lg ml-3">
          <form action="" className="space-y-4">
            <label
              htmlFor="userName"
              className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
            >
              <input
                defaultValue={userData.name}
                type="text"
                id="userName"
                placeholder="User Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Your Name
              </span>
            </label>
            <div>
            </div>
            <div>
              <label
                htmlFor="number"
                className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
              >
                <input
                  defaultValue={userData.number}
                  type="number"
                  id="number"
                  placeholder="Number"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Phone Number
                </span>
              </label>
            </div>

            <div>
              <label className="sr-only" htmlFor="address">
                Your Address
              </label>

              <input
                defaultValue={userData.address}
                className="w-full rounded-lg border border-gray-300 p-3 text-base mt-3"
                placeholder="Your Address"
                rows="8"
                id="address"
              ></input>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-orange-500 px-12 py-3 font-medium text-white sm:w-auto"
              >
                Save
              </button>
              <Link to={'/login'} className="underline">Forgot Password</Link>
            </div>
          </form>
        </div>

        <img
          alt="Violin"
          src={profile}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default MerchantProfile;
