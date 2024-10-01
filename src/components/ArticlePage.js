// src/components/ArticlePage.js
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import { fetchSingleArticle, postUpVotes } from "../Services/allApi";
import Comments from "./Comments";
import { Button } from "react-bootstrap";
import AddComment from "./AddComment";
import UserUser from "../useUser/Useuser";
import { toast,ToastContainer} from "react-toastify";
import { BASE_URL } from "../utils/helper";
import { FaHeart } from 'react-icons/fa';

const ArticlePage = () => {
  // states
  const [articleInfo, setArticleInfo] = useState(null);
  const [hasUpvoted,setHasUpvoted] = useState(false)
  const { articleId } = useParams();
  const { user, isLoading } = UserUser();

  // useEffect singleArticle
  useEffect(() => {
    const loadSingleArticle = async () => {
      if (isLoading) return; 
      if (!user) {
        console.error("User is not authenticated");
        return;
      }

      try {
        const token = await user.getIdToken();
        console.log("Token:", token);
        // headers
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        const data = await fetchSingleArticle(articleId, headers);
       
        setArticleInfo(data.data.Singlearticles);
        const userHasupVoted = data.data.Singlearticles.hasUpvotedbyuser
        setHasUpvoted(userHasupVoted)
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
  if(!isLoading){
    loadSingleArticle();
  }
  }, [articleId, user, isLoading]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!articleId || !articleInfo) {
    return <NotFound />;
  }

  // add upvote
  const addUpvote = async (e) => {
    if(hasUpvoted){
      toast.error("User have already upvoted")
      return
    }
    e.preventDefault();
    try {
      const token = await user.getIdToken();
      console.log("Token:", token);
  
      if (!token) {
        throw new Error("Token is missing or invalid.");
      }
  
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
  
      const data = await postUpVotes(articleId,headers);
      // console.log("Fetched response post votes now:", data.
      //   updatedArticle);
  
      const updatedUpvote = data.updatedArticle;
      // console.log("Fetched updatedUpvote post votes now:", updatedUpvote);
      setArticleInfo(updatedUpvote);
      setHasUpvoted(true)
      toast.success("upvoted successfully")
    } catch (error) {
      console.error("Error adding upvote:", error.message);
      toast.error(`Failed to upvote ${error}`,)
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
    }
  };

  
  
  
  const defaultImageUrl = "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg";
  return (
    <div className="container m-5">
      <h1>{articleInfo.title}</h1>
      <div>
        {user ? (
          <Button className="btn-success " onClick={addUpvote}>
            upVote
            <FaHeart className="" style={{ marginRight: '9px',
            color: hasUpvoted ? ' #F67280' : ' #white', 
            transition: 'color 0.3s ease', 
            fontSize:'24px'
            }} />
          </Button>
        ) : (
          <Button className="btn-danger">login to Upvote</Button>
        )}
      </div>
      <img
        src={articleInfo.image ? `${BASE_URL}/uploads/${articleInfo.image}` : defaultImageUrl}
        className="img-fluid m-3"
        style={{ height: "350px" }}
        alt=""
      />
      <div>
        {articleInfo.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <Comments articleInfo={articleInfo} />
      {user ? (
        <div>
          <AddComment
            articleInfo={articleInfo}
            onCommentUpdated={(updatedNewComment) =>
              setArticleInfo(updatedNewComment)
            }
          />
        </div>
      ) : (
        <Button className="mt-3">login to comment</Button>
      )}
      <div>
        <div className="mt-3">
          <h3 className="bg-light">upVotes</h3>
          <p>Total upvotes: {articleInfo.upvotes}!!</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  
  );
};

export default ArticlePage;
