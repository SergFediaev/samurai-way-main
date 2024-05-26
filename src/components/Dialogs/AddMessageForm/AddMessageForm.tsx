import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import React from 'react'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody" validate={[required, maxLength50]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export default reduxForm({form: 'addMessageForm'})(AddMessageForm)