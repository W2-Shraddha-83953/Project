import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    Courier Management System
                  </h5>

                  <p>
                    Empower your logistics with our cutting-edge Courier
                    Management System. From swift deliveries to personalized
                    service, we redefine efficiency. Trust us for seamless
                    shipping - where every package finds its perfect journey.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <div>
                        Sunbeam Institute of Information and Technology
                        Hinjewadi, Pune{" "}
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Delivery </h5>

                  <ul class="list-unstyled mb-0">
                    <div>
                      {" "}
                      Our reliable logistics network enables the fastest and
                      most dependable door-to-door transit service in the
                      industry.
                    </div>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">We Collect</h5>

                  <ul class="list-unstyled mb-0">
                    <div>
                      Priority depends on the urgency of the package and the
                      type of the goods, catering to varying budgets.
                    </div>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
