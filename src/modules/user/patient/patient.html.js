import React from 'react';
import Iframe from 'react-iframe'
import { Button } from 'reactstrap';
import './patient.css';

export default function () {
    return(
        <div className="page-content-wrapper ">
            <div className="content">
                <div className=" container-fluid   container-fixed-lg">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-transparent">
                                <div className="card-header ">
                                    <div className="card-title">Patient Dashboard
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-default">
                                                <div className="card-header">
                                                    <div className="card-title"><h3><span className="semi-bold">Important Points to Note :</span></h3>
                                                    </div>
                                                </div>
                                                <div className="card-body" style={{height:415+'px'}}>
                                                    <div className="scrollable" style={{height:100+'%'}}>
                                                        <div className="demo-card-scrollable">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="col-lg-3 inline m-r-40">
                                                    <div className="row">
                                                        <div className="card card-default">
                                                            <div className="card-header">
                                                                <div className="card-title"><h4><span className="semi-bold">Appointment</span></h4>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="" style={{height:100+'%'}}>
                                                                    <div className="demo-card">
                                                                        <Button className= "fillwidth" disabled={this.state.info.doctor?true:false} onClick={(e)=>this.scheduleAppointment(e)} color="primary">Schedule</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 inline">
                                                    <div className = "row">
                                                        <div className="card card-default">
                                                            <div className="card-header">
                                                                <div className="card-title"><h4><span className="semi-bold">Doctor Details :</span>{this.state.info.doctor ? this.state.info.doctor.name : 'No doctor assigned'}</h4>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="" style={{height:100+'%'}}>
                                                                    <div className="demo-card">
                                                                        <div className="card-title">
                                                                            {this.state.iframeUrl === '' ?<p><span className="semi-bold">{this.state.info.wait ? 'The estimated waiting time is ' + this.state.info.wait + ' minutes at which time you will be connected to the doctor.':'No wait Details available'}</span></p>:
                                                                            <Button  onClick={(e)=>this.openAppointment(e)} color="complete">Join</Button>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}