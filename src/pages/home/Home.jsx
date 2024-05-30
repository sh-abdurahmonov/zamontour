// styles
import "./Home.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";
// icons
import { FaUser, FaArrowRight, FaCarAlt, FaPlane } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { MdApartment } from "react-icons/md";
// images
import DubaiImg from "../../assets/jpg/dubai-img.jpg";
import SharmImg from "../../assets/jpg/sharm-img.jpg";
import IstanbulImg from "../../assets/jpg/istanbul-img.jpg";
import TrainImg from "../../assets/jpg/train-img.jpg";
import PlaneImg from "../../assets/jpg/plane-img.jpg";
import AntalyaCity from "../../assets/jpg/antalya-city.jpg";
import IstanbulCity from "../../assets/jpg/istanbul-city.jpg";
function Home() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-section__container container">
          <div className="intro-section__content">
            <span className="intro-section__subtitle">
              Take a Glimpse Into The Beautiful City Of:
            </span>
            <h1 className="intro-section__title">Antalya</h1>
            <button className="btn intro-section__btn">go there</button>
          </div>
          <div className="intro-section__info">
            <ul className="info-list">
              <li className="info-list__item">
                <FaUser className="info-list__link" />
                <div className="info-list__info">
                  <span className="info-list__title">Population:</span>
                  <p className="info-list__text">69.86 M</p>
                </div>
              </li>
              <li className="info-list__item">
                <TfiWorld className="info-list__link" />
                <div className="info-list__info">
                  <span className="info-list__title">Territory:</span>
                  <p className="info-list__text">41.290 KM2</p>
                </div>
              </li>
              <li className="info-list__item">
                <AiFillHome className="info-list__link" />
                <div className="info-list__info">
                  <span className="info-list__title">AVG Price:</span>
                  <p className="info-list__text">$1.100.200</p>
                </div>
              </li>
            </ul>
            <button className="btn info-btn">explore more</button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="cities-section">
        <div className="cities-section__container container">
          <h2 className="cities-section__title">
            Best Weekly Offers In Each City
          </h2>
          <span className="cities-section__text">
            Discover the best weekly offers in each city, curated just for you.
            Immerse yourself in a world of savings and indulge in unparalleled
            experiences.
          </span>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={3}
            modules={[Mousewheel, Keyboard, Autoplay]}
            className="cities-list"
          >
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={AntalyaCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={AntalyaCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="cities-section">
        <div className="cities-section__container container">
          <h2 className="cities-section__title">Visa Support</h2>
          <span className="cities-section__text">
            Experience stress-free travel with our expert visa support. We
            provide seamless assistance and comprehensive guidance, ensuring a
            smooth journey.
          </span>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={3}
            modules={[Mousewheel, Keyboard, Autoplay]}
            className="cities-list"
          >
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={AntalyaCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={AntalyaCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="cities-list__item">
              <img className="cities-list__img" src={IstanbulCity} alt="" />
              <div className="cities-list__content">
                <div className="cities-list__heading">
                  <h3 className="cities-list__title">Antalya</h3>
                  <span className="cities-list__price">$800</span>
                </div>
                <div className="cities-list__info">
                  <h4>Deal Includes:</h4>
                  <p className="cities-list__detail">
                    <FaCarAlt /> 5 Days Trip > Hotel Included
                  </p>
                  <p className="cities-list__detail">
                    <FaPlane /> airplane bill included
                  </p>
                  <p className="cities-list__detail">
                    <MdApartment /> daily places visit
                  </p>
                </div>
                <button className="btn cities-list__btn">
                  make a reservation
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="countries-section">
        <div className="countries-section__container container">
          <h2 className="coutries-section__title">
            Explore Destinations With Ease
          </h2>
          <p className="countries-section__text">
            Find the best deals on railway and airplane tickets in each city,
            carefully selected for you.
          </p>
          <ul className="countries-list">
            <li className="countries-list__item">
              <img
                src={TrainImg}
                alt="Train image"
                className="countries-list__img"
              />
              <div className="countries-list__content">
                <div className="countries-list__heading">
                  <div className="">
                    <h4 className="countries-list__title">
                      Cheap Railway Tickets With Us
                    </h4>
                    <h5 className="countries-list__subtitle">Whole world</h5>
                  </div>
                  <button className="btn countries-list__btn">
                    explore more
                  </button>
                </div>
                <p className="countries-list__text">
                  Embark on a railway adventure and explore destinations
                  worldwide. Whether it's the picturesque landscapes, bustling
                  cities, or cultural gems, our rail services offer a unique and
                  comfortable way to traverse the globe. Immerse yourself in the
                  beauty of different cultures, all accessible through our
                  extensive railway network. .
                </p>
              </div>
            </li>
            <li className="countries-list__item">
              <img
                src={PlaneImg}
                alt="Plane image"
                className="countries-list__img"
              />
              <div className="countries-list__content">
                <div className="countries-list__heading">
                  <div className="">
                    <h4 className="countries-list__title">
                      Discover Exciting Air Travel Deals
                    </h4>
                    <h5 className="countries-list__subtitle">
                      Global Destinations
                    </h5>
                  </div>
                  <button className="btn countries-list__btn">
                    explore more
                  </button>
                </div>
                <p className="countries-list__text">
                  Embark on an airborne adventure and explore destinations
                  worldwide. Whether it's the breathtaking landscapes, vibrant
                  cities, or cultural treasures, our airline services provide a
                  convenient and exhilarating way to navigate the globe. Immerse
                  yourself in the richness of diverse cultures, all easily
                  accessible through our extensive air travel network. .
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="countries-section">
        <div className="countries-section__container container">
          <h2 className="coutries-section__title">
            Visit One Of Our Countries Now
          </h2>
          <p className="countries-section__text">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
          <ul className="countries-list">
            <li className="countries-list__item">
              <img
                src={DubaiImg}
                alt="Dubai's building image"
                className="countries-list__img"
              />
              <div className="countries-list__content">
                <div className="countries-list__heading">
                  <div className="">
                    <h4 className="countries-list__title">Dubai</h4>
                    <h5 className="countries-list__subtitle">
                      United arab emirated
                    </h5>
                  </div>
                  <button className="btn countries-list__btn">
                    explore more
                  </button>
                </div>
                <p className="countries-list__text">
                  Dubai is a city and emirate in the United Arab Emirates known
                  for luxury shopping, ultramodern architecture and a lively
                  nightlife scene. Burj Khalifa, an 830m-tall tower, dominates
                  the skyscraper-filled skyline. At its foot lies Dubai
                  Fountain, with jets and lights choreographed to music. On
                  artificial islands just offshore is Atlantis, The Palm, a
                  resort with water and marine-animal parks.
                </p>
                <div className="countries-list__info">
                  <div className="population">
                    <FaUser />
                    <span className="">67.41 Mil People</span>
                  </div>
                  <div className="area">
                    <TfiWorld />
                    <span>551.500 km2</span>
                  </div>
                  <div className="price">
                    <AiFillHome />
                    <span>$425.600</span>
                  </div>
                </div>
                <a
                  className="countries-list__link
                "
                  href="http://"
                  target="_blank"
                >
                  Need Directions?{" "}
                  <FaArrowRight className="countries-list__icon" />
                </a>
              </div>
            </li>
            <li className="countries-list__item">
              <img
                src={IstanbulImg}
                alt="Dubai's building image"
                className="countries-list__img"
              />
              <div className="countries-list__content">
                <div className="countries-list__heading">
                  <div className="">
                    <h4 className="countries-list__title">Istanbul</h4>
                    <h5 className="countries-list__subtitle">Turkey</h5>
                  </div>
                  <button className="btn countries-list__btn">
                    explore more
                  </button>
                </div>
                <p className="countries-list__text">
                  Istanbul is the most populous city in Turkey and its cultural,
                  economic and historic center. It is located in north-western
                  part of Turkey, divided into European and Asian side by
                  Bosphorus, which connects the Sea of Marmara and Black Sea. It
                  is the only city in the world that sits on two continents.
                </p>
                <div className="countries-list__info">
                  <div className="population">
                    <FaUser />
                    <span className="">67.41 Mil People</span>
                  </div>
                  <div className="area">
                    <TfiWorld />
                    <span>551.500 km2</span>
                  </div>
                  <div className="price">
                    <AiFillHome />
                    <span>$425.600</span>
                  </div>
                </div>
                <a
                  className="countries-list__link
                "
                  href="http://"
                  target="_blank"
                >
                  Need Directions?{" "}
                  <FaArrowRight className="countries-list__icon" />
                </a>
              </div>
            </li>
            <li className="countries-list__item">
              <img
                src={SharmImg}
                alt="Sharm El-Sheikh's image"
                className="countries-list__img"
              />
              <div className="countries-list__content">
                <div className="countries-list__heading">
                  <div className="">
                    <h4 className="countries-list__title">Sharm El-Sheikh</h4>
                    <h5 className="countries-list__subtitle">eqypt</h5>
                  </div>
                  <button className="btn countries-list__btn">
                    explore more
                  </button>
                </div>
                <p className="countries-list__text">
                  Sharm El Sheikh is the center of tourism action in Sinai
                  Peninsula and it has the world top diving sites. Specially the
                  underwater wonders of Ras Mohammed national park that took
                  Sharm city to whole different level. The city has diving and
                  shipwreck sites that attract both advanced and recreational
                  divers from around the world to discover the un parallel
                  marine life deep down the red sea.
                </p>
                <div className="countries-list__info">
                  <div className="population">
                    <FaUser />
                    <span className="">67.41 Mil People</span>
                  </div>
                  <div className="area">
                    <TfiWorld />
                    <span>551.500 km2</span>
                  </div>
                  <div className="price">
                    <AiFillHome />
                    <span>$425.600</span>
                  </div>
                </div>
                <a
                  className="countries-list__link
                "
                  href="http://"
                  target="_blank"
                >
                  Need Directions?{" "}
                  <FaArrowRight className="countries-list__icon" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
