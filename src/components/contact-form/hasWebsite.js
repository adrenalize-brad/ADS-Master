import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function HasWebsite() {

    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <div className="radio-row">
            
            <p className="my-auto pr-4">A Website?</p>

            <RadioGroup row aria-label="has-website" name="has-website" value={value} onChange={handleChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>  
            <div className="yes-input ml-5 mr-auto flex row">
                <p className="my-auto">If yes, what is the address:</p><input style={{width:"500px"}}/>
            </div>
        </div>
    )
}