"use client"
import { useState } from "react";

export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values)
    };
    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}
function Login() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {

    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                />

                <input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                />
                <button type='submit'>Login</button>
            </div>
        </form>
    );
}

export default Login;