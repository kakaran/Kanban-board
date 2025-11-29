import Button from "../shared/Button";
import { IoMdAdd } from "react-icons/io";

const BorderHeader = () => {
  return (
    <div className="font-primary flex items-center justify-between rounded-t-2xl border-stroke-100 border bg-background-100 px-6 py-3.5 ">
      <h2>My {new Date().getFullYear()} Job Search</h2>
      <Button Css="flex items-center gap-2">
        <IoMdAdd className="text-white"/>
        Add Job
      </Button>
    </div>
  );
};

export default BorderHeader;
