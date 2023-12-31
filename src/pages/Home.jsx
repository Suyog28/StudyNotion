import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAbutton from '../components/core/HomePage/Button';
import BannerVideo from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Button from '../components/core/HomePage/Button';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from '../components/common/Footer';


const Home = () => {
    return (
        <div>
            {/* Section1 */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>
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
                <div className='relative shadow-[0px_0px_20px_rgba(8,_112,_184,_0.7)] mx-3 my-12 w-[85%]'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={BannerVideo} type='video/mp4' />
                    </video>
                    <div className='absolute box-border right-[-16px] top-[4.5%]  border-r-[18px] inset-y-0 h-[98.9%]
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
                            <div className='text-[40px] font-semibold'>
                                Unlock your <HighlightText text={"coding potential "} />
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
                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
                        codeColor={""}
                    />
                </div>
                {/* {codeSection2} */}
                <div>
                    <CodeBlocks
                        position={`lg:flex-row-reverse`}
                        heading={
                            <div className='text-[40px] font-semibold'>
                                Start <HighlightText text={"coding"} />
                                <p className='text-[40px] font-semibold'>
                                    <HighlightText text={"in seconds"} />
                                </p>
                            </div>


                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
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
                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-richblack-50"}
                    />
                </div>
                <ExploreMore />
            </div>
            {/*Section 2  */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between
                     gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <Button active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </Button>

                            <Button active={false} linkto={"/login"}>
                                <div>
                                    Learn More
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-11/12 mt-[95px] max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <div className=' flex flex-row  gap-[90px] mb-[50px]'>
                        <div className='text-richblack-700 font-semibold text-4xl mt-0 pt-0'>
                            Get the skills you need for a <HighlightText text={"job"} />
                            <p><HighlightText text={"that is in demand"} /></p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <div className='text-[16px] text-richblack-500 font-semibold'>
                                <p>The modern StudyNotion is the dictates its own terms. Today, to be a <br></br>competitive
                                    specialist requires more than professional skills.</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <Button active={true} linkto={"/login"}>
                                    <div>
                                        Learn More
                                    </div>
                                </Button>
                            </div>
                        </div>

                    </div>
                    <TimeLineSection />
                    <LearningLanguageSection />
                </div>
            </div>

            {/*Section 3 */}

            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter: bg-richblack-900 text-white'>
                <InstructorSection />
                <h2 className='text-center text-4xl font-semibold mt-10'> Reviews from other learners</h2>
            </div>

            {/*Footer */}
            <Footer />
        </div>

    )
}

export default Home