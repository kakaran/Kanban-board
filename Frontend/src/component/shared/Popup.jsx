import PropTypes from 'prop-types';

const Popup = (props) => {
    const {children, Css, clickEventMethod} = props

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget ) {
            clickEventMethod();
        }
    };
    return (
        <div className='fixed inset-0 z-9999 bg-black/40 flex justify-center ' onClick={handleBackdropClick} >
            <div className={`bg-neutrals-100 rounded-md h-5/6 w-4/6 lg:w-2/6 m-auto ${Css}`}>
                {children}
            </div>
        </div>
    )
}

Popup.propTypes = {
    children : PropTypes.node,
    Css : PropTypes.string,
    clickEventMethod: PropTypes.func,
}

export default Popup
