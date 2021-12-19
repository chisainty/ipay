const Hero = () => {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="copy">
              <h1>
                iPay the world with seamless
                <br />
                <span className="primary-text">convenience</span>
              </h1>
              <p className="my-md-4 pr-md-4">
                iPay is the smartest way to pay, save &amp; invest because the
                experience on the go is superb.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn">Start Paying</button>
                </div>
                <div className="col-md-6">
                  <div className="stores d-flex">
                    <img width="60" src="images/icons/Component4.png" alt="" />
                    <img src="images/icons/Component3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="hero-image">
              <img src="images/features/Hero-Image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
