import React, { Fragment, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ForgetPasswordRequest } from '../apiRequest/authRequest'
import { ErrorToast, IsEmail } from '../helper/formHelper'

const ForgetPassword = () => {
    let email = useRef()
    const navigate = useNavigate()

    const onSend = async () => {
        if (email.value) {
            if (IsEmail(email.value)) {
                ErrorToast("Invalid email address.")
            }
            else {
                await ForgetPasswordRequest(email.value).then((result) => {
                    if (result) navigate('/')
                })
            }
        }
    }
    return (
        <Fragment>
            <section className=" ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" className="flex bg-white p-3 items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/tail-of-whale.png" alt="tail-of-whale"/> 

Deep Talk
                    </a>
                    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Forgot Your Password?
                            </h1>
                            <p className="mb-4 text-sm text-gray-700 ">
                                We get it, stuff happens. Just enter your email address below and we'll send you a
                                mail to reset your password.
                            </p>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input ref={(i) => email = i} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " placeholder="name@company.com" required="" />
                                </div>
                                <button onClick={onSend} type="submit" className="w-full text-white bg-[#0C7075] hover:bg-[#138288] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Send Password Reset Mail</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-[#0C7075] hover:underline">Sign up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ForgetPassword
