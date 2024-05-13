import TenderEditCard from "./TenderEditCard"
import { API } from "../../utils/apiURL";import axios from "axios";
import { useEffect, useState } from "react";
const TenderEdits=()=>{
    const [data, setData]=useState([]);
    const fetchTender = async () => {
        try {
    
          let response = await axios.get(`${API}/tender`);
          if (response.status === 200) {
            setData(response.data);
            console.log(response.data);
          }
        //   setFetchDone(true);
        } catch (err) {
          console.error("Error in Tender", err);
        //   setFetchDone(false);
        }
      };
    useEffect(()=>{
        fetchTender();
    },[])
    return (
        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
        <TenderEditCard data={data} fetchData={fetchTender}/>
        </div>
        </div>
    )
}
export default TenderEdits;