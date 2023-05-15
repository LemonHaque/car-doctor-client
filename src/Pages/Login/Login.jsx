import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                console.log(loggedUser);
                
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('jwt response',data);
                    // warning: local storage is not the best, this is the second best 
                    localStorage.setItem('car-access-token', data.token);
                    navigate(from, { replace: true })
                })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20">
                    <img src={img} alt="" />
                </div>
                <div className="card rounded border flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>

                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="login" className="btn btn-error hover:bg-red-700" />
                            </div>
                        </form>
                        <p className="text-center my-4">New to Car Doctor? <Link className="text-red-600 font-bold" to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;