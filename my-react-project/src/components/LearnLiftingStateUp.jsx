import React from 'react'

function LearnLiftingStateUp(props) {
    const handleClick = () => {
        let stock = "Tesla"
        props.getStock(stock);
    }
    return (
        <>
            <h1>LearnLiftingStateUp</h1>
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}

export default LearnLiftingStateUp