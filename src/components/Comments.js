



const Comments = ({articleInfo})=>{
    return(
   
        <div className="container mt-4">
        <h3 className="mb-4 bg-light">Comments</h3>
        <div className="list-group">
            {articleInfo.comments.map((comment, i) => (
                <div key={comment.postedby + ':' + comment.text} className="list-group-item">
                    <h5 className="mb-1">Posted by: {comment.postedby}</h5>
                    <p className="mb-1">{comment.text}</p>
                </div>
            ))}
        </div>
       
<div>
    
</div>

    </div>


   
    )
}

export default Comments;