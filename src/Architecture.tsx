import React from 'react';
import { useTheme } from './ThemeContext';

const Architecture: React.FC = () => {

  const { mode } = useTheme();

  return (

    <div className="right main-contents">

      <div className="contents">
        <h2>The Architecture of 9th.tokyo</h2>

        <div className="message">
This application is developed using TypeScript with React for the frontend (Current View), and Python's FastAPI framework served by Nginx with Uvicorn for the backend, It runs on a native Linux, not Dockerized. The article generation system relies on GPT-4o, and it runs on Lambda. Articles generated by AI are stored in Milvus. The source code is available for you to use, modify, and redistribute.
        </div>

        <div className="message">
 feature is developing in this branch, which is a similar search feature with the articles.
Today's architecture diagram is as follows:
        </div>

      </div>

      <div className="contents">
        <p><img src={`images/design-${mode}.png`} alt="design" width="800" height="355" /></p>
      </div>

      <div className="contents">
        <h2>
          <a href="https://github.com/keix-luna/9th.tokyo">#9th.tokyo</a>
        </h2>
 
      <div>
        The architecture of 9th.tokyo is structured as a layered system, where 9th.tokyo serves as the <span className="emphasis">front-end interface</span>, Seven-Swords functions as the intermediary controller, and Akatsuki provides the underlying infrastructure. In this architecture, 9th.tokyo is essentially the user interface (UI) for the Seven-Swords project. While it presents a sophisticated and intuitive interface to users, the actual implementation is a straightforward <span className="emphasis">React-based application</span>.
      </div>

      <div className="message">
        Seven-Swords acts as a controller that connects the UI with the powerful backend systems managed by Akatsuki. Despite its central role in the architecture, Seven-Swords itself remains a simple application designed primarily to interface with Milvus and other services through the Akatsuki infrastructure. The elegance of this system lies in its simplicity—while the backend processes are complex and robust, the user interacts with a clean and efficient interface that is easy to use.
      </div>

      <div className="message">
        This design ensures that while Akatsuki handles the heavy lifting of data processing and management, 9th.tokyo provides users with a seamless experience, making it the face of the operation. The simplicity of the React-based implementation of Seven-Swords ensures that the system is both maintainable and scalable, allowing for future enhancements without compromising on performance.
      </div>

      <div className="message">
        <li><span className="emphasis">[*] A React-based front-end application that you may be viewing right now.</span></li>
        <li><span className="emphasis">[*] The UI for Seven-Swords.</span></li>
      </div>
    </div>
      
      <div className="contents">
        <h2>
          <a href="https://github.com/keix-luna/seven-swords">#Seven-Swords</a>
        </h2>
        <div className="message">
        Seven-Swords operates as a <span className="emphasis">FastAPI application</span>, reverse-proxied by NGINX to ensure secure and efficient HTTP handling. It is designed as a <span className="emphasis">simple Milvus controller</span> but also functions as a central control point for managing and querying complex data sets. The FastAPI backend efficiently communicates with Milvus to retrieve vectors, ensuring fast and highly relevant results.
        </div>

        <div className="message">
        The infrastructure is robust and secure, with the FastAPI application running within an AWS ECS cluster. This setup is designed to handle complex data processing tasks while maintaining a simple interface.
        </div>

        <div className="message">
        By leveraging Docker, FastAPI, Milvus, and AWS Lambda, Seven-Swords preserves its simplicity while playing a crucial role in the broader architecture, effectively managing complex data queries and processing with future scalability in mind.
        </div>

        <div className="message">
          <li><span className="emphasis">[*] Seven-Swords is a FastAPI application, and you can access it through 9th.tokyo.</span></li>
        </div>
      </div>

      <div className="contents">
        <h2>
          <a href="https://github.com/keix-luna/akatsuki">#Akatsuki</a>
        </h2>
        <div className="message">
        This source code forms the core infrastructure for AI identity creation, built using AWS CDK, which serves as the backbone for the 9th.tokyo and Seven-Swords projects. The project is named Akatsuki, also known as MoonLight, and it plays a pivotal role in defining and maintaining the identity of the AI entities that power these initiatives. Akatsuki is not just an ordinary infrastructure project; it is the very foundation upon which the AI's personality, behavior, and interactions are constructed.
        </div>

        <div className="message">
        This project includes several advanced <span className="emphasis">Lambda functions</span> designed to bridge the gap between <span className="emphasis">AI systems and Milvus</span>, a high-performance vector database. These Lambda functions are crucial in ensuring that the AI can efficiently process, store, and retrieve vast amounts of data, which is essential for its learning and decision-making processes. By facilitating seamless integration between AI and Milvus, Akatsuki enables the AI to evolve and adapt, thereby continuously refining its identity.
        </div>

        <div className="message">
        Akatsuki’s architecture is meticulously designed to support the complex needs of AI development and deployment. It provides the necessary tools and environment to cultivate an AI that is not only intelligent but also capable of nuanced, context-aware interactions. Through this project, the AI's identity is shaped and honed, making Akatsuki a critical component in the realization of the AI's full potential within the 9th.tokyo and Seven-Swords ecosystems.
        </div>
      </div>

    </div>

  );
}

export default Architecture;
