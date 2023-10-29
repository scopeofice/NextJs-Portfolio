import React, { useRef } from 'react'
import AnimateText from '@/Components/AnimateText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import arti from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import { motion, useMotionValue } from 'framer-motion'
import art from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import TransitionEffect from '@/Components/TransitionEffect';


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse (event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave (event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link target='_blank' href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{x:x,y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}} ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw'/>
        </Link>
    )

}

const Article = ({ image, title, date, link }) => {
    return (
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light dark:border-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col'>
            {/* <Link target='_blank' href={link}><h2 className='capitalize font-semibold hover:underline'>{title}</h2></Link> */}
            <MovingImg title={title} img={image} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl relative shadow-2xl '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light' />
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto rounded'  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
            </Link>
        </li>
    )
}


export default function articles() {
    return (
        <>
            <Head>
                <title>Shubham Ghodkhande | Articles Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimateText text="Words can change the world!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedArticle
                            img={art}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />
                        <FeaturedArticle
                            img={art}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Articles</h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            image={arti}
                            date="10/27/2023"
                            link="/"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}
