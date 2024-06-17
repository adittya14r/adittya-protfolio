import React from "react";


const Timeline = () => {
    return (
        <>
            <div className="md:w-1/12"></div>
            <div className="md:w-5/12 timeline-box px-3 ml-12 md:mx-12 md:mx-0">
                <h2 className="text-3xl text-white text-center">Education</h2>
                <ul>
                    <li>
                        <span></span>
                        <div className="title">Dhatrigram High School</div>
                        <div className="info">the best animation , the best toturials you would ever see .</div>
                        <div className="time">
                            <span>17<sup>th</sup> Sep, 2016</span>
                            <span>15<sup>th</sup> May, 2024</span>

                        </div>
                    </li>
                 
                </ul>
            </div>

            <div className="md:w-5/12 timeline-box px-3 ml-12 md:mx-12 md:mx-0">
                <h2 className="text-3xl text-white text-center">Experience</h2>

                <ul>
                    <li>
                        <span></span>
                        <div className="title">eDgeWrapper</div>
                        <div className="info">Associate</div>
                        <div className="time">
                            <span>1<sup>st</sup> April, 2022</span>
                            <span>3<sup>rd</sup> May, 2023</span>

                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div className="title">eDgeWrapper</div>
                        <div className="info">Senior Associate</div>
                        <div className="time">
                            <span>17<sup>th</sup> Jun, 2024</span>
                            <span>17<sup>th</sup> Jun, 2024</span>

                        </div>
                    </li>
                </ul>
            </div>

            <div className="md:w-1/12"></div>

        </>
    );
}

export default Timeline;
