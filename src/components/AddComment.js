import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { postComment } from "../Services/allApi";
import UserUser from "../useUser/Useuser";
import { toast, ToastContainer } from "react-toastify";

const AddComment = ({ articleInfo, onCommentUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user, isLoading } = UserUser();

  const submitForm = async (e) => {
    e.preventDefault();
    const commentBody = {
      postedby: user.email,
      text: commentText,
    };

    try {
      console.log("commentBody", commentBody);
      const token = await user.getIdToken();
      
      console.log("Token:", token);
      // headers
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const updatedComment = await postComment(
        articleInfo.name,
        commentBody,
        headers
      );
      console.log("articleInfo.name", articleInfo.name);
      const updatedNewComment = updatedComment.data.updatedArticle;
      onCommentUpdated(updatedNewComment);
      toast.success("comment updated");
      // console.log(updatedNewComment)
      setName("");
      setCommentText("");
    } catch (error) {
      toast.error("Error submitting comment", error);
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3 bg-light">Add Comment</h2>
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder={user ? `You are logged in as: ${user.email}` : "Enter your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formComment" className="mt-3">
          <Form.Label column sm={2}>
            Comment
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={3}
              value={commentText}
              placeholder="Enter your comment"
              onChange={(e) => setCommentText(e.target.value)}
              required
            />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mt-2"
          onClick={submitForm}
        >
          Add Comment
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddComment;
