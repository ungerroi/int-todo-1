import React, {useState} from 'react'
import List from './List'

const Form = () => {

    const [list, setList] = useState([])
    const [value, setValue] = useState('')

    const addTask = () => {
        setList((list) => [...list, value])
    }

    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={(e) => addTask}>ADD</button>
            <List list={list} />
        </div>
    )
}

export default Form


