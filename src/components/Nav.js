const Nav = () => {
  return (
    <nav className="flex flex-row justify-between p-6">
      <div id='logo'><img src={require("./logo.jpg")} alt="logo"></img></div>
      <div id='nav-links'>
        <a href="/#detail">About me</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact me</a>
        <a id="resume-link" href="https://resume.creddle.io/resume/bptrsskb6tq">Resume</a>
      </div>
    </nav>
  )
}

export default Nav;