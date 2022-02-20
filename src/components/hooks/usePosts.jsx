import { useState } from "react";

export const usePosts = () => {
  const postsList = [
    {
      id: 11,
      title: "Travel To Mountains",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
      category: "Travel",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      comments: {
        name: "",
        text: "",
      },
    },
    {
      id: 12,
      title: "Healthy lifestyle",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
      category: "Lifestyle",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZmVzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      comments: {
        name: "",
        text: "",
      },
    },
    {
      id: 13,
      title: "Create love in busines ",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
      category: "Business",
      img: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      comments: {
        name: "",
        text: "",
      },
    },
    {
      id: 14,
      title: "Food Experiences",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
      category: "Food",
      img: "https://media.istockphoto.com/photos/american-food-concept-grilled-pork-ribs-with-grilled-sauce-with-smoke-picture-id1191425335?b=1&k=20&m=1191425335&s=170667a&w=0&h=hBiPnWK8ild5Rj6b9HL_qBSOgBKeyv6pNroSS2AJ4yQ=",
      comments: {
        name: "",
        text: "",
      },
    },
    {
      id: 15,
      title: "Flexible work",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
      category: "Work",
      img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      comments: {
        name: "",
        text: "",
      },
    },
  ];

  const [posts, setPosts] = useState(postsList);

  const [formIsDisplayed, setFormIsDisplayed] = useState(false);

  const formDisplayedHandler = () => {
    setFormIsDisplayed(!formIsDisplayed);
  };

  const addPostHandler = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    console.log(posts);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    formDisplayedHandler();
  };

  return {
    posts,
    onSubmitHandler,
    formDisplayedHandler,
    formIsDisplayed,
    addPostHandler,
  };
};