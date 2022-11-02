import React from 'react';
import './mLogin.css'
function MLogin() {
    return (
        <>
            <div className='login_header'>
                <div className='d-flex justify-content-center'>Login</div>
                <div className='d-flex justify-content-end'><a href='/m_home'><i class="fa fa-times-circle-o" aria-hidden="true"></i></a></div>
            </div>
            <div className='p-3 form'>
                {/* <form action="/"> */}
                    <div className="form-group">
                        <label for="usr">Username:</label>
                        <input type="text" className="form-control p-2 pl-3" id="usr" name="username" placeholder='Username'/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control p-2 pl-3" id="pwd" name="password" placeholder='Password'/>
                    </div>
                    <input type="submit" className="m_login_btn" value='Login' />
                {/* </form> */}
            </div>
        </>
    );
};
export default MLogin;