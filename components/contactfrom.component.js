import React, { useState } from "react";
// import { sendContactFrom } from "@/lib/allapi.js"


const Contactfrom = () => {
    const [openAlert, setOpenAlert] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/emailsend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.status === 200) {
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 5000);
        } else {
            alert('Failed to send email.');
        }
        // console.log(data);
    };


    return (
        <>
            <section className="contact-bg w-full text-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
                    <p className="mb-10 font-light text-center text-gray-500 sm:text-xl">Let’s turn your ideas into a stunning online presence! From the initial concept to the final launch, I ensure every detail is perfect. Watch your vision come to life with my expert touch.</p>
                    <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Type your name" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Type your email" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Type your email" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium">Your message</label>
                            <textarea id="message" rows="6" name="message" value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you ..."></textarea>
                        </div>

                        <div className="relative flex justify-end">
                            <svg className="gooey-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="gooey">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>
                            <button
                                type="submit"
                                onClick={handleSubmit} id="gooey-button" className="flex gap-2 items-center !pr-8">
                                <svg className="h-5 w-5 text-green-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                                Send
                                <span className="bubbles">
                                    <span classs="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                </span>
                            </button>
                        </div>

                    </form>
                </div>
            </section>


            {openAlert && <div className="mr-6 mb-6 z-50 bg-[#18181B] border border-gray-700 fixed bottom-0 right-0 shadow-md p-4 flex flex-row rounded-lg">
                <div className="bg-green-600 inline-block rounded-lg p-1 mr-1"></div>
                <p className="p-1 text-white">Email sent successfully!</p>
                <button type="button" onClick={() => setOpenAlert(false)} className="h-5 w-5 text-gray-500 inline-block p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div >}
        </>
    );
}

export default Contactfrom;