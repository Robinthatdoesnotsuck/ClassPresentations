"use client"
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

function Register() {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onFormSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Last Name</label>
                <input {...register("lastName")} />
                <label>Email</label>
                <input type="email" {...register("email")} />
                <label>Password</label>
                <input type="password" {...register("password")} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Register