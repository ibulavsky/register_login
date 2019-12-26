import React from 'react';
import ModalsContainer from "./ModalSimpleMessage/ModalsContainer";
import ModalsInput from "./ModalInput/ModalsInput";
import ModalMessage from "./ModalMessage/ModalsMessage";
import ModalMessageInterval from "./ModalMessage/ModalsMessageInterval";
import ModalQuestion from "./ModalQuestion/ModalsQuestion";

const ModalsPage: React.FC = () => {

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90vh'
        }}>
            <ModalsContainer/>
            <ModalsInput/>
            {/*<ModalMessage/>*/}
            <ModalMessageInterval/>
            <ModalQuestion/>
        </div>
    );
};

export default ModalsPage;
