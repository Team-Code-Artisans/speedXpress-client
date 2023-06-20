import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createParcel } from "../../../../API Operations/manageParcels";
import { saveCustomer } from "../../../../API Operations/manageUsers";
import SmallSpinner from "../../../../components/smallSpinner/SmallSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { weights } from "../../../../data/Weight";
import InputDivision from "../../../../components/InputDivision";
import InputDistrict from "../../../../components/InputDistrict";
import { divisionsData } from "../../../../data/Divisions";
import { districtsData } from "../../../../data/Districts";

const RegularCreateParcel = () => {


  const divisions = divisionsData;
  let [division, setDivision] = useState(divisions[5]);
  const districts = districtsData;
  const [district, setDistrict] = useState(districts[46])

  const [dropdown2, setDropdown2] = useState(false);
  const [loading, setLoading] = useState(false)
  const [weight, setWeight] = useState("0.5KG - 1KG");
  const [weightCharge, setWeightCharge] = useState(10);
  const [deliveryFee, setDeliveryFee] = useState(60);
  const [weightTotalCharge, setWeightTotalCharge] = useState(0);

  const [urgent, setUrgent] = useState(0)

  const weightData = weights;
  const { user } = useContext(AuthContext)

  const handleWeight = (e) => {
    setWeight(e.weight);
    setWeightCharge(e.price)
    setDropdown2(false);
  };


  // here we handled the amount and calculated the amount charge according to parcel quantity
  const handleQuantity = (value) => {
    let weightchargeAmount = (weightCharge * value);
    setWeightTotalCharge(weightchargeAmount);

  }
  useEffect(() => {

  }, [weightTotalCharge])



  const {
    register,
    reset,
    handleSubmit
  } = useForm();


  const handleMerchantParcel = (data) => {
    setLoading(true)
    let distrcitName = district.name

    const { name, number, address, email } = data
    division = division.name

    const customerInfo = {
      name, email, number, division, distrcitName, address,
    }

    const parcelData = {
      customerInfo,
      weight,
      TotalchargeAmount: (weightTotalCharge + deliveryFee + urgent),
      deliveryFee,
      senderEmail: user?.email
    }
    console.log(parcelData)

    // crete parcel here and set this data to DATABASE
    createParcel(parcelData).then(data => {
      console.log(data)
      if (data.data.acknowledged) {
        setLoading(false)
        reset()
        toast.success(data.message)
      }
    }).catch(err => {
      setLoading(false)
      console.log(err.message)
    })

    // also save customer info to the DATABASE
    saveCustomer(customerInfo)
    setLoading(true)
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success("customer saved")
          setLoading(false)
        }
      }).catch(err => {
        console.log(err.message)
        setLoading(false)
      })

  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <form onSubmit={handleSubmit(handleMerchantParcel)} className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">

          {/* form submit */}
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Create Parcel
              </p>
            </div>



            {/* Customer Details */}
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Customer Information
              </p>
            </div>


            <div className="mt-8 flex flex-col justify-start items-start w-full">

              <span className="text-xs text-gray-400">Full Name</span>
              <input
                {...register("name")}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Full Name"
                required
              />



              <span className="text-xs text-gray-400">Email</span>
              <input
                {...register("email")}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="email"
                placeholder="Customer Email"
                required
              />





              <span className="text-xs text-gray-400">Phone number</span>
              <input
                {...register("number")}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Phone Number"
                required
              />





              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">


                <div>
                  <span className="text-xs text-gray-400">Select Division</span>
                  <InputDivision division={division} setDivision={setDivision} divisions={divisions} />
                </div>

                <div>
                  <span className="text-xs text-gray-400">Select Distric</span>
                  <InputDistrict district={district} setDistrict={setDistrict} districts={districts} />
                </div>

              </div>





              <span className="text-xs text-gray-400">Address</span>
              <input
                {...register("address")}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Customer Address"
              />
            </div>

            {/* Parcel Details */}
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Delivery Details
              </p>
            </div>




            {/* checked button */}
            <div>
              <br />


              <fieldset className="grid grid-cols-2 gap-4">
                <legend className="sr-only">Delivery</legend>

                <div>
                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="peer hidden"
                    defaultChecked
                    onClick={() => setUrgent(0)}
                  />

                  <label
                    htmlFor="DeliveryStandard"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Standard</p>

                    <p className="mt-1 text-gray-900">Regular charge</p>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    id="DeliveryPriority"
                    className="peer hidden"
                    onClick={() => setUrgent(100)}
                  />

                  <label
                    htmlFor="DeliveryPriority"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Next Day</p>

                    <p className="mt-1 text-gray-900">TK 100 +</p>
                  </label>
                </div>
              </fieldset>

            </div>




            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <span className="text-xs text-gray-400">Total weight</span>
                  <p
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    {weight}
                  </p>
                  <button
                    onClick={() => setDropdown2(!dropdown2)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                    type="button"
                  >
                    <svg
                      id="close"
                      className={` transform ${dropdown2 ? "rotate-180" : ""}`}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown2 ? "" : "hidden"}`}>
                    <div className="flex flex-col  w-full">
                      {weightData.map((e) => (
                        <p
                          key={e.id}
                          tabIndex={0}
                          onClick={() => handleWeight(e)}
                          className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                        >
                          {e.weight}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>


                <div>
                  <span className="text-xs text-gray-400">Parcel Quantity</span>
                  <input
                    {...register("quantity")}
                    type="number"
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Parcel Quantity"
                    required

                    onChange={(e) => handleQuantity(e.target.value)}
                  />
                </div>
              </div>



              <span className="text-xs text-gray-400">Additional info about your parcel</span>
              <input
                {...register("details")}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Parcel Details (Optional)"
              />
            </div>
            <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
              {loading ? <SmallSpinner /> : "Order Submit"}
            </button>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Delivery Fee
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ${deliveryFee}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Weight Charge
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ${weightCharge}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total <span className="text-xs text-amber-500">( w.charge × quantity + delivery )</span> </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {weightTotalCharge + deliveryFee}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Urgent Delivery Fee</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {urgent}
                </p>
              </div>

              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Promo Discount</p>
                <p className="text-lg font-semibold leading-4 text-orange-600">
                  - $00
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                {weightTotalCharge + deliveryFee + urgent}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};
export default RegularCreateParcel;