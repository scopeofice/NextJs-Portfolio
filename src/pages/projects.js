import React from 'react'
import Head from 'next/head'
import Layout from '@/Components/Layout'
import AnimateText from '@/Components/AnimateText'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GithubIcon } from '@/Components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import TransitionEffect from '@/Components/TransitionEffect';


const FramerImage = motion(Image);

const FeaturedProject = ({type,title,summary,image,link,github}) =>{
    return(
        <article className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark p-6 bg-light shadow-xl relative dark:bg-dark  dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={image} alt={title} className='w-full h-auto rounded' whileHover={{scale:1.05}} transition={{duration:0.2}}  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 ls:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={github} target='_blank'> <GithubIcon/>{' '} </Link>
                    <Link className='ml-4 rounded bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base' href={link} target='_blank'> Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 shadow-2xl relative dark:bg-dark dark:border-light xs:p-4'> 
             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem] rounded-br-3xl bg-dark  dark:bg-light'/>
             <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto rounded' whileHover={{scale:1.05}} transition={{duration:0.2}}  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='mt-2 w-full flex items-center justify-between'>
                    <Link className='rounded text-lg font-semibold underline md:text-base' href={link} target='_blank'> Visit </Link>
                    <Link className='w-8 md:w-6' href={github} target='_blank'> <GithubIcon/> </Link>
                </div>
            </div>
        </article>
    )
}


export default function projects() {

  return (
    <>
        <Head>
            <title>Shubham Ghodkhande | Projects Page</title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect/>
        <main className='w-full flex mb-16 items-center justify-center flex-col dark:text-light'>
            <Layout className='pt-16'>
                <AnimateText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                    <FeaturedProject
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    type="Featured Project"
                    github="/"
                    link="/"
                    image={project1}
                    />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="Crypto Screener Application"
                    type="Project-1"
                    github="/"
                    link="/"
                    img={project1}
                    />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="Crypto Screener Application"
                    type="Project-2"
                    github="/"
                    link="/"
                    img={project1}
                    />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    type="Featured Project"
                    github="/"
                    link="/"
                    image={project1}
                    />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="Crypto Screener Application"
                    type="Project-3"
                    github="/"
                    link="/"
                    img={project1}
                    />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="Crypto Screener Application"
                    type="Project-4"
                    github="/"
                    link="/"
                    img={project1}
                    />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}
