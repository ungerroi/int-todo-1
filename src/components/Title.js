import React, {useState} from 'react'

const Title = ({text}) => {

    const [color, setColor] = useState('blue')
    
    const styles = {
        h1: {color: color, fontSize: 27},
        p: {color: "red", fontSize: 14}
    }

    return (
        <div>
            <h1 style={styles.h1}>{text}</h1>
            <p style={styles.p}>sub-title</p>
        </div>
    )
}

export default Title



// object destructuring
// const obj = {a: 1, b: 2, c: 3}
// const {a, b} = obj
// cosole.log(a)

// array destructuring
// const arr = [1, 2, 3]
// const [a, b, c] = arr
// const a = arr[0]
// const b = arr[1]
// conosle.log(a)