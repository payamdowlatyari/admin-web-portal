import React from "react";
import './Footbar.css';

const Footbar = () => {
  return (

    <div className="footer-copyright text-center py-3">
      <nav className="navbar fixed-bottom navbar-dark bg-dark">
        CalPlug &copy; {new Date().getFullYear()} | All Rights Reserved
        {/* <div className="social-links">
          <a href="/" class="fa fa-envelope"></a>
          <a href="/" class="fa fa-phone"></a>
          <a href="/" class="fa fa-twitter"></a>
          <a href="/" class="fa fa-facebook"></a>
          <a href="/" class="fa fa-linkedin"></a>
          <a href="/" class="fa fa-github"></a>
          <a href="/" class="fa fa-google"></a>
          <a href="/" class="fa fa-youtube"></a>
        </div> */}
      </nav>

    </div>

  );
}

export default Footbar;