import React, { useState, useEffect } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

const Register = () => {
  const apiKey = "EQ3OTHXwq564xk";
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = [];
      try {
        for (let i = 0; i < 4; i++) {
          const apiUrl = `https://api.multiavatar.com/${
            i + Math.round(Math.random() * 100000)
          }?apikey=${apiKey}`;
          const image = await axios.get(apiUrl);
          const buffer = new Buffer(image.data);
          data.push(buffer.toString("base64"));
        }
        setAvatars(data);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  const handleAvatarSelection = (avatarIndex) => {
    setSelectedAvatar(avatarIndex);
  };
  console.log(selectedAvatar);
  return (
    <Layout>
      <section className="md:my-20 my-12 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign up with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoFacebook
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoGoogle
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiOutlineTwitter
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <div className="text-center mb-2">
            <p className="text-sm text-gray-500">Select an Avatar</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            {avatars.map((avatar, index) => (
              <img
                src={`data:image/svg+xml;base64,${avatar}`}
                alt={`Avatar ${index + 1}`}
                key={index}
                className={`rounded-full w-[50px] h-[50px] cursor-pointer ${
                  selectedAvatar === avatar ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => handleAvatarSelection(avatar)}
              />
            ))}
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Agree to terms and conditions</span>
            </label>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="my-4 flex justify-center items-center gap-1 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <Link to="/login">
              <div className="text-red-600 transition-all duration-100 hover:underline hover:underline-offset-4">
                Login
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
