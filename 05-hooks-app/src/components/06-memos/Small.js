import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('he sido llamado.');

    return (
        <>
            <small> {value} </small>
        </>
    )
});
