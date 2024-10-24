import { useState } from "react";


function Login() {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    function eventhandler(e) {
        e.preventDefault();
        setEmail('')
        setPassword('')
    }



    return (
        <>
            <div className="flex w-screen h-screen items-center justify-center">
                <div className="border-2 rounded-xl border-emerald-600 p-20">

                    <form className="flex flex-col justify-center items-center" onSubmit={eventhandler}>
                        <input required className="text-white outline-none text-xl bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 placeholder:text-gray-400" type="email" placeholder="Enter your Email"
                            value={email}
                            onChange={
                                (e) => {

                                    setEmail(e.target.value)
                                }
                            } />
                        <input required className="text-white outline-none text-xl mt-5 bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 placeholder:text-gray-400" type="password" placeholder="Enter your password"
                            value={password}
                            onChange={
                                (e) => {

                                    setPassword(e.target.value)

                                }
                            }
                        />
                        <button className="mt-7 w-full text-white outline-none text-xl bg-emerald-600 rounded-full py-3 px-4 placeholder:text-white">Login</button>
                    </form>

                </div>

            </div>




        </>
    );


}

export default Login;