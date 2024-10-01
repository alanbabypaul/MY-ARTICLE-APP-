import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import UserUser from "../useUser/Useuser";
import { postArticle } from "../Services/allApi";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const { user } = UserUser();
  const [imagePreview, setImagePreview] = useState("");
  const [uploadedImageUrls, setUploadedImageUrls] = useState("");
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    content: "",
    image: "",
  });

  useEffect(()=>{
if(user){
  setFormData(prevData => ({
    ...prevData,
    name: user.email || "", 
  }));
}
  },[user])

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const {name, title, content, image } = formData;
    if ( !title || !content || !image) {
      alert("all fields are required");
    } else {
      const articleData = new FormData();
      articleData.append("name", name);
      
      articleData.append("title", title);
      articleData.append("content", content);
      articleData.append("image", image);

      // token and header setup
      const token = await user.getIdToken();
      console.log(token);
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await postArticle(articleData, headers);

      if (result.status === 200) {
        toast.success(`${result.data.savedArticle.title} Article saved successfully`)
        navigate("/articleListpage")
        console.log(result.data);
        setUploadedImageUrls(result.data.uploadedImageUrl)
       
        setFormData({
          name: user.email || "",
          title: "",
          content: "",
          image: "",
        });
        setImagePreview("");
      } else {
        console.log("Error:", result.response);
      }
    }
  };
  

  //
  useEffect(() => {
    if (formData.image) {
      setImagePreview(URL.createObjectURL(formData.image));
    }
  }, [formData.image]);

  return (
    <div className="container mt-5">
      <h1>Post Your Article</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder={user ? `You are logged in as: ${user.email}` : "Enter your name"}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
           disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title:</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="content"
            value={formData.content}
            onChange={(event) =>
              setFormData({ ...formData, content: event.target.value })
            }
            placeholder="Enter content"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="image">Article Image:</Form.Label>
          <Form.Control
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
          )}
        </Form.Group>
        <Button type="submit" className="btn btn-primary mt-2">
          Submit Article
        </Button>
      </Form>


     


<ToastContainer />
    </div>
  );
};

export default AddPost;
