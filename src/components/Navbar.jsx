import React from 'react'

let a = `<`
let b = `>`

const Navbar = () => {
    return (

        <header className="text-white bg-gray-900 p-5">

            <div className="container mx-auto flex flex-wrap p-5 flex-col gap-5 md:flex-row items-center justify-between">

                <div className='flex items-center gap-10 justify-center'>
                    <div className='font-extrabold text-3xl'>
                        <span>{`${a}`}</span>
                        <span className='text-green-600'>ctrl-C</span>
                        <span>/</span>
                        <span className='text-blue-800'>ctrl-V</span>
                        <span>{`${b}`}</span>
                    </div>

                </div>

                <div>
                    <p className='font-bold'>
                        Store. Copy. Secure.
                    </p>
                </div>

            </div>

        </header>

    )
}

export default Navbar
