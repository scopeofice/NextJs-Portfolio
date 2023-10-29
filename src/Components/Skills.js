import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({name,x,y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light  bg-dark text-light py-3 px-6 cursor-pointer shadow-dark absolute dark:text-dark dark:bg-light' whileHover={{scale:1.05}} initial={{x:0,y:0}}  whileInView={{x:x,y:y, transition:{duration:1.5}}}  viewport={{once:true}}>
            {name}
        </motion.div>
  )
}

export default function Skills() {
  return (
    <>
     <h2 className='font-bold text-6xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDarkLg
     md:bg-circularLightMd md:dark:bg-circularDarkMd
     sm:bg-circularLightLSm sm:dark:bg-circularDarkSm
     dark:bg-circularDark lg:h-[80hvh] sm:h-[60vh] xs:h-[50vh]' >
        <motion.div className='flex items-center justify-center rounded-full font-semibold xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2 bg-dark dark:text-dark dark:bg-light text-light p-8 cursor-pointer shadow-dark ' whileHover={{scale:1.05}}>
            Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="10vw" />
        <Skill name="JAVA" x="20vw" y="6vw" />
        <Skill name="SPRING" x="-20vw" y="12vw" />
        <Skill name="SQL" x="-20vw" y="-15vw" />
     </div> 
    </>
  )
}
