import React from 'react'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Grayson Butcher</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am a manufacturing engineer learning about software engineering.
                Through my self-study I have learned that software engineering is
                what I want to do with my life. I have a passion for learning and 
                there is no better career than software engineering. I first found 
                interest in software engineering while working for the Federal 
                Aviation Administration and haven't been able to shake it since. 
                <br />
                <br />
                Due to my undergraduate in Engineering Technology-Manufacturing, I 
                offer unique problem-solving skills. With years of mathematics 
                and manufacturing processes, logical, step by step problem solving 
                has become second nature. You can learn more about my hobbies and 
                experiences at my YouTube channel{' '}
                <a 
                href="https://www.youtube.com/channel/UCSQkrI5rM8C_36Ginklj_Gg"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
                >
                    Grayson Butcher
                </a>{' '}
            </p>
        </div>
    )
}

export default Intro;