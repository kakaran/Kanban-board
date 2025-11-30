
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const SelectTag = (props) => {
    const { label, name, options, important, cssObject, selectDefaultValue, method, ...rest } = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className={`flex relative flex-col`} ref={dropdownRef}>
                <label htmlFor={name} className={`font-normal text-sm/5 z-10`}>{label}{important && <span className="text-red-500 pl-1">*</span>}</label>
                <Field name={name} {...rest}>
                    {({ field, form }) => {
                        const selectedOption = options?.find(opt => opt.value === field.value);
                        return (
                            <div className='w-full border border-[#8996a9] rounded-md '>
                                <div
                                    className={`w-full h-full outline-none p-2 rounded-md cursor-pointer flex items-center justify-between min-h-[40px] text-gray-500`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className={`text-sm text-[#757575] `}>
                                        {selectedOption ? selectedOption.key : selectDefaultValue || 'Select an option...'}
                                    </span>
                                    <IoIosArrowDown className={` transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {isOpen && (
                                    <div className='absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto border border-[#D1D1D1]'>
                                        {options?.map((option) => {
                                            if (!option.value) return null;
                                            return (
                                                <div
                                                    key={option.value}
                                                    className={`px-4 py-3 border-b border-[#D1D1D1]  cursor-pointer transition-colors duration-150 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 ${field.value === option.value
                                                        ? 'bg-blue-100 text-blue-700 font-medium border-blue-500'
                                                        : 'text-gray-700'
                                                        }`}
                                                    onClick={() => {
                                                        form.setFieldValue(name, option.value);
                                                        setIsOpen(false);
                                                        method && method(option.value);
                                                    }}
                                                >
                                                    <span className={`text-sm ${cssObject?.key ? cssObject?.key : ""}`}>{option.key}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }}
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

SelectTag.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    important: PropTypes.bool,
    options: PropTypes.array,
    layoutChange: PropTypes.bool,
    cssObject: PropTypes.object,
    selectDefaultValue: PropTypes.string,
    method: PropTypes.func
}

export default SelectTag
