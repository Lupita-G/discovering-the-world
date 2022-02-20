import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { postsContext } from '../context/posts-context';
import '../styles/Form.css';

const Form = () => {

   const {addPostHandler}= useContext(postsContext);
   const {register, handleSubmit, formState:{errors}, reset} = useForm(
       {defaultValues: {
           title: "",
           description: "",
           category: "",
           img: "",
       }}
   )

   const onSubmit =(data, event)=> {
       const newPost = {
           id: crypto.randomUUID(),
           title: data.title,
           description: data.description,
           category: data.category,
           img: data.img,
       }
       console.log(data);
       addPostHandler(newPost);
       event.target.reset();
   }
    const validation = {
        required: {
            value: true,
            message: "This section is required",
        },
        maxLength: {
            value: 20,
            message: "Only 20 characters are allowed",
        },
        minLength: {
            value: 3,
            message: "At least two characters are allowed",
        },
    }  
    return (
        <>
        <form className='container-one' onSubmit={handleSubmit (onSubmit)}>
                <h3>Create a Post</h3>
            <div className='conatiner-two'>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input name='title'className="form-control" {...register("title", validation)}/>
                    {errors.title && <span className="form-text text-danger">{errors.title.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input name="description"  className="form-control" {...register("description", validation)}/>
                    {errors.description && <span className="form-text text-danger">{errors.description.message}</span>}
                </div>
                <label className="form-label">Category</label>
                <select className="form-select" aria-label="Default select example">
                    <option value="1">Lifestyle</option>
                    <option value="2">Business</option>
                    <option value="3">Food</option>
                    <option value="3">Travel</option>
                    <option value="3">Work</option>
                </select>
                <div id="emailHelp" className="form-text"></div>
                <div className="mb-3">
                    <label className="form-label">URL of the image</label>
                    <input name="image" className="form-control" {...register("image", validation)}/>
                    {errors.image && <span className="form-text text-danger">{errors.image.message}</span>}
                </div>
            </div>
                <button type="submit" >Cancel</button>
                <button type="submit" >Save</button>
            </form>
        </>
    );
}

export default Form;
