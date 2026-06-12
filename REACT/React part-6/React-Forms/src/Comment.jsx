import { useState } from "react";
import "./comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job",
      rating: 3,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h2>All comments</h2>

        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
      </div>

      <hr></hr>

      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}