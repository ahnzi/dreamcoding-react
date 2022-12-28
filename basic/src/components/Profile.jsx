import React from 'react';

export default function Profile() {
    return (
        <div className='profile'>
            <img
                className='photo' 
                src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                alt="avatar"
            />
            <h1>James Kim</h1>
            <p>프론트앤드 개발자</p>
        </div>
    );
}

