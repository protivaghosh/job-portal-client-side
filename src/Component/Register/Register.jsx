import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import AnimationData from "../../assets/lottie.json"
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const {createUser}=useContext(AuthContext)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
const handleSubmit=(event)=>{
    event.preventDefault()
    const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    const user={email, password}
    console.log(user)

    // password validation
    if(!passwordRegex.test(password)){
      Swal.fire({
       title: 'Error!',
       text: 'at least one uppercase and 6 character',
       icon: 'error',
       confirmButtonText: 'Try Again'
     })
     return;
}
 createUser(email, password)
.then(result =>{
  console.log(result.user)
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
     <Lottie animationData={AnimationData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="ml-8 mt-4 text-3xl font-bold">Register Now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;