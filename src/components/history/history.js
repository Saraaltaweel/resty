import React from 'react'

function history(props) {
    return (
      <div>
        <h3>History:</h3>
        {props.history.map((data) => {
          return (
            <ul>
              <span className='data.method'>{data.method} {data.url}
              </span>
            </ul>
          );
        })}
    </div>
    )
 }
 export default history; 