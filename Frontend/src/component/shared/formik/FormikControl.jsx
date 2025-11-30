import PropTypes from 'prop-types';
import InputTag from './InputTag';
import TextAreaTag from './TextAreaTag';
import SelectTag from './SelectTag';


const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <InputTag {...rest} />
        case 'textarea':
            return <TextAreaTag {...rest} />
        case 'select':
            return <SelectTag {...rest} />
        default: return null
    }
}

FormikControl.propTypes = {
    control: PropTypes.string
}

export default FormikControl
