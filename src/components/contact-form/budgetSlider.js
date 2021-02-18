import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Slider from '@material-ui/core/Slider';


export default function BudgetSlider() {

const [value, setValue] = React.useState(2500);
  
const handleSliderChange = (event, newValue) => {
  setValue(newValue);
};

  return(

    <div>
        <h3>Project Budget: <AttachMoneyIcon style={{ fontSize: 30 }}/>{value}</h3>
        
            <Slider
                className="budget-slider"
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                max={4999}
                min={0}
            /> 

    </div>

  )

}