const CourseCard = () => {
  return (
    <div className="card-container">
      <a href="/" className="hero-image-container">
        <img
          className="hero-image CardImg"
          src="https://imgs.search.brave.com/SADm-9nTSFvPnrkfopdVJgEnZtaZmibeSK4U1ZNc3_g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kdG12/YW1haHM0MHV4LmNs/b3VkZnJvbnQubmV0/L2dsLWFjYWRlbXkv/Y291cnNlL2NvdXJz/ZS0xNTk3LUdyb3Vw/JTIwMjkzMC5qcGc"
          alt="Spinning glass cube"
        />
      </a>
      <main className="main-content">
        <h1>
          <a href="#">Prompt Engineering</a>
        </h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex-row">
          <div className="coin-base">
            <img
              src="https://imgs.search.brave.com/ogS9ouhxKWCa8oqMS_QRFTuEyHsj-OXjMtvV3BJsmpA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0bWFnLmNvbS9p/bWFnZXMvZ29sZC1z/dGFyLXBpY3R1cmUt/MzEucG5n"
              alt="Ethereum"
              className="small-image CardImg"
            />
            <h2>4.5</h2>
          </div>
          <div className="time-left">
            <img
              src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
              alt="clock"
              className="small-image CardImg"
            />
            <p>7 days</p>
          </div>
        </div>
      </main>
      <div className="card-attribute">
        <img
          src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
          alt="avatar"
          className="small-avatar CardImg"
        />
        <p>
          Creation of{' '}
          <span>
            <a href="#">Jules Wyvern</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default CourseCard
