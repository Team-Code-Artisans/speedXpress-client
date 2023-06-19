import { useContext, useState } from "react";
import { getAUser, saveUser } from "../../../API Operations/manageUsers";
import profile from "../../../Assets/profile.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BigSpinner from "../../../components/Spinners/BigSpinner";
import { toast } from "react-hot-toast";
import { divisionsData } from "../../../data/Divisions";
import { districtsData } from "../../../data/Districts";
import InputDivision from "../../../components/InputDivision";
import InputDistrict from "../../../components/InputDistrict";

const MerchantProfile = () => {

  const { user } = useContext(AuthContext)

  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getAUser(user?.email),
  });

  console.log(userData)

  const divisions = divisionsData;
  let [division, setDivision] = useState(userData.division);
  const districts = districtsData;
  let [district, setDistrict] = useState(userData.district);

  const { handleSubmit, register, formState: { errors } } = useForm()

  const handleUpdate = (data) => {
    saveUser(data)
      .then(result => {
        refetch()
        toast.success("Profile Updated Successfully")
        console.log(result)
      })
      .catch(err => console.log(err))
  }

  if (isLoading) {
    return <BigSpinner />
  }

  return (
    <div className="w-3/4 mx-auto">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 gap-6 sm:items-center">
        <div className="rounded-lg bg-white py-4 px-5 lg:py-11 lg:px-20 shadow-lg ml-3">
          <form onSubmit={handleSubmit(handleUpdate)} action="" className="space-y-4">
            <div>
              <label
                htmlFor="userName"
                className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
              >
                <input
                  {...register("ownerName", {
                    required: "required",
                  })}
                  defaultValue={userData.ownerName}
                  type="text"
                  id="userName"
                  placeholder="User Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-2 peer-focus:text-sm">
                  Your Name
                </span>
              </label>
              {errors.ownerName && <span className='text-red-500'>{errors.ownerName.message}</span>}
            </div>
            <div>
              <label
                htmlFor="number"
                className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 focus-within:border-orange-400"
              >
                <input
                  {...register("phoneNumber", {
                    required: "required",
                    pattern: {
                      value: /^-?\d+\.?\d*$/,
                      message: "invalid phone number"
                    }
                  })}
                  defaultValue={userData.phoneNumber}
                  id="number"
                  placeholder="Number"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-2 peer-focus:text-sm">
                  Phone Number
                </span>
              </label>
              {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
            </div>

            <div className='flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8'>
              <InputDivision division={division} setDivision={setDivision} divisions={divisions} />
              <InputDistrict district={district} setDistrict={setDistrict} districts={districts} />
            </div>

            <div>
              <label className="sr-only" htmlFor="address">
                Your Address
              </label>

              <input
                {...register("shopAddress", {
                  required: "required",
                })}
                defaultValue={userData.shopAddress}
                className="w-full rounded-lg border border-gray-300 focus:outline-orange-500 p-3 text-base mt-3"
                placeholder="Your Address"
                rows="8"
                id="address"
              ></input>
              {errors.shopAddress && <span className='text-red-500'>{errors.shopAddress.message}</span>}
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
