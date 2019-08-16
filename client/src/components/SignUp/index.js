import React from 'react';


function AdminSignIn() {
    return (
        <div>
            <h2>New username and password</h2>
            <form action="/login" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default AdminSignIn