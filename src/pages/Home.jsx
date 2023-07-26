import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAbutton from '../components/core/HomePage/Button';
import BannerVideo from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

const Home = () => {
    return (
        <div>
            {/*Section1  */}
            <div className='  relative w-11/12 mx-auto flex flex-col items-center text-white justify-between  '>
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all 
                    duration-200 hover:scale-95 w-fit '>
                        <div className='drop-shadow-md hover:drop-shadow-xl  flex flex-row items-center gap-0 rounded-full 
                        px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 ' >
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={" Coding Skills"} />
                </div>
                <div className='text-center w-[50%] text-md font-bold text-richblack-300 mt-4'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>
                <div className='flex flex-row gap-7 mt-4'>
                    <CTAbutton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAbutton>
                    <CTAbutton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAbutton>
                </div>
                <div className='relative shadow-[0px_0px_20px_rgba(8,_112,_184,_0.7)] mx-3 my-12 w-[54%]'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={BannerVideo} type='video/mp4' />
                    </video>
                    <div className='absolute box-border right-[-16px] top-[4.5%]  border-r-[18px] inset-y-0 h-[99%]
                     w-8'>

                    </div>
                    <div className='absolute box-border w-[99%] border-b-[20px] inset-x-6 bottom-[-20px] h-8'>

                    </div>
                </div>

                {/* {codeSection1} */}
                <div>
                    <CodeBlocks
                        position={`lg:flex-row`}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your <HighlightText text={"coding potential"} />
                                with our online courses.
                            </div>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false
                            }
                        }


                    />
                    codeblock={``}
                    codeColor={""}
                </div>

            </div>
        </div >

    )
}

export default Home