import person from "../../../../assets/images/about_us/person.jpg"
import parts from "../../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2 relative mb-20">
                    <img src={person} className="w-3/4 rounded-lg" />
                    <img src={parts} className="w-1/2 rounded-lg absolute right-5 top-1/2 border-white border-l-8 border-t-8" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-red-600">About us</h3>
                    <h2 className="text-5xl font-bold ">We are qualified & of experience in this field</h2>
                    <p className="py-6">There are Many Variation of Lorem ipsum Available, But The Majority Have Suffered Alteration in Some Form, By Humor or Randomised Words Which Do not Look 
                    Even Slightly Believeble.</p>
                    <p className="py-6">The Majority Have Suffered Alteration in Some Form, By Humor or Randomised Words Which Do not Look 
                    Even Slightly Believeble.</p>
                    <button className="btn btn-error hover:bg-red-700">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;