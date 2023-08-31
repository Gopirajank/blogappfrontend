
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./write.css"

const Write = () => {
    const [quillContent, setQuillContent] = useState(""); // Content for React Quill
    const [markdownContent, setMarkdownContent] = useState(""); // Content for Markdown preview

    // Function to handle changes in the Quill editor
    const handleQuillChange = (content) => {
        setQuillContent(content);
        setMarkdownContent(content); // You can convert Quill content to Markdown here if needed
    };
    
    return (
        <div>
            <Navbar />
            <div className='add'>
                <div className='writecontent'>
                    <input placeholder='Title' type='text'/>
                    <div className='editorcontainer'>
                        <ReactQuill
                            value={quillContent}
                            onChange={handleQuillChange}
                            placeholder="Enter text here"
                        />
                        </div>
                    <div className='markdown-preview'>
                <h2 style={{color :"teal"}}>Preview</h2>
                <div className='preview-content'>
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
                </div>
          <div className='writemenu'>
          <div className='writeitem'>
            <h1>Publish</h1>
            <span> 
                <b> Visibility: </b> Draft
            </span>
            <span> 
                <b> Status: </b> Public
            </span>
            <input type='file' name='' id='file' style={{display:"none"}}/>
            <label className='writelable' htmlFor='file'>Upload Image</label>
            <button className='writebut1'>Save as a draft</button>
            <button className='writebut2'>Update</button>
          </div>
          <div className='writeitem'>
            <h1>Category</h1>
            <div className='cat'>
            <input type='radio' name='' value="art" id='art'/>
            <label htmlFor='art'>Art</label>
            </div>
            <div className='cat'>
            <input type='radio' name='' value="science" id='science'/>
            <label htmlFor='science'>Science</label>
            </div>
            <div className='cat'>
            <input type='radio' name='' value="technology" id='technology'/>
            <label htmlFor='technology'>Technology</label>
            </div>
            <div className='cat'>
            <input type='radio' name='' value="cinema" id='cinema'/>
            <label htmlFor='cinema'>Cinema</label>
            </div>
            <div className='cat'>
            <input type='radio' name='' value="design" id='design'/>
            <label htmlFor='design'>Design</label>
            </div>
            <div className='cat'>
             <input type='radio' name='' value="food" id='food'/>
              <label htmlFor='food'>Food</label>
              </div>
           </div>
            
          </div>
       </div>
    <Footer />
    </div>
  )
}

export default Write