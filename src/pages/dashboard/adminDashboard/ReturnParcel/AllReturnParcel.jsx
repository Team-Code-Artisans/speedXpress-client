import { useState } from "react";
import ReturnEmpty from "./ReturnEmpty";
import ReturnListAll from "./ReturnListAll";

const AllReturnParcel = () => {

    // this is a conditional setuation this return UI will be change depend on the  return list .. is it empty or not 

    const [emptyList,setEmptyList]=useState(false)

    return (
        <div>

            {
                emptyList? <ReturnEmpty></ReturnEmpty> :  <ReturnListAll></ReturnListAll>
            }
            
           
        </div>
    );
};

export default AllReturnParcel;