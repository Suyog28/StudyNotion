import React from 'react'
import InstructureImage from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import Button from './Button'
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-row gap-20 items-center'>
                <div className='w-[50%]'>
                    <img src={InstructureImage} alt='InstructureImage' className='shadow-white' />

                </div>
                <div className='w-[50%] flex flex-col gap-10'>
                    <div className='text-4xl font-semibold'>
                        Become an <br></br>
                        <HighlightText text={" Instructor"} />
                    </div>
                    <div className='font-medium text-[16px] w-[80%] text-richblack-300'>
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </div>
                    <div className='w-fit'>
                        <Button active={true} linkto={"/signup"}>
                            <div className='flex gap-2 items-center'>
                                Start Teaching Today
                                <FaArrowRight />
                            </div>

                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InstructorSection