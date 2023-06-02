
const CreateParcel = () => {
    return (
        <div className="container m-auto">
                <div className="lg:grid grid-cols-6 gap-4 lg:mx-0 mx-2">

                    <div className="w-full col-span-4">
                        <h1 className="text-3xl font-bold text-zinc-700 my-6">Create New Parcel</h1>

                            {/* checked button */}
                            <div>
                                

                            <fieldset className="grid grid-cols-2 gap-4">
                            <legend className="sr-only">Delivery</legend>

                            <div>
                                <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden"
                                checked
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



                            {/* input form for parcel  */}

                                <div>
                                    
                                    <h1 className="text-2xl font-bold text-zinc-700 my-4">Receiver Info</h1>
                                    <div className="flex gap-2">
                                        <div className="w-1/2">
                                        <h3 className="text-sm leading-3 text-zinc-500">Receiver name</h3>
                                        <input  name="receiverName" type="text" placeholder="receiver name" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"/>
                                        </div>

                                        <div className="w-1/2">
                                            
                                        <h3 className="text-sm leading-3 text-zinc-500">Receiver phone no</h3>
                                        <input className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" name="receiverPhone" type="number" placeholder="write his/her phone no" />

                                        </div>
                                    </div>
                                    <div>
                                    <h3 className="text-sm leading-3 text-zinc-500">Receiver address</h3>
                                        <input className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" name="receiverAddress" type="text" placeholder="Receiver address" />
                                    </div>
                                </div>



                                {/* delivery info */}
                                <div>
                                <h1 className="text-2xl font-bold text-zinc-700 my-4">Delivery Info</h1>
                                    <div className="flex gap-2">
                                            <div className="w-1/2">
                                            <h3 className="text-sm leading-3 text-zinc-500">Parcel weight in gm</h3>
                                        <input  name="parcelWeight" type="number" placeholder="Parcel weight" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"/>
                                            </div>

                                            <div className="w-1/2">
                                            <h3 className="text-sm leading-3 text-zinc-500">Select your plece of delivery</h3>
                                                <select id="place" className="px-4 py-2 m-2 w-full border text-gray-700 bg-white rounded-lg ">
                                                <option value="bogra">bogra</option>
                                                <option value="dhaka">dhaka</option>
                                                <option value="rajshahi">rajshahi</option>
                                                <option value="dinaspur">dinaspur</option>
                                                </select>
                                             </div>

                                    </div>

                                    <div className="mt-3">
                                    <h3 className="text-sm leading-3 text-zinc-500">write your product details (liquite/solit, aprox price , color , type etc)</h3>
                                        <textarea placeholder="  write extra details" name="productDetails" className="mt-4 lg:mx-0 mx-2 rounded-lg border lg:w-full " cols="52" rows="7"></textarea>
                                    </div>

                                    <div>
                                        <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold mx-2">Submit</button>
                                        <b className="bg-red-500 px-4 py-2 rounded text-white font-semibold">Cancle</b>
                                    </div>
                                   
                                </div>
                    </div>
               

                    {/* card of details */}
                 
                    <div className="w-full col-span-2">
                        <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 bg-gray-200 dark:text-gray-100">
                            <div>
                            <h2 className="text-2xl font-semibold">Tofayel Shop</h2>
                            <span className="text-sm">your pickup address .....</span>
                            </div>
                            
                            <ul className="flex flex-col pt-4 space-y-2">
                                <li className="flex items-start justify-between">
                                    <h3>Cash collection </h3>
                                    <div className="text-right">
                                        <span className="block">$00</span>
                                    </div>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>Delivery Charge</h3>
                                    <div className="text-right">
                                        <span className="block">$00</span>
                                    </div>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>COD Charge</h3>
                                    <div className="text-right">
                                        <span className="block">$00</span>
                                        
                                    </div>
                                </li>
                            
                            </ul>
                            <div className="pt-4 space-y-2">
                                <div>
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>$21.50</span>
                                    </div>
                             
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span>$00</span>
                                </div>
                            </div>
                            <div className="pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span>Service fee</span>
                                    <span>$0.50</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <span>Delivery fee</span>
                                        <span>$4.00</span>
                                    </div>
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-violet-400">How do our fees work?</a>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between text-orange-600">
                                        <span>Total</span>
                                        <span className="font-semibold">$22.70</span>
                                    </div>
                                    <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">Go to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
       
      </div>
    );
};

export default CreateParcel;