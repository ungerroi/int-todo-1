import React, {useState} from 'react'

const List = ({list}) => {

    return (
        <div>
            <ul>
                {list.map( (item, index) => <li key={index} >{item}</li> )}
            </ul>
        </div>
    )
}

export default List


