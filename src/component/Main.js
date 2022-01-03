import React from 'react'

import Image1 from '../img/dress.jpg'
import Image2 from '../img/dress3.jpg'
import Image3 from '../img/dress2.jpg'
import Image4 from '../img/dress4.jpg'
import Image5 from '../img/dress1.jpeg'
import Image6 from '../img/dress5.jpg'

function Main() {
    const dresses = [
        {
            image: Image1,
            name: "Floral dress",
            price: "loading...",
        }, {
            image: Image2,
            name: "Red dress",
            price: "loading...",
        },
        {
            image: Image3,
            name: "Baby's dress",
            price: "loading...",
        },
        {
            image: Image4,
            name: "Pinky dress",
            price: "loading...",
        }, {
            image: Image5,
            name: "Floral dress",
            price: "loading...",
        },
        {
            image: Image6,
            name: "Bridal dress",
            price: "loading...",
        },
    ]


    return (
        <div id='home'>

            <div className="max-w-5xl mx-auto">
                <div className="mb-40">
                    <h1 className="font-semibold text-2xl text-center text-red-500">Dresses</h1>
                    <div className="flex flex-col md:flex-row flex-wrap">
                        {
                            dresses.map((dress, dressIndex) => {
                                return (
                                    <div 
                                        key={dressIndex}
                                        className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                                    >
                                        <div 
                                            style={{ backgroundImage: `url(${dress.image})` }}
                                            className={
                                                `rounded bg-center bg-cover shadow-lg w-72 h-72 bg-gray-300
                                                mx-auto md:mr-auto md:ml-o md:mx-0
                                                `
                                            }
                                        ></div>
                                        {
                                            dress.profile ? (
                                                <a
                                                    href={dress.profile || ''}
                                                    target="__blank"
                                                    rel="noreferrer"
                                                    className="cursor-pointer"
                                                >
                                                    <h1 className="font-semibold text-xl mt-3 text-gray-900 border-b border-gray-500 pb-0 inline-block">{dress.name}</h1>
                                                    <h1 className="text-md mt-0 text-gray-700">{dress.price}</h1>
                                                </a>
                                            ) : (
                                                <div>
                                                    <h1 className="font-semibold text-xl mt-3 text-gray-900">{dress.name}</h1>
                                                    <h1 className="text-md mt-0 text-gray-700">{dress.price}</h1>
                                                </div>

                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main