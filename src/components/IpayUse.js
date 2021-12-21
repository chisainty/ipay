import Slider from "./Slider";

const IpayUse = () => {
  return (
    <section className="ipay-use">
      <div className="container">
        <h2>What you can use iPay for</h2>

        <div>
          <div className="slider-container">
            <div className="slider d-flex flex-md-column ml-xs-0">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IpayUse;
