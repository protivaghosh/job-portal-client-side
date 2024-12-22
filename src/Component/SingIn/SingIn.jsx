import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottiData from '../../assets/Animation.json'
import AuthContext from '../AuthContext/AuthContext';
const SingIn = () => {
    const {signInUser}=useContext(AuthContext)
 const handleSingIn =(event)=>{
 event.preventDefault()
 const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    const user={email, password}
    console.log(user)

    signInUser(email, password)
     .then(result=>{
        console.log('protiva',result.user)
     })
     .catch(error=>{
        console.log(error.message)
     })
    }
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     <Lottie animationData={lottiData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="ml-8 mt-4 text-3xl font-bold">Login Now!</h1>
      <form onSubmit={handleSingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingIn;