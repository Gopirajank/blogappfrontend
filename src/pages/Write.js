import React, { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.css';
import axios from "axios"
import { Context } from '../context/Context';
const Write = () => {
  const [title,setTitle] = useState("");
  const [desc,setDesc]=useState("")
  const [file,setFile]=useState("")
  const [quillContent, setQuillContent] = useState(''); // Content for React Quill
  const [markdownContent, setMarkdownContent] = useState(''); // Content for Markdown preview
  const {user} = useContext(Context)
  // Function to handle changes in the Quill editor
  const handleQuillChange = (content) => {
    setQuillContent(content);
    // You can convert Quill content to Markdown here if needed
    setMarkdownContent(content); // For now, we'll use the same content
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newPost ={
      username:user.username,
      title,
      desc,
    }
    if(file){
      const data = FormData();
      const filename =Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post("/upload",data)
      }catch(err){

      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    }catch(err){

    }
  }
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }}  onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            id="Title"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <div className="editor-container">
            <ReactQuill
              value={quillContent}
              onChange={handleQuillChange}
              placeholder="Enter text here"
            />
        <div className="markdown-preview">
        <h2 style={{ color: 'teal' }}>Preview</h2>
        <div className="preview-content">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
        </div>
        </div>
      </div>
        <button className="writeSubmit" type='submit'>Publish</button>
      </form>
    </div>
  );
};

export default Write;
