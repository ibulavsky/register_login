import React from 'react';
import SignIn from "./SignIn";

const SignInContainer: React.FC = () => {
    // logic

    return (
        <SignIn login={''} password={''} authenticationError={false}
                onLoginChanged={()=>{}} onPasswordChanged={()=>{}} onSubmit={()=>{}}  />
    );
};

export default SignInContainer;
