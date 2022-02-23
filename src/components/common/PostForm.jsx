import React, { useState, useContext } from "react";
import { postsContext } from "../context/posts-context";
import { Modal, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "../styles/PostForm.css";

const PostForm = () => {
  const { addPostHandler, validation} = useContext(postsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      img: "",
      comments: {
        name: "",
        text: "",
      },
    },
  });
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };


  const onSubmit = (data, event) => {
    const newPost = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      category: data.category,
      img: data.img,
      comments: {
        name: data.name,
        text: data.text,
      },
    };
    addPostHandler(newPost);
    console.log(newPost);
    event.target.reset();
  };

 


  const body = (
    <div className="modalForm">
      <form className="container-one" onSubmit={handleSubmit(onSubmit)}>
        <h3>Create a Post</h3>
        <div className="conatiner-two">
          <div className="mb-3">
            <label className="form-label text-white">Title</label>
            <input
              name="title"
              className="form-control"
              {...register("title", validation)}
            />
            {errors.title && (
              <span className="form-text text-danger">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Description</label>
            <input
              name="description"
              className="form-control"
              {...register("description", validation)}
            />
            {errors.description && (
              <span className="form-text text-danger">
                {errors.description.message}
              </span>
            )}
          </div>
          <label className="form-label text-white">Category</label>
          <select className="form-select" aria-label="Default select example" {...register("category", validation)}>
            <option value="lifestyle">Lifestyle</option>
            <option value="business">Business</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="work">Work</option>
          </select>
          <div id="emailHelp" className="form-text"></div>
          <div className="mb-3">
            <label className="form-label text-white">URL of the image</label>
            <input
              className="form-control"
              {...register("img", validation)}
            />
            {errors.image && (
              <span className="form-text text-danger">
                {errors.image.message}
              </span>
            )}
          </div>
        </div>
        <button type="submit" onClick={() => openModal()}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  );

  return (
    <div>
      <Button onClick={() => openModal()}>open</Button>
      <Modal open={modal} onClose={openModal}>
        {body}
      </Modal>
    </div>
  );
};

export default PostForm;
