import React, { FormEvent } from "react";
import axios from "axios";
import { API } from "../../utils/apiURL";
import DatePickerOne from "../../components/Forms/DatePicker/DatePickerOne";
const AddRecruitments = () => {
    const startDateRef = React.useRef<HTMLInputElement>(null);
    const endDateRef = React.useRef<HTMLInputElement>(null);
    const refDesc = React.useRef<HTMLInputElement>();
    const refAppLink=React.useRef();
    const refAppForm=React.useRef();
    const refRecruitmentDoc = React.useRef<HTMLInputElement>();
    
  
    React.useEffect(() => {
  
      // };
    }, []);
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
  
    
      try {
        const response = await axios.post(`${API}/recuitment`, {
          service:refDesc.current!.value,
          RecruitmentDoc:refRecruitmentDoc.current!.files[0],
          startDate: startDateRef.current!.value,
          endDate:endDateRef.current!.value,
          ApplicationLink:refAppLink.current.value,
          ApplicationForm:refAppForm.current.value
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(response.data.message);
      } catch (err) {
        console.error(err);
      }
    };
    
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label htmlFor="description" className="mb-3 block text-black dark:text-white">Description of Recruitment</label>
              <input
                id="description"
                type="text"
                placeholder="Description of Recruitment"
                required="required"
                ref={refDesc}
                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
              />
            </div>
            <div className="flex justify-between">
            <div className="w-fit">
              <label htmlFor="description" className="mb-3 block text-black dark:text-white">Start Date</label>
              
              <DatePickerOne refDate={startDateRef}/>
            </div>
            <div className="w-fit">
              <label htmlFor="description" className="mb-3 block text-black dark:text-white">End Date</label>
              
              <DatePickerOne refDate={endDateRef}/>
            </div>
            </div>
            <div>
              <label htmlFor="description" className="mb-3 block text-black dark:text-white">Application Form</label>
              <input
                id="description"
                type="text"
                placeholder="Description of Recruitment"
               
                ref={refAppForm}
                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="description" className="mb-3 block text-black dark:text-white">Application Link</label>
              <input
                id="description"
                type="text"
                placeholder="Description of Recruitment"
                
                ref={refAppLink}
                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
              />
            </div>
              
          </div>
          <div>
              <label htmlFor="RecruitmentDoc" className="mb-3 block text-black dark:text-white">Attach Recruitment Doc</label>
              <input
                id="RecruitmentDoc"
                required="required"
                accept=".pdf"
                type="file"
                ref={refRecruitmentDoc}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg mt-4 text-center">Submit</button>
        </div>
   
      </form>
  
  
        
    );
}

export default AddRecruitments