import React from 'react';
import ModalsContainer from "./ModalsContainer";

const ModalsPage: React.FC = () => {

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            <div style={{height: '40vh'}}/>
            <ModalsContainer/>
            <div style={{height: '50vh'}}/>
        </div>
    );
};

export default ModalsPage;
