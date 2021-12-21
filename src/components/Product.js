const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="copy">
              <h2>The experience is always awesome</h2>
              <p>
                With iPay you can get a super easy payment solution, saving,
                investing and even to get a loan.
              </p>
              <p>
                <span className="primary-text">
                  Start living your dream life with iPay.
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-3">
            <div className="card white-shade">
              <img src="images/icons/cash.png" width={80} alt="" />
              <h4>Saving made easier</h4>
              <p>
                Save now and get prepared for things that may want to give you
                problem unexpectidely, your savings can tackle anything.
              </p>
              <button className="btn-primary">Start Now!</button>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-3 mt-4 mt-md-0">
            <div className="card white-shade">
              <img src="images/icons/stats.png" width={80} alt="" />
              <h4>Saving made easier</h4>
              <p>
                Save now and get prepared for things that may want to give you
                problem unexpectidely, your savings can tackle anything.
              </p>
              <button className="btn-primary">Start Now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
