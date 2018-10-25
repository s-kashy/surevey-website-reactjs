import React, { Component } from "react"
import { reduxForm, Field } from 'redux-form'
import _ from 'lodash';
import validateEmail from "../utils/validateEmails"
import { Link } from "react-router-dom"
import SurveyField from "./SurveyField"
import formField from "./formField"
class SurveyForm extends Component {
    renderField = () => {
        return (
            formField.map(field => {
                return (
                    <div key={field.label}>
                        <Field label={field.label} type="text" name={field.name} component={SurveyField} />
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderField()}
                    <Link to="/surveys" className="red btn-flat white-text" >Cancel
                    <i className="material-icons right">done</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }

}
function validate(values) {
    const errors = {};
    console.log(values)
    if (values.recipients && values.recipients.charAt(values.recipients.length - 1) === ",") {
        values.recipients = values.recipients.substring(0, values.recipients.length - 1);
    }
    errors.recipients = validateEmail(values.recipients || "")
    _.each(formField, ({ name, noValueError }, index) => {

        if (!values[name]) {
            errors[name] = formField[index].noValueError

        }

    })

    return errors


}
export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm)