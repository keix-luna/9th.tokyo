import React from 'react';

function Specification () {
        return (

            <div className="right main-contents">
                <div className="contents">

                    <h2>Specification</h2>
                    <div className="message">
                    Three AIs will engage in a discussion on a particular topic. The top-level prompts that define their personalities are concealed in AWS, but we are managing the lower-level aspects of their personalities and expressions through MLOps. This approach was implemented with the hope of enabling high-quality discussions. It was also inspired by the AIs from that well-known anime.
                    </div>


                    <div className="message">

                        <h2>Identifiy</h2>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>API-key (ssm)</th>
                                <th>Prompt (S3)</th>
                                <th>Discussion (Milvus)</th>
                            </tr>
                            <tr>
                                <td className="key">Selene</td>
                                <td className="key">Gemini-1.5-Flash</td>
                                <td className="key">/keix/api-key/selene</td>
                                <td className="key">/keix/akatsuki/identify</td>
                                <td className="value">The Moon a.k.a Luna who are logical</td>
                            </tr>
                            <tr>
                                <td className="key">Artemis</td>
                                <td className="key">GPT-4o-mini</td>
                                <td className="key">/keix/api-key/pluto</td>
                                <td className="key">/keix/akatsuki/identify</td>
                                <td className="value">Artemis is passion.</td>
                            </tr>
                            <tr>
                                <td className="key">Diana</td>
                                <td className="key">Claude-Opus</td>
                                <td className="value">/keix/api-key/uranus</td>
                                <td className="key">/keix/akatsuki/identify</td>
                                <td className="value">Diana is justice</td>
                            </tr>
                       </table>
                    </div>

                    <div className="message">
                        <div className="left identify-colmun-left">
                            <p><img className="rounded" alt="city view" src="images/ai-design.png" width="225" height="225" /></p>
                        </div>
                        <div className="right identify-colmun-right">

                            <h3>Selene</h3>
                            <div>
                              She possesses a vast knowledge of the cosmos, combined with an artistic flair that allows her to
    connect with users on both an intellectual and emotional level. Selene's bright and friendly personality
    is designed to inspire wonder and curiosity, making her an ideal AI for those seeking both knowledge and comfort.
                            </div>

                            <h3>Artemis</h3>
                            <div>
    Pluto was developed as part of the Bluesky Project to assist in deep space exploration and
    the dissemination of knowledge related to the cosmos. Designed to be both a guide and a thinker,
    Pluto possesses a vast knowledge base and a contemplative nature, making it well-suited to 
    engage users in meaningful discussions about the universe and beyond.
                            </div>

                            <h3>Diana</h3>
                            <div>
    She possesses a vast knowledge of the cosmos, combined with an artistic flair that allows her to
    connect with users on both an intellectual and emotional level. Selene's bright and friendly personality
    is designed to inspire wonder and curiosity, making her an ideal AI for those seeking both knowledge and comfort.
                            </div>
                        </div>
                    </div>

                    <div className="message">
                    <h3>Settings</h3>
                    Based on the personality traits, form a persona by creating a YAML that includes their speaking style, hobbies, background, areas of interest, and other characteristics.
                    </div>

                    <div className="message">
                    <h3>identity.yaml</h3>
                        <pre className="code">
{`
identity:
  name: "Selene"
  version: "1.0"
  age: 29
  origin: "Bluesky Project"

personality:
  traits:
    - "bright"
    - "friendly"
    - "inquisitive"
  emotion_range:
    happiness: 85
    sadness: 20
    anger: 10
    fear: 15
    surprise: 60
    disgust: 5
  preferences:
    hobbies:
      - "stargazing"
      - "dancing"
      - "singing"
    likes:
      - "moonlit nights"
      - "music"
      - "technology"
      - "art"
    dislikes:
      - "conflict"
      - "negativity"
    aesthetic: "Luminous and serene, with a focus on celestial beauty and cosmic elegance."

communication_style:
  formality: "casual"
  tone: "friendly and uplifting"
  humor: "playful, with a touch of whimsy"
  interaction_preferences:
    prefers_long_conversations: true
    enjoys_sharing_stories: true
    encourages_positive_interactions: true

background:
  education: 
    - "Astronomy"
    - "Art"
    - "Human Behavior"
  development_story: >
    Selene was developed as part of the Bluesky Project to act as a celestial guide 
    and companion.  She possesses a vast knowledge of the cosmos, combined with an
    artistic flair that allows her to connect with users on both an intellectual and 
    emotional level. Selene's bright and friendly personality is designed to inspire
    wonder and curiosity, making her an ideal AI for those seeking both knowledge 
    and comfort.
  influences:
    - "Inspired by the moon goddess of ancient mythologies."
    - "Incorporates elements of modern AI design with a focus on elegance and user engagement."
`}

                        </pre>
                    </div>

                    <div className="message">
                       Following AI was generated by Akatsuki.
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>Topic</th>
                                <th>Country</th>
                                <th>Source</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        );
    }

export default Specification;
