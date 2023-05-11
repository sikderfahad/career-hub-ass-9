import React from "react";
import "./BlogPage.css";
import BlogItem from "../BlogItem/BlogItem";

const BlogPage = () => {
  const blogs = [
    {
      title: "When should you use context API?",
      body: "The Context API in React is useful for managing and sharing state across multiple components without prop drilling. It can be used in basic needs such as theme management, user authentication, language localization, and global app settings. By utilizing the Context API, you can easily provide access to shared data and settings throughout your application, simplifying component communication and reducing code complexity.",
    },
    {
      title: "What is a custom hook?",
      body: "A custom hook is a reusable function in React that encapsulates logic and state to provide functionality to components. It allows you to extract and share common code between components without duplicating it. Custom hooks enable the separation of concerns and promote code reusability, making it easier to manage complex logic in a concise and modular manner. They follow specific naming conventions and can be created by prefixing the function name with 'use' to leverage React's built-in hook system.",
    },
    {
      title: " What is useRef?",
      body: "useRef() is a hook in React that provides a mutable reference object. It allows you to persist a value across re-renders without triggering a component update. useRef is commonly used to access and manipulate DOM elements directly, store previous values, or create a reference to a child component. It provides a way to interact with the underlying DOM or hold a value that persists across renders, making it useful for various scenarios like handling focus, triggering imperative actions, or storing temporary data.",
    },
    {
      title: "What is useMemo?",
      body: "useMemo() is a hook in React that memoizes a value and only recomputes it when its dependencies change. It allows you to optimize the performance of expensive calculations or complex operations by caching the result. useMemo is particularly useful when dealing with computationally intensive tasks or when the result of a computation is used as a dependency for rendering. By using useMemo, you can avoid unnecessary re-evaluations and improve the overall efficiency of your application",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="md:w-10/12 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
        {blogs.map((blog, idx) => (
          <BlogItem blog={blog} key={idx}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
