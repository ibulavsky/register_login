import React from 'react';

interface RegisterProps {

}

const Register: React.FC<RegisterProps> = ({}) => {

    return (
        <div>
            <h2>Форма регистрации</h2>
            <div>
                <div>
                    <span>E-mail: </span>
                    <input type={"e-mail"} placeholder={'Your e-mail'}
                        // value={''}
                        // onChange={}
                    />
                </div>
                <div>
                    <span>First password: </span>
                    <input type={"password"} placeholder={'Enter password'}
                        // value={this.state.password}
                        // onChange={this.onPasswordChanged}
                    />
                </div>
                <div>
                    <span>Second password: </span>
                    <input type={"password"} placeholder={'Enter password'}
                        // value={this.state.password}
                        // onChange={this.onPasswordChanged}
                    />
                </div>
                {/*{this.props.authenticationError && <mark>Имя пользователя или пароль введены не верно.</mark>}*/}
                <button
                    // onClick={this.onSubmit}
                >Register
                </button>
            </div>
        </div>
    );
};

export default Register;
