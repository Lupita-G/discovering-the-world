import { useForm } from "react-hook-form";
import React, { useState, useContext } from "react";
import { postsContext } from "../context/posts-context";
import { Modal, Button } from "@mui/material";
import "../styles/Comments.css";

const Comments = () => {
  const { validation, } = useContext(postsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      comment: "",
    },
  });
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

/*   const addCommentHandler = (posts)=> {

  }
 */
  const onSubmit = (data, e) => {
    /*         const newComment ={
            id: crypto.randomUUID(),
            name: data.name,
            comment: data.comment,
        } */
    console.log(data);
    e.target.reset();
  };
  const bodyComment = (
    <div className="modalForm">
      <form className="container-three" onSubmit={handleSubmit(onSubmit)}>
        <h3>Create a comment</h3>
        <div className="container-four">
          <label className="form-label text-white">Name</label>
          <div className="mb-3">
            <input
              name="name"
              className="form-control"
              {...register("name", validation)}
            />
            {errors.name && (
              <span className="form-text text-danger">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Comment</label>
            <input
              name="comment"
              className="form-control"
              {...register("comment", validation)}
            />
            {errors.comment && (
              <span className="form-text text-danger">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>
        <button>save</button>
        <button>delete</button>
        <button>edit</button>
      </form>
    </div>
  );
  return (
    <>
      <Button onClick={() => openModal()}> add </Button>
      <Modal open={modal} onClose={openModal}>
        {bodyComment}
      </Modal>
    </>
  );
};

export default Comments;
