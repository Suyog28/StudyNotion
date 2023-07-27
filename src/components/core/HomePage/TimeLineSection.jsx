import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"

const timeline = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: ""
    },
    {
        Logo: Logo2,
        Heading: "Leadership",
        Description: ""
    },
    {
        Logo: Logo3,
        Heading: "Leadership",
        Description: ""
    },
    {
        Logo: Logo4,
        Heading: "Leadership",
        Description: ""
    }
];

const TimeLineSection = () => {
    return (
        <div>
            <div className='flex flex-row gap-15 items-center'>

                <div className='w-[45%] flex flex-col gap-10'>
                    {
                        // eslint-disable-next-line array-callback-return
                        timeline.map((element, index) => {
                            < div className='flex flex-row items-center gap-5'>
                                <div className='flex items-center'>
                                    {element.Logo}
                                </div>
                                <div>
                                    <h2></h2>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div >
        </div>
    )
}

export default TimeLineSection