// import React from 'react'

// const Testimonals = () => {
//   return (
//     <div>
//       <div class="pl-10 text-[#333] poppins-medium">
//             <div class="max-w-6xl mx-auto">
//                 <div class="grid lg:grid-cols-3 gap-4">
//                     <div class="col-span-2">
//                         <h2 class="text-2xl font-extrabold">What our happy client say</h2>
//                         <p class="text-sm text-[#333] mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
//                     </div>
//                     <div class="flex space-x-4 items-end justify-end">
//                         <div class="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
//                                 <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
//                             </svg>
//                         </div>
//                         <div class="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
//                                 <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="grid lg:grid-cols-3 gap-12 mt-12">
//                     <div class="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_2.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 class="text-xl font-extrabold">John Doe</h4>
//                             <p class="mt-1 text-xs text-gray-400">Founder of Rubik</p>
//                         </div>
//                         <div class="mt-4">
//                             <p class="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div class="flex space-x-2 mt-4">
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>
//                     <div class="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_3.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 class="text-xl font-extrabold">Mark Adair</h4>
//                             <p class="mt-1 text-xs text-gray-400">Founder of Alpha</p>
//                         </div>
//                         <div class="mt-4">
//                             <p class="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div class="flex space-x-2 mt-4">
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>
//                     <div class="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_4.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 class="text-xl font-extrabold">Simon Konecki</h4>
//                             <p class="mt-1 text-xs text-gray-400">Founder of Labar</p>
//                         </div>
//                         <div class="mt-4">
//                             <p class="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div class="flex space-x-2 mt-4">
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Testimonals
import { useState } from "react"

const Testimonals = () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati "
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14 pb-[90px]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-[#54aaa1] font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-teal-600 focus:ring ${currentTestimonial == idx ? "bg-teal-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Testimonals