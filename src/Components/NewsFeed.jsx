import React from 'react'
import axios from 'axios'
import img from '../images/michael.jpg'
import { useState, useEffect } from 'react'
function newsFeed() {
    const [article, setArticle] = useState(null)
    console.log(article)
    useEffect(()=>{
        async function getData(){
        const options = {
          method: 'GET',
          url: 'https://h-crypto-news.p.rapidapi.com/cryptonews',
          headers: {
            'X-RapidAPI-Host': 'h-crypto-news.p.rapidapi.com',
            'X-RapidAPI-Key':import.meta.env.VITE_RAPIDAPI_KEY,
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setArticle(response.data)
        } catch (error) {
            console.error(error);
        }}
        getData();
    },[])
  return (
    <div className='ml-12 mt-10 mb-3 pb-6 border-2 rounded-2xl border-indigo-50  px-2 border-opacity-50'>
        <div className=' mx-auto flex justify-center items-center mt-8   rounded-2xl'>
            <img src={img} alt="" className='h-60 w-70  rounded-2xl' />
            </div>
            <h1 className='ml-10 mt-10 md:text-lg italic font text-3xl font-black'>Crypto Currency News to keep you up to date about the market...</h1>

        {article && article.map((art)=>{
            const {title, url} = art
            return (
                <div className=' text-black mb-3 mt-8'>
                  <ul>
                    <li >
                    <a href={art.url} className=' list-item text-center justify-center text-black ml-12'>
                    <h3>{art.title} 
                   
                    </h3>
                    </a>
                   
                    </li>
                  </ul>
                 
                </div>
            )
        
        })}
    
    </div>
  )
}

export default newsFeed