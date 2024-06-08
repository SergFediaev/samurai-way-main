import styles from './FormsControls.module.css'
import {Field} from 'redux-form'
import {FC} from 'react'

const FormControl = ({meta: {touched, error}, children}: any) => {
    const hasError = touched && error

    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>{children}</div>
        {hasError && <span>{error}</span>}
    </div>
}

export const Textarea = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props: any) => {
    const {input, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}

export const createField = (placeholder: string | null, name: string, validators: any, component: FC, props: any = {}, text: string = '') =>
    <div><Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>{text}
    </div>