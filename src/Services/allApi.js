import axios from "axios";
import { BASE_URL } from "../utils/helper";
import { commonAPI } from "./commonApi";



// fetch allArticles
export const fetchArticles = async () => {
    return await commonAPI("GET",`${BASE_URL}/api/articles`,{
        headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`,
        }
    })
}


// fetch single article
export const fetchSingleArticle = async (articleId,headers = {}) => {
   
    return await commonAPI("GET",`${BASE_URL}/api/articles/${articleId}`,"",headers
      
    )
    
}



// post upvotes
export const postUpVotes = async (articleName, headers = {}) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/articles/${articleName}/upvote`, {}, { headers });
      return response.data;
    } catch (error) {
      console.error("API request error:", error.message);
      throw error; 
    }
  };

// post comment
export const  postComment = async (articleName,commentBody,headers = {})=>{
    return await commonAPI("POST",`${BASE_URL}/api/articles/${articleName}/comments`,commentBody,headers)
}
// postArticle
export const postArticle = async (articleBody, headers) => {
  return await commonAPI("POST", `${BASE_URL}/api/articles/post`, articleBody, headers);
};

// get user added articles

export const fetchUserArticles = async (username,headers) => {
  return await commonAPI("GET",`${BASE_URL}/api/user/${username}`,{},headers)
      
 
}

// deleteArticleController
export const deleteArticle = async (articleId,headers) => {
  console.log("Article ID in the route:", articleId); // Log the articleId to debug
  return await commonAPI("DELETE",`${BASE_URL}/api/article/${articleId}`,{},headers)
      
 
}

