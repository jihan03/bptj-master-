import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/styles.css';
import './assets/css/font-awesome.min.css'
import './assets/css/font-awesome.min.css'


const form = props =>(
    <div className = "wrapper">
        <div className="container-fluid info input-dashboard">
            <div className="info-dashboard">
                <div className = "row">
                    <form action="#">
                        <div className="first section">
                            <div className="section-head">
                                <h4>Form Permohonan Izin Baru Angkutan Perkotaan <a href="#"><i className="fa fa-info-circle"></i></a></h4>
                            </div>
                            <div className ="isi-form">
                                <div className="form">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12 col-sm-12">
                                            <div className="form">
                                                <label for>Kode Trayek</label>
                                                <span className="red">(*)</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <button className="kode_trayek">
                                                Saya tidak mempunyai kode trayek <i className="fa fa-share"></i>
                                            </button>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form">
                                                <label for>Nama Pemukiman</label>
                                                <span className="red">(*)</span>
                                            </div>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form">
                                                <label for>Tujuan Perjalanan</label>
                                                <span className="red">(*)</span>
                                            </div>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form">
                                                <label for>Tempat Pemberhentian</label>
                                                <span className="red">(*)</span>
                                            </div>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form">
                                                <label for>Jumlah Kendaraan</label>
                                                <span className="red">(*)</span>
                                            </div>
                                            <input type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section section">
                            <div className="section-head">
                                <h4>Form Permohonan Izin Baru Angkutan Perkotaan <a href="#"><i className="fa fa-info-circle"></i></a></h4>
                            </div>
                            <div className="isi-form">
                                <div className="form">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Nomor Surat Permohonan</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Tanggal Surat Permohonan</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="date" className="form-control"/>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen Pemohon</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-12 col-xs-12">
                                            <button className="btn-upload" style={{background:'#ffb619'}}>
                                                Upload PDF
                                            </button>
                                            <div className="progress" style={{height:'10px',backgroundColor:'#c5c5c5',borderRadius:'0px'}}>
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%',borderRadius:'none',height:'10px'}}>
                                                    <span className="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-xs-1 col-sm-1">
                                            <i className="fa fa-check-circle" style={{color:'#c5c5c5'}}></i>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen NPWP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen NPWP Pimpinan</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen Akte Pendirian dan Perubahan</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label>Dokumen Pengesahan Kumham PendirianPerusahaan</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>
                                        <br/>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Nomor Surat TDP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Tanggal Surat TDP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="date" className="form-control"/>
                                        </div> 
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen TDP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div> 
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Nomor Surat SIUP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="text" className="form-control"/>
                                        </div> 
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                            <label for>Tanggal Surat SIUP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <input type="date" className="form-control"/>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen SIUP</label>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div> 
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="form">
                                                <label for>Dokumen Domisili</label>
                                            </div>
                                        </div>
                                            <div className="col-md-2 col-sm-12 col-xs-12">
                                            <span className="label-upload">Upload File :</span>
                                        </div>
                                        <div className="upload-btn-wrapper col-md-4 col-sm-11 col-xs-11">
                                            <button className="btn-upload">
                                                Upload PDF
                                            </button>
                                            <span className="upload-bar"></span>
                                        </div>  
                                        <div className="col-md-1 col-xs-1 col-sm-1"></div>  
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="submit-form">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <button type="button" name="button" className="btn-cancel">BATAL</button>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <button type="button" name="button" className="btn-submit">
                                        <span className="text">Ajukan Permohonan</span>
                                            <i className="fa fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-12" style={{padding:'0'}}>
                    <div className="footer">
                        <p>Hak Cipta &copy; 2018 . <strong>Badan Pengelola Transportasi JABODETABEK</strong>  | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
);
export default form;


