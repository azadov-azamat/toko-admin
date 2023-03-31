import React from 'react';
import {Button, Card, Input, Typography,} from "@material-tailwind/react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {AuthData} from "../../interface/variable.interface";
import {loginUser} from "../../redux/reducers/variable";

function LoginPage(): JSX.Element {

    const dispatch = useDispatch()

    const initialValues: AuthData = {_username: "", _password: "", _subdomain: "toko"}

    const formik = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            // @ts-ignore
            dispatch(loginUser(values))
        }
    })

    return (
        <div className={'w-full h-screen flex justify-center items-center'}>
            <Card color="transparent" shadow={false} className={'shadow shadow-xl p-4 border'}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Toko admin-panel
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input name={'_username'} size="lg" label="Username" onChange={formik.handleChange}/>
                        <Input name={'_password'} type="password" size="lg" label="Password"
                               onChange={formik.handleChange}/>
                    </div>
                    <Button className="mt-6" fullWidth type={"submit"}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;