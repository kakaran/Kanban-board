import PropTypes from 'prop-types';

const TextError = (props) => {
    return (
        <div className='text-[#FF0000] mt-0 font-normal text-xs/4 font-primaryFont'>
            {props.children}
        </div>
    )
}

TextError.propTypes = {
    children: PropTypes.node
}

export default TextError
