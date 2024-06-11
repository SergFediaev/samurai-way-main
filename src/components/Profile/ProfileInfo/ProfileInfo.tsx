import React, {ChangeEvent} from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: any) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files?.length) {
            savePhoto(event.currentTarget.files[0])
        }
    }

    return (<div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt="Large profile photo" className={s.mainPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>)
}