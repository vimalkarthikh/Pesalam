import React, { Fragment, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ErrorToast, IsPassword } from '../helper/formHelper'
import { ResetPasswordRequest } from '../apiRequest/authRequest'

const ResetPassword = () => {
    let npassword, cpassword = useRef()
    let navigate = useNavigate()
    let params = useParams()

    const onReset = async () => {
        if (IsPassword(npassword.value)) {
            ErrorToast("Password must be six characters, at least one letter and one number !")
        } else if (npassword.value !== cpassword.value) {
            ErrorToast("Password doesn't match with confirm password.")
        } else {
            await ResetPasswordRequest(npassword.value, params.token).then((result) => {
                if (result) navigate('/')
            })
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
                                Reset Password
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                                    <input ref={(i) => npassword = i} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                </div>
                                <div>
                                    <label for="Cpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                    <input ref={(i) => cpassword = i} type="password" name="Cpassword" id="Cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0C7075] focus:border-[#0C7075] block w-full p-2.5 " required="" />
                                </div>
                                <button onClick={onReset} type="submit" className="w-full text-white bg-[#0C7075] hover:bg-[#148e94] focus:ring-4 focus:outline-none focus:ring-[#4ebac0] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Save</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Already have an account? <Link to="/" className="font-medium text-[#0C7075] hover:underline ">Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ResetPassword
