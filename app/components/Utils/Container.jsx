import React from 'react'

function Container({ children, className }) {
    return (
        <div className="max-w-[1158px] px-6 mx-auto">
            {children}
        </div>
    )
}

export default Container
