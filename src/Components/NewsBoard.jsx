import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export const NewsBoard = ({category}) => {

    const[articles,setarticles]=useState([]);

    useEffect(()=>{
        let url=` https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(url).then(response=>response.json()).then(data=> setarticles(data.articles));
    },[category])


  return (
    <div>
        <h1 className='text-center'><span className="badge bg-danger">Latest News</span>-Top HeadLines</h1>
        {articles.map((news,index)=>{
                return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
export default NewsBoard