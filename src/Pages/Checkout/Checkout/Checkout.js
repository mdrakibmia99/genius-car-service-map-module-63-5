import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service]=useServiceDetail(serviceId);
    const [user]=useAuthState(auth);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order ={
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value,
            email:user.email
        }
        axios.post('https://thawing-lowlands-83402.herokuapp.com/order',order)
        .then(response=>{
            console.log(response);
            const {data}=response;
            if(data.insertedId){
                toast('Your Order is Booked!!')
                  event.reset();
            }
        })
    
    }
    // const [user,setUser]=useState({
    //     name:"rakib",
    //     email:"rakib@gamil.com",
    //     address:'gazipur',
    //     phone:'01913547448'

    // })
    // const handleAddress =event=>{
    //     const {address,...rest}=user;
    //     const newAddress=event.target.value;
    //     const newUser={address:newAddress,...rest};
    //     setUser(newUser);

    // }

   
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout  your booking:{service.name}</h2>
            <form className='text-center ' onSubmit={handlePlaceOrder}>
             <input  className='w-100 mb-2' type="text "  value={user?.displayName} name='name'    disabled />
                <br />
                <input className='w-100 mb-2'  type="email " value={user?.email} name='email'     disabled/>
                <br />
                <input className='w-100 mb-2'  type="text "  value={service?.name} name='service' disabled  /> 
                <br />
                <input className='w-100 mb-2'  type="text" name='address' placeholder='Address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2'  type="text "  name='phone' placeholder='Phone'  required/>
                <br />
                <input className='btn btn-primary'  type="submit" value="Place Order" />
                
            </form>
        </div>
    );
};

export default Checkout;