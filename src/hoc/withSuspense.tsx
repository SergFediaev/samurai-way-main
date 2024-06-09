import {Preloader} from '../components/common/Preloader/Preloader'
import React, {ComponentType, Suspense} from 'react'

export const withSuspense = <T, >(Component: ComponentType<T>) => {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}