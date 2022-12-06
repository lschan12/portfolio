const Detail = () => {
  return (
    <div id="detail">
      <div id="profile-picture">
        <img src="./me.jpg" alt="Lawrence Chan"></img>
      </div>
      <div id="detail-text">
        <h1>About me</h1>
        <p>
          I'm a full stack web developer based in Vancouver, Canada. I first
          started coding in university when I took some intro to computer
          science courses, but have always been passionate about anything tech.
          Wanting a change in my career - I decided to pursue my passion and
          code for a living.
        </p>
        <p>
          I have since graduated from Lighthouse Labs and am actively building
          apps and projects while searching for an organization that I can grow
          and learn in.
          All the projects have been built from
          scratch with different framework, but mostly specializing in React.js.
        </p>
        <p>
          A list of technologies I am familiar with: 
          <ul>
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>Node.JS</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>SQL</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Detail;
