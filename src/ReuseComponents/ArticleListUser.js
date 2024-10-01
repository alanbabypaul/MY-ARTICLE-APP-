import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../utils/helper';

// Component to list articles for the user
const ArticleListUser = ({ userArticle, onDelete }) => {
    const defaultImageUrl = "https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg";

    const handleDelete = (articleId) => {
    
        const confirmDelete = window.confirm("Are you sure you want to delete this article?");
        
        if (confirmDelete) {
            onDelete(articleId);
            console.log(articleId)
        }
    };

    return (
        <div>
            {userArticle.map((article) => {
           
                const contentPreview =
                    article.content && article.content.length > 0
                        ? typeof article.content[0] === "string"
                            ? article.content[0].substring(0, 250) + "......"
                            : "Content is not available"
                        : "No content available";

                return (
                    <div
                        className="border border-dark rounded p-4 mb-4 bg-white shadow-dark"
                        key={article._id}
                    >
                        <h2>
                            <span
                                style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
                            >
                                {article.title}
                            </span>
                        </h2>
                        <img
                            className="img-fluid"
                            style={{ height: "350px" }}
                            src={article.image ? `${BASE_URL}/uploads/${article.image}` : defaultImageUrl}
                            alt="Article"
                        />
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: contentPreview }}
                        />
                        <Button
                            variant="danger"
                            className="mt-2"
                            onClick={() => handleDelete(article._id)}
                        >
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleListUser;
