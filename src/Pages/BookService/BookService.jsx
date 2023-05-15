import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {

    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext);


    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            email,
            date,
            img,
            price: price,
            phone,
            service: title,
            service_id: _id,
            status: "pending"

        }
        console.log(booking);


        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Service Booked successfully'
                      })  
                }
            })
    }
    return (
        <div className="mx-14">
            <h2 className="text-3xl text-center font-bold my-4">Book service:{title}</h2>

            <form onSubmit={handleBookService}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input type="text"
                            name="name" placeholder="Name"
                            defaultValue={user?.displayName}
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Date</span>
                        </label>
                        <input type="date"
                            name="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="number"
                            name="phone" placeholder="Your Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text"
                            name="email"
                            placeholder="Your Email"
                            defaultValue={user?.email}
                            className="input input-bordered" />

                    </div>
                </div>
                <div className="card-body ">
                    <div className="form-control mt-6">
                        <input className="btn btn-error hover:bg-red-700" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookService;