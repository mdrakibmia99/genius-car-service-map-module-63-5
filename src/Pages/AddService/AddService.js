import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://thawing-lowlands-83402.herokuapp.com/service`;

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log( result);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>please add a service</h2>
            <form className='d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='name'  {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <textarea placeholder='description' {...register("description", { required: true })} />
                {/* errors will return when field validation fails  */}
                <input placeholder='price' type={'number'} {...register("price", { required: true })} />
                <input placeholder='Photo URL' type={'text'} {...register("img", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value={"add service"} />
            </form>
        </div>
    );
};

export default AddService;