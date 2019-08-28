import React from "react";

export default function AdminSignUp(props) {
    const [values, setValues] = React.useState({
        username: '',
        password: ''
    })

    // register = event => {
    //     event.preventDefault();
    //     API.register({
    //         username: this.state.username.toLowerCase(),
    //         password: this.state.password
    //     })
    //         .then(res => {
    //             if (res.data.message) {
    //                 this.setState({
    //                     error: res.data.message
    //                 });
    //             } else {
    //                 console.log("registration successful");
    //             }
    //         })
    // }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
    };

        return (
            <div>
                <h2>New username and password</h2>
                <form action="/login" method="post">
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            label="username"
                            placeholder="new username" />
                        <br/>
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            label="Password" 
                            placeholder="new password"/>
                        <br/>
                        <input 
                            type="submit" 
                            value="Sign Up" 
                            onClick={event => props.register(event,
                                {
                                    username: values.username,
                                    password: values.password 
                                })} />
                    </div>
                </form>
            </div>
        )


}
