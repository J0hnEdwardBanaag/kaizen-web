import React, { useState } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div class="container mx-auto px-6 py-12" id="about">
            <div className="text-center">
                <p class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 ">About Us</p>
                <p class="text-sm font-medium  mb-12 text-gray-500 ">Our Global Team</p>
            </div>
            <div class="grid  md:grid-cols-2 gap-6">
                <div class="flex flex-col bg-white rounded shadow p-6">
                    <h2 class="text-2xl font-medium mb-4 border-l-4 border-sky-500 p-2">Who We Are</h2>
                    <p class="text-gray-600">
                        We are a team of dedicated professionals who are passionate about building great products. A organization composed of diverse talents in areas of engineering, programming, user interface design, and analytics.
                    </p>
                    {isVisible &&
                        // <div className="bg-blue-500 p-4">Visible Content</div>
                        <span class="text-gray-600">
                            <br />
                            <p>
                                Our focus in manufacturing started about fifteen years ago when our key resources started collaborating with a major manufacturing company in Southern California. The team’s primary goals were to maintain and enhance the company’s competitive edge. Jointly, they identify, design, develop, implement, and test viable business and technical solutions that most of their competitors did not have. In 2016, we decided to organize a team that is solely focused on developing manufacturing productivity tools.
                            </p>
                            <br />
                            <p>
                                All our Metrics tools are assembled within the US, while critical components are sourced and tested from local and international vendors. A global team of systems engineers, database designers and testers work together using a seamless protocol, to ensure that the software development process complies with the highest quality standards.
                            </p>
                        </span>
                    }

                    <div class="mt-auto py-2">
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="text-base font-semibold text-indigo-600 hover:text-indigo-700" >

                            {isVisible ? 'Hide' : 'Learn More'}

                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded shadow p-6">
                    <h2 className="text-2xl font-medium mb-4 border-l-4 border-sky-500 p-2">What We Do</h2>
                    <p className="text-gray-600">
                        At <strong>4488 Kaizen</strong>, we specialize in crafting exceptional, user-friendly products to ensure an unparalleled customer experience. Our approach is rooted in a steadfast commitment to innovation, collaborative teamwork, and the unwavering pursuit of excellence across all facets of our operations.
                    </p>
                    <div class="mt-auto py-2">
                        <button className="text-base font-semibold text-indigo-600 hover:text-indigo-700" >
                            Contact Us Now
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default About;



