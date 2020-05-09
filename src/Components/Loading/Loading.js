import React from 'react'
import css from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={css.loadingContainer}>
            <div className={css.loading}><div></div><div></div><div></div></div>

        </div>
    )
}

export default Loading
