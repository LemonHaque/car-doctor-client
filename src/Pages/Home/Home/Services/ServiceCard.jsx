
const ServiceCard = ({ service }) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow rounded border">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-red-600">Price: ${price}</p>
                <div className="card-actions">
                <button className="btn btn-error hover:bg-red-700">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;