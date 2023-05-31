import { useState } from "react";
import SenderReturnEmptyList from "./SenderReturnEmptyList";
import SenderReturnList from "./SenderReturnList";

const SenderReturnParcel = () => {


    // this section design is dainamic , depending on the state .. is the return list empty or not 

    const [listEmpty,setListEmpty] = useState(true)
    return (
        <div>
            {
                listEmpty? <SenderReturnEmptyList></SenderReturnEmptyList> : <SenderReturnList></SenderReturnList>
            }
        </div>
    );
};

export default SenderReturnParcel;