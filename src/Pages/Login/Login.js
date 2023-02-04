import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[500px] flex justify-center items-center m-9">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h1 className="text-xl text-center my-6">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* ----------------- email ----------------- */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email address is required!" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm ml-1 mt-2">{errors.email?.message}</p>
            )}
          </div>

          {/* -------------- password ------------------ */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters or more.",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm ml-1 mt-2">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text text-sm">Forgot password?</span>
            </label>
          </div>
          <input />

          {/* ----------------- input ------------------- */}
          <input
            type="submit"
            value="login"
            className="btn btn-accent w-full text-white"
          />
        </form>
        <p className="text-sm mt-6 text-center">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-primary">
            Create new account.
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="uppercase btn btn-outline w-full mb-3">
          continue with google
        </button>
        <button className="uppercase btn btn-outline w-full">
          continue with facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
