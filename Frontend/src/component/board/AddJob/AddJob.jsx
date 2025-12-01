import PropTypes from "prop-types";
import Popup from "../../shared/Popup";
import { IoCloseOutline } from "react-icons/io5";
import FormikControl from "../../shared/formik/FormikControl";
import { Formik, Form } from "formik";
import { initialValue } from "./initialValue";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Button from "../../shared/Button";
import { validationSchema } from "./validationSchema";

const AddJob = (props) => {
  const { popClosedMethod } = props;
  const {data} = useSelector((state) => state.board);

const slectionOptions = useMemo(() =>{
  let options = [];
  if(data){
    data.columns.map((column) => {
      options.push({
        key : column?.title,
        value: column?._id
      })
    })
  }
  return options;
}, [data])


  const handelSubmit = (values) => {
    console.log(values);
  };

  return (
    <Popup clickEventMethod={popClosedMethod} Css="bg-white font-primary overflow-y-auto scrollbar-none" >
      <div className="px-5 py-3.5 flex justify-between items-center border-b border-[#f0f0f0] ">
        <h2 className="font-normal text-md">Add Job</h2>
        <IoCloseOutline
          className="cursor-pointer text-2xl"
          onClick={() => popClosedMethod()}
        />
      </div>
      <Formik initialValues={initialValue} onSubmit={handelSubmit} validationSchema={validationSchema} validateOnChange={true}>
        <Form className="px-6 py-3.5 space-y-2.5 ">
          <FormikControl
            control="input"
            name="jobTitle"
            label="Job Title"
            important={true}
            placeholder="Job Title"
          />
          <FormikControl
            control="input"
            name="companyName"
            label="Company Name"
            important={true}
            placeholder="Company Name"
          />
          <FormikControl
            control="input"
            name="jobUrl"
            label="Job Url"
            important={true}
            placeholder="Job Url"
          />
           <FormikControl
            control="select"
            name="section"
            label="Section"
            important={true}
            options={slectionOptions}
            selectDefaultValue ={slectionOptions[0]?.key}
          />
          <FormikControl
            control="input"
            name="salary"
            label="Salary"
            important={true}
            placeholder="50,000"
          />
          <FormikControl
            control="input"
            name="location"
            label="Location"
            important={true}
            placeholder="Location"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
            important={true}
          />
          <div className="flex justify-center items-center w-full gap-2 py-5">
            <Button type="button" Css="px-7 py-1.5 bg-white !text-primary-200 !border !border-primary-200">Cancel</Button>
            <Button type="submit" Css="px-7 py-1.5 bg-primary-200 !text-white">Submit</Button>
          </div>
        </Form>
      </Formik>
    </Popup>
  );
};

AddJob.propTypes = {
  popClosedMethod: PropTypes.func,
};

export default AddJob;
