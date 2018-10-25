import React from "react"
import { connect } from "react-redux";
import fromField from "./formField"
import * as action from "../../actions/index"
import {withRouter}from "react-router-dom"

const SurveyReview = ({ onCancel, formValues,submitSurvey,history }) => {
 
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
            <button className="green  white-text darken-3 btn-flat right" onClick={()=>submitSurvey(formValues,history)}>Send SurveyReview
            <i className="material-icons right">email</i>
            </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps,action)(withRouter(SurveyReview))