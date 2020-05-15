import React from 'react';

const Rank = ({user}) => {
    console.log(user)
    return (
        <div>
            <div className='white f3'>
              {`${user.name.toUpperCase()}, your current rank is ${user.entries}`}
            </div>
            
        </div>
    )
}

export default Rank;