
import { useEffect, useState } from 'react'

import {fetchArticles} from '../Services/allApi'

import ArticleList from '../ReuseComponents/ArticleList'

const ArticleListPage = ()=>{

    const [allArticleList,setAllArticleList] = useState([])

    // get allarticles
    useEffect(()=>{
const loadAllarticle = async ()=>{
try{
    const data = await fetchArticles()
    setAllArticleList(data.data.articles)
   
   
   
}catch(error){
    console.error('Error:',error)
    alert('Error fetching articles!')
}
}
loadAllarticle();
    },[])



    return (
        <div className='m-5'>
           <ArticleList allArticleList={allArticleList} />
           
        </div>
        

    )
}
export default ArticleListPage