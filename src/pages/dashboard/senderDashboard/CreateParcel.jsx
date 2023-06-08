import { useState } from "react";

const CreateParcel = () => {

        const [urgent,setUrgent] = useState(0)
        const [deliveryCharge,setDeliveryCharge] = useState(0)

    
        

        
        const summaryCardUpdate = () => {
            setDeliveryCharge(150)
        }



        const handleSubmit = (event) =>{
            event.preventDefault()

            const form = event.target;
            const receiverName = form.receiverName.value;
            const receiverPhone = form.receiverPhone.value;
            const receiverAddress = form.receiverAddress.value;

            const parcelWeight = form.parcelWeight.value;
            const productDetails = form.productDetails.value;

            if(receiverPhone.length !== 11){
                return  alert("Phone no should be 11 digit")
            }

            const createParcelData = {
                receiverName,
                receiverPhone,
                receiverAddress,
                parcelWeight,
                productDetails
            }


            console.log(createParcelData);


            // here need to put the post API for send the create data to database//
            fetch('',{
                method:'POST',
                headers:{
                    "Content-type" : "application/json",
                },
                body:JSON.stringify(createParcelData)
            }
            )
            .then(res => res.json())
            .then(result => console.log(result))
        }




    const formClear = ()=>{
        alert('are u sure')
    }




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
                                onClick={()=>setUrgent(0)}
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
                                onClick={()=>setUrgent(100)}
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

                              <form action="" onSubmit={handleSubmit}>
                              <>
                                    
                                    <h1 className="text-2xl font-bold text-zinc-700 my-4">Receiver Info</h1>
                                    <div className="flex gap-2">
                                        <div className="w-1/2">
                                        <h3 className="text-sm leading-3 text-zinc-500">Receiver name</h3>
                                        <input  name="receiverName" type="text" placeholder="receiver name" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" required/>
                                        </div>

                                        <div className="w-1/2">
                                            
                                        <h3 className="text-sm leading-3 text-zinc-500">Receiver phone no</h3>
                                        <input name="receiverPhone" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"  type="number" placeholder="write his/her phone no" required/>

                                        </div>
                                    </div>
                                    <div>
                                    <h3 className="text-sm leading-3 text-zinc-500">Receiver address</h3>
                                        <input name="receiverAddress" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"  type="text" placeholder="Receiver address" required/>
                                    </div>
                                </>



                                {/* delivery info */}
                                <>
                                <h1 className="text-2xl font-bold text-zinc-700 my-4">Delivery Info</h1>
                                    <div className="flex gap-2">
                                            <div className="w-1/2">
                                            <h3 className="text-sm leading-3 text-zinc-500">Parcel weight in gm</h3>
                                        <input  onChange={summaryCardUpdate} name="parcelWeight" type="number" placeholder="Parcel weight" className="px-4 py-2 m-2 w-full text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" required/>
                                            </div>

                                            <div className="w-1/2">
                                            <h3 className="text-sm leading-3 text-zinc-500">Select your plece of delivery</h3>
                                                <select id="place" className="px-4 py-2 m-2 w-full border text-gray-700 bg-white rounded-lg ">
                                                <option value="bogra">Bogra</option>
                                                <option value="dhaka">Dhaka</option>
                                                <option value="rajshahi">Rajshahi</option>
                                                <option value="dinaspur">Dinaspur</option>
                                                </select>
                                             </div>

                                    </div>

                                    <div className="mt-3">
                                    <h3 className="text-sm leading-3 text-zinc-500">write your product details (liquite/solit, aprox price , color , type etc)</h3>
                                        <textarea placeholder="  write extra details" name="productDetails" className="mt-4 lg:mx-0 mx-2 rounded-lg border lg:w-full " cols="52" rows="7"></textarea>
                                    </div>

                                    <div>
                                        <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold mx-2">Submit</button>
                                        <b onClick={formClear} className="bg-red-500 px-4 py-2 rounded text-white font-semibold">Cancle</b>
                                    </div>
                                   
                                </>
                              </form>
                    </div>
               



                    {/* summary card to shaw all the data in shortcart */}
                 
                    <div className="w-full col-span-2">
                        <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 bg-gray-200 dark:text-gray-100">
                            <div>
                            <h2 className="text-2xl font-semibold">Tofayel Shop</h2>
                            <span className="text-sm">your pickup address .....</span>
                            </div>
                            
                            <ul className="flex flex-col pt-4 space-y-2">
                                
                                <li className="flex items-start justify-between">
                                    <h3>Delivery Charge</h3>
                                    <div className="text-right">
                                        <span className="block">TK
                                        {
                                            deliveryCharge? deliveryCharge : '00'
                                        }
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>COD Charge</h3>
                                    <div className="text-right">
                                        <span className="block">TK 00</span>
                                        
                                    </div>
                                </li>
                                <li className="flex items-start justify-between">
                                    <h3>Extra Charge (urgent Only)</h3>
                                    <div className="text-right">
                                        <span className="block">TK {urgent}</span>
                                        
                                    </div>
                                </li>
                            
                            </ul>
                            <div className="pt-4 space-y-2">
                                <div>
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>TK 00.00</span>
                                    </div>
                             
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span>TK 00.00</span>
                                </div>
                            </div>
                            <div className="pt-4 space-y-2">
                               
                              
                                <div className="space-y-6">
                                    <div className="flex justify-between text-orange-600">
                                        <span>Total</span>
                                        <span className="font-semibold">TK {urgent + deliveryCharge}</span>
                                    </div>

                                    {/*  depent on team opinion */}
                                   <span>here can added a checkout button</span>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
       
      </div>
    );
};

export default CreateParcel;