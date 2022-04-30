import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://thawing-lowlands-83402.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("rakib")
                    if (data.deletedCount > 0) {
                        const remain = services.filter(service => service._id !== id);
                        setServices(remain);
                        console.log("deleted");
                    }
                })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;