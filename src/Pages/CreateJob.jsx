import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';


const CreateJob = () => {

    const[selectedOption, setSelectedOption] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data)
};

const options = [
    {value: "Javascript", label: "Javascript"},
    {value: "C++", label: "C++"},
    {value: "HTML", label: "HTML"},
    {value: "CSS", label: "CSS"},
    {value: "Bootstrap", label: "Bootstrap"},
    {value: "Tailwind", label: "Tailwind"},
    {value: "React", label: "React"},
    {value: "Node", label: "Node"},
    {value: "MongoDB", label: "MongoDB"},
    {value: "Express", label: "Express"},
    {value: "Redux", label: "Redux"},
    {value: "Github", label: "Github"},
    {value: "AWS", label: "AWS"},
]

  

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-4 ">
        <h3 className="text-3xl font-bold my-8 text-center text-blue">Post a Job</h3>
      {/* form */}
      {/* <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">         */}
      <div className="createJobBg py-10 px-4 lg:px-16 rounded-xl">        
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">        
                {/* first row */}
                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Title</label>
                        <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Company Name</label>
                        <input type="text" placeholder="Ex: Microsoft, Google, etc" {...register("companyName")} className="create-job-input" />
                    </div>
                </div>
                
                {/* second row */}
                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Minimum Salary</label>
                        <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Maximum Salary</label>
                        <input type="text" placeholder="$120k" {...register("maxPrice")} className="create-job-input" />
                    </div>
                </div>

                {/* third row */}
                <div className="create-job-flex">
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Salary Type</label>
                        <select {...register("salaryType")} className="create-job-input">
                            <option value="">Choose your salary</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                            
                        </select>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Location</label>
                        <input type="text" placeholder="Ex: Pakistan, Remote etc" {...register("jobLocation")} className="create-job-input" />
                    </div>
                </div>

                {/* fourth row */}
                <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Job Posting Date</label>
                        <input type="date" placeholder="Ex: 2024-11-03" {...register("postingDate")} className="create-job-input" />
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Experience Level</label>
                        <select {...register("experienceLevel")} className="create-job-input">
                            <option value="">Choose your experience</option>
                            <option value="NoExperience">Any experience</option>
                            <option value="Internship">Internship</option>
                            <option value="Work remotely">Work remotely</option>
                            
                        </select>
                    </div>
                </div>

                {/* fifth row */}
                <div>
                    <label className="block mb-2 text-lg">Required Skill Sets:</label>
                        <CreatableSelect 
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className="create-job-input" 
                        />
                </div>

                {/* sixth row */}
                <div className="create-job-flex">
                <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Company Logo</label>
                        <input type="url" placeholder="Paste your company logo URL: https://pnyshare.com/logo1" {...register("companyLogo")} className="create-job-input" />
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <label className="block mb-2 text-lg">Employment Type</label>
                        <select {...register("employmentType")} className="create-job-input">
                            <option value="">Choose your employment type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Temporary">Temporary</option>
                            
                        </select>
                    </div>
                </div>

                {/* seventh row */}
                <div className="w-full">
                    <label className="block mb-2 text-lg">Job Description</label>
                    <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700 "
                    defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."}
                    rows={6}
                    placeholder="Job Description"
                    {...register("description")}  />

                </div>

                {/* last row / eigth row */}
                <div className="w-full ">
                    <label className="block mb-2 text-lg">Job Posted By:</label>
                    <input type="email" placeholder="your email address" {...register("postedBy")} className="create-job-input" />
                </div>




            <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-md cursor-pointer" />
            </form>
      </div>
    </div>
  );
};

export default CreateJob;
