import { IoIosArrowDown } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DropDown = (props) => {
    const { ButtonName, Navbar, ButtonCss, DropDownValueCss, children, Css ="" } = props;
    const [dropDownHandle, setdropDown] = useState(false)
    let customCss = {
        navbar: "!static !bg-black !text-neutrals-100 !mt-2 md:!absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:!text-black md:rounded-md md:!bg-neutrals-100"
    }
    return (
        <div className={`relative font-primaryFont z-10 ${Css}`}>
            <button className={`flex items-center gap-1 ${ButtonCss}`} onClick={() => { setdropDown(!dropDownHandle) }}>
                <span className='whitespace-nowrap' >{ButtonName}</span>
                <IoIosArrowDown className='text-lg md:text-2xl' />
            </button>
            <div className={`bg-neutrals-100 absolute h-auto w-[228px] left-1/2 -translate-x-1/2 top-12 text-black rounded-md ${DropDownValueCss} ${!dropDownHandle ? "hidden" : "block"} ${Navbar ? customCss.navbar : ""}`} onClick={() => setdropDown(false)}>
                {children}
            </div>
        </div>
    )
}

DropDown.defaultProps = {
    Navbar: false,
}

DropDown.propTypes = {
    Css: PropTypes.string,
    children: PropTypes.node,
    ButtonName: PropTypes.string.isRequired,
    Navbar: PropTypes.bool,
    ButtonCss: PropTypes.string,
    DropDownValueCss: PropTypes.string
}

export default DropDown
