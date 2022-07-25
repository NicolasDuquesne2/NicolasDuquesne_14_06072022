// @ts-no-check
import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { useForm } from "react-hook-form"
import SelectMenu from "../SelectMenu"
import ModalForm from "../ModalForm"
import { add } from "../../Redux/Form/formSlice"
import { change } from '../../Redux/Modal/modalSlice'
import { departments } from "../../Params/departments"
import { states } from "../../Params/states"
import './form.css'


/**
 * 
 * @module Form
 */


/**
 * Renders the form component
 * @returns {React.ReactComponentElement}
 */
function Form() {

    const dispatch = useDispatch()
    const datasForm = useSelector(state => state.form.value)
    const displayModal = useSelector(state => state.modal.value)
    const { register, handleSubmit, formState: {errors} } = useForm()
    let nameError = null
    let firstNameError = null
    let birthDateError = null
    let startDateError = null
    let streetError = null
    let cityError = null
    let stateError = null
    let zipError = null
    let departmentError = null

    const onSubmit = ({firstname, name, birthdate, startdate, street, city, state, zip, department}) => {
        dispatch(add({firstname, name, birthdate, startdate, street, city, state, zip, department}))
        dispatch(change())
    }

    errors.firstname? firstNameError = <p className="error-message">{errors.firstname.message}</p>: firstNameError = null
    errors.name? nameError = <p className="error-message">{errors.name.message}</p> : nameError = null
    errors.birthdate? birthDateError = <p className="error-message">{errors.birthdate.message}</p> : birthDateError = null
    errors.startdate? startDateError = <p className="error-message">{errors.startdate.message}</p> : startDateError = null
    errors.street? streetError = <p className="error-message">{errors.street.message}</p>: streetError = null
    errors.city? cityError = <p className="error-message">{errors.city.message}</p>: cityError = null
    errors.state? stateError = <p className="error-message">{errors.state.message}</p>: stateError = null
    errors.zip? zipError = <p className="error-message">{errors.zip.message}</p>: zipError = null
    errors.department? departmentError = <p className="error-message">{errors.zip.message}</p>: departmentError = null

    useEffect(() => {

        console.log(datasForm)
        if (datasForm.length > 0) {
            console.log(datasForm)
            localStorage.setItem('form', JSON.stringify(datasForm))
        }

    }, [datasForm])

    return(
        <React.Fragment>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" {...register("firstname", {required: "Please, enter a valid first name"})}/>
                {firstNameError}
                <label htmlFor="name">Last Name</label>
                <input type="text" id="name" {...register("name", {required: "Please, enter a valid name"})}/>
                {nameError}
                <label htmlFor="birthdate">Date of Birth</label>
                <input id="birthdate" type="text" {...register("birthdate", {required: "Please, enter a valid birth date"})}/>
                {birthDateError}
                <label htmlFor="startdate">Start Date</label>
                <input id="startdate" type="text" {...register("startdate", {required: "Please, enter a valid date"})}/>
                {startDateError}
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" {...register("street", {required: "Please, enter a valid street name"})}/>
                    {streetError}
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" {...register("city", {required: "Please, enter a valid city name"})}/>
                    {cityError}
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" {...register("state", {required: "Please, select a state"})}>
                        <SelectMenu params={{keyPart: 'option-state-', datas: states, typeOfDatas: 'object', dataAttr: 'name'}} />
                    </select>
                    {stateError}
                    <label htmlFor="zip">Zip Code</label>
                    <input id="zip" type="number" {...register("zip", {required: "Please, enter a valid zip code"})}/>
                    {zipError}
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" {...register("department", {required: "Please, select a department"})}>
                    <SelectMenu params={{keyPart: 'option-dep-', datas: departments, typeOfDatas: 'array'}} />
                </select>
                {departmentError}
                <input className="submit" type="submit" value="Save" />
            </form>
            {displayModal && (
                <ModalForm params={{text: 'Employee Created'}}/>
            )}
        </React.Fragment>
        
    )
}

export default Form