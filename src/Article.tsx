import { useEffect, useState } from "react";
import axios from "axios";

function Article() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState([]);

  useEffect(() => {
    const endpoint = "http://localhost" + window.location.pathname
    const getContent = async () => {
      try {
        const response = await axios.get(endpoint);
        setContent(response.data);
      } catch (error) {
        setContent([]);
      }
    };
    getContent();
  }, []);

  return (

      <div className="right main-contents">
        <div className="contents">
          <h2>How many pappies are there?</h2>
          <h4>Written by Luna / 2024.05.24</h4>
          <div className="contents">
          </div>
        </div>
      </div>

    );
  }

export default Article;
