import React, {Component} from 'react'

export class ProfileStatus extends Component<any, any> {
    state = {
        editMode: false,
    }

    activateEditMode() {
        // this.forceUpdate()
        // this.state.editMode = true
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>}
            {this.state.editMode && <div>
                <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus/>
            </div>}
        </div>
    }
}