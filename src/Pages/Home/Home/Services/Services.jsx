import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (

        <div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-red-600 ">Service</h3>
                <h2 className="text-5xl font-bold ">Our Service Area</h2>
                <p className="py-6 max-w-xl mx-auto">The Majority Have Suffered Alteration in Some Form, By Humor or Randomised Words Which Do not Look
                    Even Slightly Believeble.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {
                    services.map(service =><ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;