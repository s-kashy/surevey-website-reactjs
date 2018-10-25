import React from "react"
import { connect } from "react-redux";
import fromField from "./formField"
const SurveyReview = ({ onCancel, formValues }) => {
 
    const reviewFields = fromField.map((filed, index) => {
       
        return (
            <div key={index}>
                <label>{filed.label}</label>
                <div>{formValues[filed.name]}</div>
            </div>
        )
    })
    return (
        <div>
            <h5>Please review you entries</h5>
            {reviewFields}
            <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>Back</button>
            <button className="green  white-text darken-3 btn-flat right">Send SurveyReview
            <i className="material-icons right">email</i>
            </button>
        </div>
    )
}
const mapSateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapSateToProps)(SurveyReview)