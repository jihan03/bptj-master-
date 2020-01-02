import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/font-awesome.min.css'
import './assets/css/font-awesome.min.css'

const header = props =>(
    <div className = "canvas">
        <div className="breadcrumb dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="info-dashboard">
                <h1 className="name-title col-white bread">Permohonan Izin Baru - Angkutan Perkotaan</h1>
                <div className="breadcrumb-info">
                  <i className="fa fa-home" aria-hidden="true"></i> <a href="../Project_PPAW_Kel2_DashboardUser/index.html">Home</a> <span className="divider">/</span> <a href="#" className="active">Pemohon Persetujuan Izin</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="search-dashboard">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="#"></i></button>
                  </span>
                  <input type="text" className="form-control" placeholder="Search people, documents, dates..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
export default header;