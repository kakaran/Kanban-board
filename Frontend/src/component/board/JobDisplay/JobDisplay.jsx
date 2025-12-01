import { IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import Popup from "../../shared/Popup";
import { Link, Navigate } from "react-router-dom";
import Button from "../../shared/Button";
import PropTypes from "prop-types";

const JobDisplay = (props) => {
  const { popClosedMethod } = props;
  return (
    <Popup
      clickEventMethod={popClosedMethod}
      Css="bg-white font-primary overflow-y-auto scrollbar-none !w-4/5 lg:w-3/5"
    >
      <div className="px-5 py-3.5 flex justify-between items-center border-b border-[#f0f0f0] ">
        <h2 className="font-medium font-primary text-lg">Job Details</h2>
        <IoCloseOutline
          className="cursor-pointer text-2xl"
          onClick={() => popClosedMethod()}
        />
      </div>
      <div className="p-4 flex items-center justify-between border-b border-[#f0f0f0]">
        <div className="flex gap-4">
          <img src="./office.svg" alt="" className="w-14 h-14" />
          <div className="flex flex-col font-primary">
            <h2>Title</h2>
            <span className="flex gap-3 text-sm font-thin">
              <span className="flex items-center justify-between gap-2">
                <img src="./office2.svg" alt="" />
                <p>Company</p>
              </span>
              <span className="flex items-center justify-between gap-2">
                <IoLocationOutline className="text-[#cacfda] text-lg" />
                <p>Location</p>
              </span>
              <span className="flex items-center justify-between gap-2">
                <AiOutlineDollar className="text-[#cacfda] text-lg" />
                <p>Salary: Company</p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            Css="border-none !text-primary-200 !bg-white"
            Method={() => window.open("https://www.google.com")}
          >
            View Job Link
          </Button>
          <Button
            type="button"
            Css="px-7 py-1.5 bg-white !text-red-600 !border !border-red"
          >
            Delete
          </Button>
          <Button
            type="button"
            Css="px-7 py-1.5 bg-white !text-primary-200 !border !border-primary-200 flex items-center gap-2"
          >
            Edit
            <FaPencil />
          </Button>
        </div>
      </div>
      <div className="px-5 py-3.5  space-y-2">
        <h2 className="font-medium font-primary text-xl">Description</h2>
        <pre>    text   </pre>
      </div>
    </Popup>
  );
};
JobDisplay.propTypes = {
  popClosedMethod: PropTypes.func,
};

export default JobDisplay;
