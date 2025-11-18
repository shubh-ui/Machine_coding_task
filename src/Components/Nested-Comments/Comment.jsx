import { useState } from "react";
import Reply from "./Reply";

const Comment = ({ comment, allComments, addComment, removeComment }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleToggleReply = () => {
    setShowReplyBox((prev) => !prev);
  };

  console.log({ addComment });

  const handlePost = () => {
    addComment(replyText, comment.id);
    setShowReplyBox(false);
    setReplyText("");
  };

  return (
    <>
      <div style={{ gap: "10px", padding: "16px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <div>{comment.text}</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={handleToggleReply}>
              {showReplyBox ? "Cansel" : "Reply"}
            </button>
            <button onClick={() => removeComment(comment.id)}>Remove</button>
          </div>
        </div>
        {showReplyBox && (
          <Reply
            replyText={replyText}
            setReplyText={setReplyText}
            handlePost={handlePost}
          />
        )}
        {comment.childIds.length > 0 &&
          comment.childIds.map((child) => {
            console.log({ allComments });
            return (
              <Comment
                comment={allComments[child]}
                allComments={allComments}
                addComment={addComment}
                removeComment={removeComment}
              />
            );
          })}
      </div>
    </>
  );
};

export default Comment;
