import PropTypes from "prop-types";

const Card = (props) => {
  const { data, popOpenMethod } = props;
  return (
    <div className="bg-secondry-bg-100 w-full font-primary rounded-lg p-2.5 space-y-2.5 cursor-pointer" onClick={() => popOpenMethod()}>
      <div className=" flex items-center gap-2.5">
        <img src="./office.svg" alt="office" />
        <div className="space-y-1 w-full">
          <h2 className="text-base font-thin truncate">{data?.title}</h2>
          <p className="flex items-center gap-1.5 text-sm font-light truncate">
            <span>
              <img src="./office2.svg" alt="office" />
            </span>
            My Dream Company
          </p>
        </div>
      </div>
      <div className="text-right w-full text-xs font-thin text-[#595959]">
        Added a day ago
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
