import "./overview2.css";
import iconList from "./iconList";

const Overview = () => {
  const languages = iconList.languages;
  const tools = iconList.tools;
  return (
    <div className="overview">
      <div className="summary">
        <div className="title">
          <h2>About me</h2>
        </div>
        <p>
        My name is Milan Gupta, a full-stack developer with a strong focus on backend development. 
        I specialize in Node.js and JavaScript, leveraging frameworks like Express.js to create 
        efficient and scalable solutions. With proficiency in frontend technologies like React.js
         and expertise in MongoDB and RESTful APIs, I bring a well-rounded approach to building 
         robust, user-centric applications.
        </p>
      </div>
      <div className="technologies">
        <div className="title">
          <h2>Technologies</h2>
        </div>
        <h3>Languages and Libraries</h3>
        <div className="icon-grid">
          {Object.keys(languages).map((language) => (
            <div key={language} className="iconcontainer">
              {languages[language]}
              <p>{language}</p>
            </div>
          ))}
        </div>
        <h3>Applications</h3>
        <div className="icon-grid">
          {Object.keys(tools).map((tool) => (
            <div key={tool} className="iconcontainer">
              {tools[tool]}
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="education">
        <div className="title">
          <h2>Education</h2>
        </div>
        <div className="Masters">
          <h3>Master of Computer Applications </h3>
          <h4>National Institute of Technology,Trichy</h4>
          <h4>(2022- 2025)</h4>
        </div>
        <div className="bachelors">
          <h3>Bachelor of Sciences </h3>
          <h4>Devi Ahilya Vishwavidyalaya, Indore</h4>
          <h4>(2019- 2022)</h4>
        </div>
        <div className="high-school">
          <h3>High School (Class 12th)</h3>
          <h4>Rai Saheb Bhanwer Singh Public School</h4>
          <h4>2019</h4>
        </div>
      </div>
    </div>
  );
};

export default Overview;