import React from 'react'
import { useState, useEffect } from 'react'
import {copy, linkIcon, loader, tick} from "../assets"
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  const [article , setArticle] = useState({
    url : "",
    summary : ""
  })
  
  // const [allArticles, setAllArticles] = useState([])

  const [ getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    // Load data from localStorage on mount
    // useEffect(() => {
    //   const articlesFromLocalStorage = JSON.parse(
    //     localStorage.getItem("articles")
    //   );
  
    //   if (articlesFromLocalStorage) {
    //     setAllArticles(articlesFromLocalStorage);
    //   }
    // }, []);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const {data} = await getSummary({articleUrl : article.url});

    if (data?.summary) {
      const newArticle = {...article, 
        summary : data.summary}

      // const updatedAllArticles = [newArticle,  ...allArticles ]

      // update state and local storage
      setArticle(newArticle);
      // setAllArticles(updatedAllArticles);
      // localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log(newArticle);

    }

  }

  return (
    <section className='mt-16 w-full max-w-xl'>
    {/* Search  */}
      <div className='full flex flex-col gap-2 w-full'>
        <form className='relative flex j
              ustify-center items-center'
              onSubmit={handleSubmit}
        >

          <img src={linkIcon} alt='link-icon' 
          className='absolute left-0 my-2 ml-3 w-5' />

          <input 
            type='url' 
            placeholder='Enter the article link'
            className='url_input peer'
            value={article.url}
            onChange={(e) => setArticle({
              ...article, url: e.target.value
            })}
            required
          />

          <button 
            className='submit_btn  
            peer-focus:border-gray-700
            peer-focus:text-gray-700'>
            ⎆
          </button>
                
        </form>

            
      
      </div>

      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      
    </section>
   
  )
}

export default Demo
