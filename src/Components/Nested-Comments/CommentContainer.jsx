import { useState } from "react";
import Comment from "./Comment";
const intialData = {
  1: {
    id: 1,
    text: "This article helped me understand APIs better!",
    parentId: null,
    childIds: [2, 5],
  },

  2: {
    id: 2,
    text: "Same here! The examples were super clear.",
    parentId: 1,
    childIds: [3, 4],
  },
  3: {
    id: 3,
    text: "Right? The diagrams were helpful too.",
    parentId: 2,
    childIds: [],
  },
  4: { id: 4, text: "I saved it to my bookmarks!", parentId: 2, childIds: [] },

  5: {
    id: 5,
    text: "I think more backend examples would be nice.",
    parentId: 1,
    childIds: [6],
  },
  6: {
    id: 6,
    text: "Yes, especially authentication flows.",
    parentId: 5,
    childIds: [],
  },
};

const CommentContainer = () => {
  const [comments, setComments] = useState(intialData);

  const addComment = (commentTxt, parentId) => {
    console.log(commentTxt, parentId);

    const newId = Date.now();
    const newPost = {
      id: newId,
      text: commentTxt,
      parentId,
      childIds: [],
    };
    console.log({ newPost });

    setComments((prev) => {
      return {
        ...prev,
        [newId]: newPost,
        [parentId]: {
          ...prev[parentId],
          childIds: [...prev[parentId].childIds, newId],
        },
      };
    });
  };

  const removeComment = (id) => {
    setComments((prev) => {
      let updatedComment = { ...prev };
      let parentId = updatedComment[id].parentId;

      if (parentId !== null) {
        updatedComment[parentId].childIds = updatedComment[
          parentId
        ].childIds.filter((e) => e !== id);
      }

      const deleteRecursively = (commentId) => {
        updatedComment[commentId].childIds.forEach((e) => deleteRecursively(e));
        delete updatedComment[commentId];
      };
      deleteRecursively(id);
      return updatedComment;
    });
  };

  console.log(comments);

  return (
    <Comment
      comment={comments[1]}
      allComments={comments}
      addComment={addComment}
      removeComment={removeComment}
    />
  );
};

export default CommentContainer;
