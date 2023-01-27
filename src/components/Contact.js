const Contact = () => {
  return (
    <div id="contact" className="pt-64 min-h-screen">
      <h1 className="mainFont text-6xl py-4 sm:text-8xl">Get in touch</h1>
      <p className="text-lg">
        Please connect with me about anything tech!
      </p>
      <p className="text-lg mb-6" >
        I am open to any questions or if you simply want to chat and get to know
        me!
      </p>
      <a
        className="hoverButtons bg-lime-400 rounded-full px-4 py-2 lg:py-2.5 w-[35%] text-lg  text-center lg:text-lg lg:w-[16%]"
        href="mailto:lawrence.c@hotmail.co.uk"
      >
        Email me
      </a>
    </div>
  );
};

export default Contact;
