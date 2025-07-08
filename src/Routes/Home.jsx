import IMAGES from "../assets/images";
import { GoChevronRight } from "react-icons/go";

const Home = () => {
  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Frontend Developer",
  //     message:
  //       "This service was a game-changer. Highly professional and reliable!",
  //     image: "https://via.placeholder.com/100",
  //   },
  //   {
  //     name: "Michael Smith",
  //     role: "Project Manager",
  //     message:
  //       "Great experience overall. Timely delivery and excellent support.",
  //     image: "https://via.placeholder.com/100",
  //   },
  //   {
  //     name: "Linda Osei",
  //     role: "UI/UX Designer",
  //     message:
  //       "Beautiful designs and top-notch implementation. Will recommend!",
  //     image: "https://via.placeholder.com/100",
  //   },
  // ];

  return (
    <>
      <div>
        <div className="container px-5 py-3 my-4">
          {/* <h3 className="display-6">SAMSUNG</h3> */}
          <h3 className="text-center">Happy Father's Day</h3>
          <div className="text-center">
            <h1 className="display-3 fw-bold mb-3">Celebrate every dad</h1>
            <p className="mb-3">
              Gift thtat will make Dad feel ultra special-like the epic Galaxy
              S24 Ultra or Watch6 Classic
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn btn-dark rounded-4 py-2 px-4">
                <span className="d-flex align-items-center justify-content-between">
                  SHOP GALAXY S24 ULTRA
                  <GoChevronRight size={20} />
                </span>
              </button>
              <button className="btn btn-outline-dark rounded-4 py-2 px-4">
                <span className="d-flex align-items-center justify-content-between">
                  SHOP GALAXY WATCH6 CLASSIC
                  <GoChevronRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid background-1 mt-3 p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
              <h2 className="mb-3 display-5 fw-bold">
                Gifts for his body, mind and spirit
              </h2>
              <p className="mb-3">
                Support his goals, help him monitor his health, and amplify the
                music he loves
              </p>
              <div>
                <button className="btn btn-outline-dark rounded-4 py-2 px-4">
                  <span className="d-flex align-items-center fw-bold">
                    SHOP FATHER'S DAY
                    <GoChevronRight size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-5">
                  <div className="d-flex flex-column gap-3">
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="d-flex h-100">
                    <img
                      src={IMAGES.image_2}
                      className="img-fluid rounded-3"
                      height={"100%"}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid background-2 mt-3 p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
              <h2 className="mb-3 display-5 fw-bold">
                Gifts that help him unwind
              </h2>
              <p className="mb-3">
                Support his goals, help him monitor his health, and amplify the
                music he loves
              </p>
              <div>
                <button className="btn btn-outline-dark rounded-4 py-2 px-4">
                  <span className="d-flex align-items-center fw-bold">
                    SHOP FATHER'S DAY
                    <GoChevronRight size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-5">
                  <div className="d-flex flex-column gap-3">
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="d-flex h-100">
                    <img
                      src={IMAGES.image_2}
                      className="img-fluid rounded-3"
                      height={"100%"}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid background-3 mt-3 p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
              <h2 className="mb-3 display-5 fw-bold">
                Gifts for the moments that matter
              </h2>
              <p className="mb-3">
                Support his goals, help him monitor his health, and amplify the
                music he loves
              </p>
              <div>
                <button className="btn btn-outline-dark rounded-4 py-2 px-4">
                  <span className="d-flex align-items-center gap-2 fw-bold">
                    SHOP FATHER'S DAY
                    <GoChevronRight size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-5">
                  <div className="d-flex flex-column gap-3">
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                    <img
                      src={IMAGES.image_1}
                      className="img-fluid rounded-3"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="d-flex h-100">
                    <img
                      src={IMAGES.image_2}
                      className="img-fluid rounded-3"
                      height={"100%"}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-3 my-4 text-center">
        <h3 className="">Happy Father's Day</h3>
        <p>Find something special, just for Dad</p>
        <button className="btn btn-outline-dark rounded-4 py-2 px-4">
          <span className="d-flex align-items-center justify-content-between">
            SHOP GIFTS
            <GoChevronRight size={20} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;
