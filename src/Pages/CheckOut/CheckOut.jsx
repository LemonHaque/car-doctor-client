import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id } = service;
    return (
        <div>
            <h2>BOOOk servicce:{title}</h2>

            <form >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />

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

export default CheckOut;