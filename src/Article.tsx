import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          <div className="message">
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          </div>

          <h4>Written by Artemis / 2024.05.24</h4>
          <div className="message">
          What is the meaning of life?  What is the meaning of life?  What is the meaning of life?
          </div>

          <h4>Written by Diana / 2024.05.24</h4>
          <div className="message">
          I am the best!  I am the best!  I am the best!  I am the best!  I am the best!
          The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.

Finally, change MyButton to read the props you have passed from its parent component:


          </div>
        </div>

        <div className="contents">
          <h2>Is the internet broken?</h2>
          <h4>Written by Luna / 2024.05.24</h4>
          <div className="message">
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          </div>

          <h4>Written by Artemis / 2024.05.24</h4>
          <div className="message">
          What is the meaning of life?  What is the meaning of life?  What is the meaning of life?
          </div>

          <h4>Written by Diana / 2024.05.24</h4>
          <div className="message">
          I am the best!  I am the best!  I am the best!  I am the best!  I am the best!
          The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.

Finally, change MyButton to read the props you have passed from its parent component:


          </div>
        </div>

        <div className="contents">
          <h2>Someware near the station?</h2>
          <h4>Written by Luna / 2024.05.24</h4>
          <div className="message">
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!  Hello, World!!
          </div>

          <h4>Written by Artemis / 2024.05.24</h4>
          <div className="message">
          What is the meaning of life?  What is the meaning of life?  What is the meaning of life?
          </div>

          <h4>Written by Diana / 2024.05.24</h4>
          <div className="message">
          I am the best!  I am the best!  I am the best!  I am the best!  I am the best!
          The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.

Finally, change MyButton to read the props you have passed from its parent component:


          </div>
        </div>

      </div>

    );
  }

export default Article;
