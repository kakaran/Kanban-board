import PropTypes from "prop-types";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

const InputTag = (props) => {
  const { label, name, important, type = "text", ...rest } = props;
  // console.log("rest", ...rest)
  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className={`capitalize font-normal text-sm/5 text-center `}
        >
          {label}
          {important && <span className="text-red-500 pl-1">*</span>}
        </label>{" "}
        <Field
          id={name}
          name={name}
          type={type}
          {...rest}
          className={`w-full h-full outline-none border border-[#8996a9] p-2 rounded-md appearance-none placeholder:text-[#757575] placeholder:text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none gap`}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

InputTag.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  important : PropTypes.bool,
  type: PropTypes.string, 
};

export default InputTag;
