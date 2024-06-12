import React, {ChangeEvent, useState} from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: any) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files?.length) {
            savePhoto(event.currentTarget.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (<div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt="Large profile photo" className={s.mainPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {editMode
                // @ts-ignore
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>)
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key}
                                                                                contactValue={profile.contacts[key]}/>)}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}: any) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}