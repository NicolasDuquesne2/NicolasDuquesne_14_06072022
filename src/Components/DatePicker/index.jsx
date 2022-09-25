import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState, forwardRef } from "react"

const CustomInput = forwardRef(({customId, value, onChange, onClick}, ref) => {
    return (
        <input value={value} ref={ref} onClick={onClick} id={customId} onChange={(e) => onChange(e.target.value)}/>
    )
  })

function DatePickerComp({customId}) {
    const [startDate, setStartDate] = useState(new Date())

    /**
     * Fires on a date selection. feeds a redux state
     * @param {string} date 
     */
    const handleChangeDate = (date) => {
        setStartDate(date)
    }

    return (
        <div>
            <DatePicker 
                selected={startDate}
                onChange={handleChangeDate}
                customInput={<CustomInput customId={customId}/>}
            />
        </div>
    )

}

export default DatePickerComp