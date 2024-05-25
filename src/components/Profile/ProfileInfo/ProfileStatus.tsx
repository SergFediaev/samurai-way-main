import React, {ChangeEvent, Component} from 'react'

export class ProfileStatus extends Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        // this.forceUpdate()
        // this.state.editMode = true
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

        console.log('componentDidUpdate')
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || '---------'}</span>
            </div>}
            {this.state.editMode && <div>
                <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateEditMode}
                       autoFocus/>
            </div>}
        </div>
    }
}