import React from 'react';

interface NekoProps {
    name: string
    error: string | undefined
    isLoading: boolean
    logoutCallback: () => void
}

const Neko: React.FC<NekoProps> = ({isLoading, logoutCallback, error, name}) => {

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
           Profile

            {isLoading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : name
                        ? <div style={{color: 'lime'}}>{name}</div>
                        : <div><br/></div>
            }
            <button onClick={logoutCallback}>Logout</button>
        </div>
    );
};

export default Neko;
