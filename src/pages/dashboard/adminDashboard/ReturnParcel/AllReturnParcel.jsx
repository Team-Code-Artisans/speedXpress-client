import { useState } from "react";
import ReturnEmpty from "./ReturnEmpty";
import ReturnListAll from "./ReturnListAll";

const AllReturnParcel = () => {

    const [emptyList,setEmptyList]=useState(true)

    return (
        <div>

            {
                emptyList? <ReturnEmpty></ReturnEmpty> :  <ReturnListAll></ReturnListAll>
            }
            
           
        </div>
    );
};

export default AllReturnParcel;