import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ContactMethod() {

    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <div className="radio-row">
            <h3>Preferred Contact Method:</h3>
            <RadioGroup row aria-label="contact-method" name="contact" value={value} onChange={handleChange}>
                <FormControlLabel value="email" control={<Radio />} label="Email" />
                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            </RadioGroup>
        </div>
    )
}