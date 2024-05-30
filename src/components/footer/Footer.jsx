// styles
import "./Footer.css";
// images
import FooterBg from "../../assets/jpg/footer-bg.jpg";
function Footer() {
  return (
    <section className="footer">
      <div className="footer__content container">
        <div className="footer__text">
          <h1 className="footer__title">ARE YOU LOOKING TO TRAVEL ?</h1>
          <h2 className="footer__subtitle">
            Make A Reservation By Clicking The Button
          </h2>
        </div>
        <button className="footer__btn btn">Book your now</button>
      </div>
      <div className="copyright">
        <div className="copyright__container container">
          <p className="copyright__text">
            Copyright © 2024 <a href="#">Zamon Business Tour.</a> All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
