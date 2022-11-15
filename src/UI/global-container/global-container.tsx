import React from 'react'

const GlobalContainer = (props: any) => {
    return (
        <div className='container-wrapper'>
            {props.children}
        </div>
    )
}

export default GlobalContainer