import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
/*import './assets/js/bootstrap.min.js';
import 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
import './assets/js/main-script.js';
import './assets/js/jquery.min.js';
import './assets/js/jasny-bootstrap.min.js';
import './assets/css/navmenu-reveal.css';
import './assets/css/jasny-bootstrap.min.css';
import './assets/css/navmenu-reveal.css';*/

const sidebar= props =>(
<div className="navmenu navmenu-default navmenu-fixed-left">
<div className="slide-menu">
  <span className="navmenu-brand">DASHBOARD MENU</span>
  <div className="navbar navbar-default slide-button">
    <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-recalc="false" data-target=".navmenu" data-canvas=".canvas">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  </div>
</div>
<ul className="nav navmenu-nav">
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src={require("./assets/img/dash-1.png")} className="img-responsive inline-block"/>Perizinan Online <i className="fa fa-chevron-right col-white" aria-hidden="true"></i></a>
    <ul className="dropdown-menu navmenu-nav">
      <li><a href="../dashboard-izin-angkutan/izin-perkotaan.html">Perkotaan</a></li>
      <li><a href="../dashboard-izin-angkutan/izin-pemukiman.html">Pemukiman</a></li>
    </ul>
  </li>
  <li className="dropdown active">
    <a href="../UTS-ppaw-B-kelompok-2/monitoring-berkas-pemukiman.html" className="dropdown-toggle"><img src={require("./assets/img/dash-2.png")} className="img-responsive inline-block"/>Monitoring Berkas</a>
  </li>
  <li className="dropdown">
    <a href="#" className="dropdown-toggle"><img src={require("./assets/img/dash-3.png")} className="img-responsive inline-block"/>Cara Penggunaan</a>
  </li>
  <li className="dropdown">
    <a href="#" className="dropdown-toggle"><img src={require("./assets/img/dash-4.png")} className="img-responsive inline-block"/>Call Center</a>
  </li>
  <li className="dropdown">
    <a href="#" className="dropdown-toggle"><img src={require("./assets/img/dash-5.png")} className="img-responsive inline-block"/>Regulasi / Ketentuan</a>
  </li>
</ul>
</div>
);
export default sidebar;


