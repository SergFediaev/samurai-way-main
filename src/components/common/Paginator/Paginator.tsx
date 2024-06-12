import styles from './Paginator.module.css'
import React, {useState} from 'react'
import cn from 'classnames'

export const Paginator = (props: any) => {
    const {portionSize = 10} = props

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pages = []

    for (let iteration = 1; iteration <= pagesCount; iteration++) {
        pages.push(iteration)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => <span className={cn({[styles.selectedPage]: props.currentPage === page}, styles.pageNumber)}
                               key={page}
                               onClick={() => props.onPageChanged(page)}>{page}</span>)}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}