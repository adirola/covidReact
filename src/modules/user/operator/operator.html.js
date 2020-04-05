import React from 'react';
import { Button } from 'reactstrap';
import './operator.css';

export default function () {
    return(
        <div className="page-content-wrapper ">
            <div className="content">
                <div className=" container-fluid   container-fixed-lg">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-transparent">
                                <div className="card-header ">
                                    <div className="card-title">Operators Dashboard
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="card card-default">
                                                <div className="card-header">
                                                    <div className="card-title"><h3><span className="semi-bold">Patient</span> List</h3>
                                                    </div>
                                                </div>
                                                <div className="card-body" style={{height:615+'px'}}>
                                                    <div className="scrollable" style={{height:100+'%'}}>
                                                        <div className="demo-card-scrollable">
                                                            <table className="table table-hover" id="basicTable">
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{width:1+'%'}} className="text-center">
                                                                        <button className="btn btn-link"><i className="pg-trash"></i>
                                                                        </button>
                                                                        </th>
                                                                        <th style={{width:20+'%'}}>Name</th>
                                                                        <th style={{width:20+'%'}}>Doctor</th>
                                                                        <th style={{width:20+'%'}}>Status</th>
                                                                        <th style={{width:20+'%'}}>Wait</th>
                                                                        <th style={{width:20+'%'}}>Connect</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.data && this.state.data.map((patient,index)=>{
                                                                        return (
                                                                                <tr key={index+patient._id}> 
                                                                                    <td className="v-align-middle">
                                                                                    <div className="checkbox text-center">
                                                                                        <input type="checkbox" value="3" id={"checkbox"+index}/>
                                                                                        <label htmlFor={"checkbox"+index} className="no-padding no-margin"></label>
                                                                                    </div>
                                                                                    </td>
                                                                                    <td className="v-align-middle ">
                                                                                    <p>{patient.name}</p>
                                                                                    </td>
                                                                                    <td className="v-align-middle">
                                                                                    <p>{patient.doctor.name}</p>
                                                                                    </td>
                                                                                    <td className="v-align-middle">
                                                                                    <p>{patient.status}</p>
                                                                                    </td>
                                                                                    <td className="v-align-middle">
                                                                                    <span title="Send message to patient" onClick={this.message}>Message<i className="glyphicon glyphicon-log-in"></i></span>
                                                                                    </td>
                                                                                    <td className="v-align-middle">
                                                                                    <span title="Connect with doctor" onClick={()=>{this.connect(patient)}}>Connect<i className="glyphicon glyphicon-edit"></i></span>
                                                                                    </td>
                                                                                </tr>
                                                                            );
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3">
                                            <div className="col-lg-12">
                                                <div className = "row">
                                                    <div className="card card-default">
                                                        <div className="card-header">
                                                            <div className="card-title"><h3><span className="semi-bold">Status :</span> {this.state.status?this.state.status:'Offline'}</h3>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="" style={{height:100+'%'}}>
                                                                <div className="demo-card">
                                                                    {this.state.status && this.state.status==='Offline'?
                                                                    <Button className= "fillwidth" onClick={(e)=>this.toggle(e,'online')} color="complete">Online</Button>:
                                                                    <Button className= "fillwidth" onClick={(e)=>this.toggle(e,'offline')} color="danger">Offline</Button>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className="card card-default">
                                                        <div className="card-header">
                                                            <div className="card-title"><h3><span className="semi-bold">Doctors </span></h3>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="" style={{height:100+'%'}}>
                                                                <div className="demo-card">
                                                                    {this.state.doctorsList && this.state.doctorsList.map((doc,index)=>{
                                                                        return (
                                                                            <div className='col-lg-12 m-b-10' key={doc._id+index}>
                                                                                <div className="col-lg-6 inline">
                                                                                    {doc.name &&  <p>{doc.name}</p>}
                                                                                </div>
                                                                                <div className="col-lg-6 inline">
                                                                                    {doc.status === true?<Button className= "fillwidth" onClick={(e)=>this.toggleDoc(index,'online')} color="complete">Online</Button>
                                                                                    :<Button className= "fillwidth" onClick={(e)=>this.toggleDoc(index,'offline')} color="danger">Offline</Button>}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
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