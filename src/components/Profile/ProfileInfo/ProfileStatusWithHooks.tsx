import React, {ChangeEvent, useState} from 'react'

export const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
        props.updateStatus(status)
    }

    return <div>
        {!editMode && <div>
            <span onDoubleClick={activateEditMode}>{props.status || '---------'}</span>
        </div>}
        {editMode && <div>
            <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
        </div>}
    </div>
}