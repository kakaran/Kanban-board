import PropTypes from "prop-types";
import TextError from "./TextError";
import { ErrorMessage, Field } from 'formik';

const TextAreaTag = (props) => {
  const { label, important, name, ...rest } = props;
  return (
    <div>
      <div className={`flex w-full flex-col font-primary`}>
        <label htmlFor={name} className={`capitalize font-normal text-sm/5 `}>
          {label}
          {important && <span className="text-red-500 pl-1">*</span>}
        </label>
        <Field
          {...rest}
          as="textarea"
          name={name}
          placeholder={"Paste or Type the Job Description Here..."}
          className={`w-full  outline-none border resize-none h-28 border-[#8996a9] placeholder:text-[#757575] placeholder:text-sm placeholder:italic  p-2 rounded-md appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none `}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

TextAreaTag.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
  name : PropTypes.string
};

export default TextAreaTag;
