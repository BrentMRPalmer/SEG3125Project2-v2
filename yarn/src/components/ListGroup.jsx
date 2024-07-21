import React, { useState } from 'react'

const ListGroup = ({items}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <ul className='list-group'>
            {items.map((item, index) => (
                <li
                  className={`custom-body-font list-group-item custom-list-group-item ${selectedIndex === index ? 'active' : ''}`}
                  key={item}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                </li>
            ))}
        </ul>
    )
}

export default ListGroup