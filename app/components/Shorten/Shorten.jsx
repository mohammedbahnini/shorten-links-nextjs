'use client'
import React, { useRef, useState } from 'react'
import Container from '../Utils/Container'
import ShortenResult from './ShortenResult'
import cx from 'classnames';
import { Oval } from 'react-loader-spinner';
import shortenLink from '@/app/api/api';


function Shorten() {
    const [hasError, setHasError] = useState(false);
    const [shortenLinks, setShortenLinks] = useState([{ url: 'https://www.frontendmentor.io', shortenUrl: 'https://rel.ink/k4lKyk' }, { url: 'https://www.frontendmentor.io', shortenUrl: 'https://rel.ink/k4lKyk' }]);
    const [isInProcess, setIsInProcess] = useState(false);
    const textRef = useRef();

    const handleClick = async () => {


        setIsInProcess(true);
        setHasError(false);

        const value = textRef.current.value;

        if (value.trim().length == 0) {
            setIsInProcess(false);
            setHasError(true);
        }
        else {

            const data = await shortenLink(value);


            // case api returns an error
            if (!data.status) {
                setHasError(true);
                setIsInProcess(false);
            }
            else {
                setHasError(false);
                setIsInProcess(false);
                const { url, shortenUrl } = data;
                setShortenLinks(prev => [...prev, { url, shortenUrl }])
                textRef.current.value = '';
            }
        }
    }

    return (
        <section className='relative -top-20'>

            <div className='relative'>
                <Container>
                    <div className='rounded-xl bg-neutral-very-dark-blue p-6 md:py-14 md:px-16  items-center bg-[url("/images/bg/bg-shorten-mobile.svg")]   md:bg-[url("/images/bg/bg-shorten-desktop.svg")] bg-cover  bg-co  '>

                        <div className='flex flex-col md:flex-row items-end gap-9 md:gap-6  relative' >


                            <div className='flex-1 w-full md:w-auto  '>

                                <input type='text' ref={textRef}
                                    className={cx('bg-white px-4 py-2 md:px-8 md:py-3 font-medium text-xl leading-9  placeholder:text-neutral-grayish-violet text-primary-dark-violet rounded-xl w-full  ', {
                                        'outline outline-[3px] -outline-offset-[1px] outline-seconary-red placeholder:text-seconary-red/80': hasError,
                                        'outline-none': !hasError
                                    })} placeholder='Shorten a link here ...' />

                            </div>

                            <button onClick={handleClick}
                                className='block bg-primary-cyan hover:bg-primary-cyan-hover text-white font-bold text-lg md:text-xl cursor-pointer rounded-xl px-10 py-3 md:py-4 outline-none w-full  md:w-[180px]  '>{
                                    isInProcess ?
                                        <Oval
                                            visible={true}
                                            height="25"
                                            width="80"
                                            color="white"
                                            secondaryColor='white'
                                            ariaLabel="oval-loading"
                                            wrapperStyle={{}}
                                            strokeWidth={4}
                                            wrapperClass="*:mx-auto"
                                        /> : 'Shorten it!'
                                }
                            </button>

                            <span className={cx('absolute text-seconary-red top-16  md:-bottom-8 italic font-medium text-bas left-0 ', { 'visible inline': true, 'hidden invisible': !hasError })}>Please add a link</span>
                        </div>

                    </div>
                </Container>

            </div>

            <Container>
                <ShortenResult links={shortenLinks} />
            </Container>
        </section>
    )
}

export default Shorten
