import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/helper";
import useUser from "../useUser/Useuser";
import { toast, ToastContainer } from "react-toastify";




const ArticleList = ({ allArticleList }) => {
  const defaultImageUrl =
    "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg";
  const { user } = useUser();
  const navigate = useNavigate();
  const handleClick = (articleName) => {
    if (user) {
      navigate(`/article/${articleName}`);
    } else {
      toast.error("Please log in to view the article.");
    }
  };
  return (
    <div>
      {allArticleList.map((article) => {
        console.log(article);

        const contentPreview =
          article.content && article.content.length > 0
            ? typeof article.content[0] === "string"
              ? article.content[0].substring(0, 250) + "......"
              : "Content is not available"
            : "No content available";

        return (
          <div
            className="border border-dark rounded p-4 mb-4 bg-white shadow-dark"
            key={article.name}
          >
           <h2>
              <span
                style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
                onClick={() => handleClick(article.name)}
              >
                {article.title}
              </span>
            </h2>
            <img
              className="img-fluid"
              style={{ height: "350px" }}
              src={`${BASE_URL}/uploads/${article.image}` || defaultImageUrl}
              alt=""
            />
            {user &&  (
              <p className="mt-2 text-muted">
                <strong>Author:</strong> {article.name}
              </p>
            )}
            <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: contentPreview }}
            >
 

            </div>
            {/* <p dangerouslySetInnerHTML={{ __html: contentPreview }}></p> */}
            <ToastContainer />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
