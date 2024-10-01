import { useEffect, useState } from "react";
import useUser from "../useUser/Useuser";
import { deleteArticle, fetchUserArticles } from "../Services/allApi";
import ArticleListUser from "../ReuseComponents/ArticleListUser";
import { toast, ToastContainer } from "react-toastify";

const UserArticle = () => {
  const { user } = useUser();
  const [userArticle, setUserArticle] = useState([]);

  const handleDeleteArticle = async (articleId) => {
    if (!articleId) {
        toast.error("Article ID is missing");
        return;
    }

    try {
     
        const token = await user.getIdToken();
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };

     
        const result = await deleteArticle(articleId, headers);
        
        if (result && result.status === 200) {
    
            toast.success("Article deleted successfully");
            
           
            setUserArticle(prevArticles => prevArticles.filter(article => article._id !== articleId));
        } else {
           
            toast.error("Failed to delete article");
        }
    } catch (e) {

        console.error("Error deleting article:", e);
        toast.error("Failed to delete article");
    }
};

  useEffect(() => {
    const fetchUserUploadedArticles = async () => {
      if (user && user.email) {
        try {
          const token = await user.getIdToken();
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

          const result = await fetchUserArticles(user.email, headers);
          setUserArticle(result.data.articles);
          console.log(userArticle)
        } catch (e) {
          console.error(e);
        }
      }
    };
    fetchUserUploadedArticles();
  }, [user]);

  return (
    <div>
      {userArticle.length === 0 ? (
        <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1726419387~exp=1726419987~hmac=fa942ffa6f87b155b3d01218005aa8e3059204ffa1125473ace4cdf270932fc3" alt="" />
      ) : (
        <ArticleListUser
          userArticle={userArticle}
          onDelete={handleDeleteArticle}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default UserArticle;
