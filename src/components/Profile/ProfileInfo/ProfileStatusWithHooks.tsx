import React, {ChangeEvent, useEffect, useState} from 'react'

export const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return <div>
        {!editMode && <div>
            <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || '---------'}</span>
        </div>}
        {editMode && <div>
            <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
        </div>}
    </div>
}