import React from 'react'
import './home.css';
const tanya = new URL("./Photos/tanya.jpg", import.meta.url)
const insta = new URL("./Photos/insta-logo.png", import.meta.url)
const instaId = new URL("./Photos/insta-id.png", import.meta.url)
const gmail = new URL("./Photos/gmail.png", import.meta.url)
// const like = new URL("./Photos/like.png", import.meta.url)

export default function Home() {
    return (
        <>
            <div>
                <div className='flex justify-between mr-16 mt-16 '>
                    <div>
                        <div className='flex'>
                            {/* welcome to my website */}
                            <p className='intro'>Hey, I am Tanya  Welcome to my website.</p>
                            {/* <img className='h-24 w-24' src={like} alt=''></img> */}
                        </div>
                        {/* instagram id */}
                        <div className='flex -mt-8'>
                            <img className='h-48 w-48' src={insta} alt=''></img>
                            <img className='h-20 mt-14 -ml-10' src={instaId} alt=''></img>
                        </div>
                        {/* gmail side */}
                        <div className='flex -mt-4'>
                            <img className='h-28 w-28 ml-10' src={gmail} alt=''></img>
                            <p className='font-semibold mt-14 ml-4 text-2xl'>DM me for promotion on:- <a className='hover:text-blue-700' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfpKgZjlHmDldsnjRvspbplVDPCjNvHcDqvHlpTGtxQXWpJqWmxtbkggkwjffpTGZbSwBB'>ts1144348@gmail.com</a></p>
                        </div>
                    </div>
                    {/* left tanya photo */}
                    <img className='photo rounded-xl shadow-lg shadow-black' src={tanya} alt=''></img>
                </div>
            </div>
        </>
    )
}
