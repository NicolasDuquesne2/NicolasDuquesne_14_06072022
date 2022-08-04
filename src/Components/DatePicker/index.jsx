import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"

function DatePickerComp() {

    const [startDate, setStartDate] = useState(new Date())

    const handleChangeDate = (date) => {
        setStartDate(date)
    }

    return (
        <div>
            <DatePicker 
                selected={startDate}
                onChange={handleChangeDate}
            />
        </div>
    )

}

export default DatePickerComp