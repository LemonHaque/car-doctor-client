import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id,title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow rounded border">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-red-600">Price: ${price}</p>
                <div className="card-actions">
                <Link to={`/book/${_id}`}>
                <button className="btn btn-error hover:bg-red-700">Book Now</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;