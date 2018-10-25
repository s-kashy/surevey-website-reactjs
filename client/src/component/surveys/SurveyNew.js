import React, { Component } from "react"
import SurveyForm from "./SurveyForm"
import { reduxForm } from 'redux-form'
import SurveyFromReview from "./SurveyReview"
class SurveyNew extends Component {

    state = {
        reviewFrom: false
    }


    renderContent() {
        if (this.state.reviewFrom) {
            return <SurveyFromReview onCancel={()=>this.setState({reviewFrom:false})}/>
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ reviewFrom: true })} />

    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

}
export default reduxForm ({
    form:'surveyForm'})  (SurveyNew)