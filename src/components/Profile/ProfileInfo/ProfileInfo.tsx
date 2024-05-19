import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader'
import {ProfileStatus} from './ProfileStatus'

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
        {/*        <div>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt="Header image"/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="Large profile photo"/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>)
}