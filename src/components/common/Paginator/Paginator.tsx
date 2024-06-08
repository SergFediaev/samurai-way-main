import styles from './Paginator.module.css'
import React from 'react'

export const Paginator = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []

    for (let iteration = 1; iteration <= pagesCount; iteration++) {
        pages.push(iteration)
    }

    return <div>
        {pages.map((page, index) => <span key={index} className={props.currentPage === page
            ? styles.selectedPage
            : undefined}
                                          onClick={() => props.onPageChanged(page)}>{page}</span>)}
    </div>
}