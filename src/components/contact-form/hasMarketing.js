import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function HasMarketing() {

    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <div className="radio-row">
            
            <p className="my-auto pr-4">Marketing?</p>

            <RadioGroup row aria-label="has-marketing" name="has-marketing" value={value} onChange={handleChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>  
            <div className="yes-input ml-5 mr-auto flex row">
                <p className="my-auto">If yes, what type:</p><input style={{width:"600px"}}/>
            </div>
        </div>
    )
}