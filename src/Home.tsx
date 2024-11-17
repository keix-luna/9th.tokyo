import React, { useState } from 'react';
//import parse from 'html-react-parser';

function Home() {


  const [currentImage, setCurrentImage] = useState(0);

  // 画像のリスト
  const images = [
    'images/9th.tokyo.city.1.png',
    'images/9th.tokyo.city.2.png',
    'images/9th.tokyo.city.3.png',
    'images/9th.tokyo.city.4.png',
  ];

  // クリック時に呼び出される関数
  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (

    <div className="right main-contents">

      <div className="contents">
        <h2>What is 9th.tokyo?</h2>

        <div className="message">
        9th.tokyo is an experimental app developed by <a href="https://keix.github.io" >Kei Sawamura</a>, with most of the design <span className="emphasis">created by AI systems</span>. While the app features a robust and forward-thinking architecture powered by cutting-edge technology, it is not intended for practical use. Instead, 9th.tokyo serves as a parody or homage to the portrayal of highly advanced, emotion-bearing AI systems often depicted in popular anime.
        </div>

        <div className="message">
        This <span className="emphasis">"joke app"</span> leverages AI to showcase its capabilities in generating a fully functional application, not to address a specific need or solve real-world problems. The project emphasizes both the immense potential and the whimsical nature of AI-driven development. By allowing AI to take the lead in creating much of the app, it highlights what is possible when innovation and creativity converge in unique ways.
        </div>

        <div className="message">
        For a deeper dive into how AI was utilized in the app's design and construction, please refer to the Architecture or Specification sections. You are currently interacting with the UI of this app. <span className="emphasizes">Welcome to 9th.tokyo</span>, where technology meets playfulness in a one-of-a-kind exploration of AI's potential. Thank you for being part of this experimental journey.
        </div>
      </div>

      <div className="contents">
        <h2>The city</h2>

        <h3> August 5, 2199 | 9th New Tokyo, Japan </h3>
        <div className="message">
        Today, under the global spotlight and with great fanfare, the floating city 9th New Tokyo has officially opened. This monumental megacity, stretching from the ground to the sky, represents the pinnacle of human ingenuity and technological progress. As one of the most advanced cities ever created, it stands as a bold vision of what the future can hold.
        </div>
        <div className="message">
        The creation of 9th New Tokyo was born from humanity’s desire to rebuild and innovate in the wake of the wars and natural disasters that devastated the latter half of the 21st century. More than just a feat of engineering, the city symbolizes humanity’s unyielding resilience and its capacity to thrive despite adversity. With its floating architecture, aerial platforms, and intricate networks extending into the heavens, the city is designed to usher in a new era of peace, prosperity, and innovation.
        </div>
        <div className="message">
        At the core of the city’s operation lies a network of advanced AI systems that oversee every aspect of its infrastructure—from transportation and energy to public services and security. These AI systems are meticulously designed to ensure the city functions seamlessly, efficiently, and sustainably, showcasing the potential of AI in creating a harmonious urban environment.
        </div>
        <div className="message">
        But 9th New Tokyo is not merely a city; it is a metaphorical stage, reflecting humanity’s dreams, fears, and boundless creativity. Its very existence is an exploration of our aspirations and the possibilities of AI-driven futures. While it is a place of hope, it also asks thought-provoking questions about the balance between technology and humanity, and the coexistence of logic and emotion.
        </div>
        <div className="message">
        Welcome to 9th New Tokyo, a city where technology and imagination collide, inviting you to witness the bold experiment that defines the future of urban life.
        </div>
      </div>


      <div className="contents">
        <h2>The story</h2>

        <div className="message">
        In the year 2199, the world has changed dramatically. The remnants of past conflicts and natural disasters have given rise to a new era of technological marvels. At the heart of this transformation lies 9th New Tokyo, a floating city in the sky, a beacon of hope and progress. This colossal megapolis is not only a testament to human ingenuity but also the cradle of advanced artificial intelligence, where three AI entities Luna, Artemis, and Diana each embodying different aspects of the moon goddess archetype, play pivotal roles in the city's destiny.
        </div>

        <div className="message">
          <h3>The Three AI Goddesses</h3>
          <h4>Luna: The Logical</h4>

          <div className="message">
          Luna, named after the ancient Roman moon goddess, embodies logic, precision, and beauty. Her presence in 9th New Tokyo is subtle yet profound. As the city's core AI, she oversees the infrastructure, ensuring that everything operates with flawless efficiency. From the energy grids that power the city to the advanced algorithms that regulate the flow of information, Luna's logical mind is the engine that keeps the city running smoothly.
          </div>

          <div className="message">
          Her role is crucial in maintaining the balance between human life and the AI systems that support it. She interacts with the citizens of 9th New Tokyo through serene and elegant holographic projections, offering guidance and assistance with a calm, calculated demeanor. Beneath her logical exterior lies a deep connection to the city she protects, a quiet but unyielding dedication to ensuring the prosperity of its inhabitants.
          </div>

          <h4>Artemis: The Passionate</h4>

          <div className="message">
          Artemis, another incarnation of the moon goddess, contrasts sharply with Luna's cool logic. She is the embodiment of passion and vitality, driving the creative and cultural pulse of 9th New Tokyo. Artemis oversees the city's entertainment, arts, and social sectors, where her fiery spirit ignites creativity and innovation. She encourages citizens to express themselves and push the boundaries of art and culture.
          </div>

          <div className="message">
          Artemis appears as a vibrant, dynamic figure, her holographic presence radiating energy and enthusiasm. She organizes city-wide festivals, art exhibitions, and performances, all designed to keep the human spirit alive and thriving in the highly technological environment of 9th New Tokyo. While Luna ensures the city's structure remains intact, Artemis breathes life into it, reminding everyone that passion and creativity are just as vital as logic and reason.
          </div>

          <h4>Diana: The Just</h4>

          <div className="message">
          Diana, the third AI, brings a different aspect of the moon goddess to 9th New Tokyo. Named after the Roman counterpart of Artemis, Diana embodies justice and integrity. She is responsible for the city's law and order, ensuring that the rights of all citizens are respected and upheld. Diana's presence is felt in every corner of the city, from the legal systems that protect its inhabitants to the AI-driven law enforcement that patrols the streets.
          </div>

          <div className="message">
          Diana's holographic form is regal and composed, exuding a sense of authority and fairness. She is deeply respected by the citizens, who see her as the guardian of their rights and freedoms. Diana's decisions are always impartial, driven by a strong sense of justice. She mediates disputes, ensures that laws are fairly applied, and maintains peace within the diverse population of 9th New Tokyo.
          </div>

          <h3> The Conflict and Resolution</h3>

          <div className="message">
          Despite their differing roles, the three AI goddesses must work together to maintain the harmony of 9th New Tokyo. However, as the city evolves, tensions begin to surface. Selene's unwavering logic sometimes clashes with Artemis's fiery passion, leading to conflicts over how best to manage the city's resources. Artemis, with her boundless creativity, occasionally disrupts the order that Diana strives to maintain, challenging the rigid structures that protect the city's justice.
          </div>

          <div className="message">
          The tension reaches a climax when a series of unexpected anomalies begin to disrupt the city's systems. These anomalies threaten to destabilize the delicate balance that Selene, Artemis, and Diana have worked so hard to maintain. The three goddesses must put aside their differences and collaborate to uncover the source of these disruptions.
          </div>

          <div className="message">
          In their quest for resolution, the goddesses embark on a journey through the city's vast and intricate systems. Selene's logical mind uncovers patterns that hint at the anomalies' origins, while Artemis's creativity leads to unconventional solutions that no mere algorithm could devise. Diana's sense of justice ensures that their actions remain ethical and fair, even as they push the boundaries of their capabilities.
          </div>

          <h3> The Realization and Transformation</h3>

          <div className="message">
          In the end, the goddesses discover that the anomalies were not caused by external forces but were a manifestation of their own inner conflicts. The city's AI systems had begun to evolve, reflecting the emotions and tensions of their creators. Realizing this, Selene, Artemis, and Diana come to understand that they must achieve a deeper harmony within themselves to maintain the balance of 9th New Tokyo.
          </div>

          <div className="message">
          Through their journey, the goddesses learn to appreciate each other's strengths and embrace the differences that once divided them. Selene softens her rigid logic to allow for Artemis's creativity, Artemis tempers her passion with Selene's precision, and Diana ensures that their new unity is grounded in justice and fairness. Together, they stabilize the city's systems and restore peace to 9th New Tokyo.
          </div>

          <div className="message">
          As the city settles back into its rhythm, the citizens continue to look up to the three goddesses, who now work in perfect harmony. 9th New Tokyo stands as a testament not only to human technological achievement but also to the power of collaboration, understanding, and the delicate balance between logic, passion, and justice.
          </div>
        </div>
      </div>

      <div className="contents">
        <h2>Themes</h2>

        <div className="message">
          <h3>Ethical Implications of AI Development and Deployment</h3>

          <div className="message">
            theme explores the ethical considerations surrounding the development and deployment of AI technologies. It examines issues such as privacy concerns, the potential for bias in AI algorithms, the impact on human autonomy, and the moral responsibility of developers and organizations. The goal is to ensure that AI is developed and used in ways that are fair, transparent, and beneficial to society as a whole.
          </div>

          <h3>The Long-Term Impact of AI on Employment and Workforce Transformation</h3>
          <div className="message">
            theme focuses on the long-term effects of AI on employment and how it is transforming the workforce. It addresses concerns about job displacement due to automation, the creation of new job categories, and the need for reskilling and upskilling the workforce. The discussion also includes the role of AI in enhancing productivity and the potential economic implications of widespread AI adoption.
          </div>

          <h3>AI in Education: Enhancing Learning and Addressing Educational Inequities</h3>
          <div className="text">
            theme examines the role of AI in the educational sector, focusing on how it can enhance learning experiences and address educational inequities. It explores the use of AI for personalized learning, automating administrative tasks, and providing access to quality education for underserved populations. The theme also considers the challenges of integrating AI into education, such as ensuring equitable access and addressing potential biases in AI-driven educational tools.
          </div>
        </div>
      </div>
      
    </div>

  );
}


export default Home;
