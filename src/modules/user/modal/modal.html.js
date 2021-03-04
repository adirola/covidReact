  
import React from 'react';
import Modal from 'react-modal';
import closeIcon from "../../../assets/images/close.svg"


export default function () {
    return(
      <React.Fragment>
      <button className="btn block" onClick={this.openModal}>{this.props.name}</button>

      <Modal style={this.customStyles} className="modal-cus" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal} className="modal-close-icon"><img src={closeIcon} /></button>
          <div className="modal-body">
              <div className="row">
                  <div className="col-sm-6">
                      {this.props.coinList.map((val,index)=>{
                        return <div className="listbox-dtl" key={index}>
                        <div className="listbox-dtl-header">
                            <div className="row">
                                <div className="col-sm-6">
                                    {val.name}
                                </div>
                                <div className="col-sm-6">
                                    Max : {}
                                </div>
                            </div>
                        </div>
                        <div className="listbox-dtl-body">
                            <input onChange={(e)=>{this.deposit(e,index)}} value={this.state.depositFund[index]}  />
                        </div>
                    </div>
                      })}
                  </div>
                  <div className="col-sm-6 text-white modal-right">
                      <div className="withdrawinput-group">
                          <button className="btn" onClick={this.depositFunds}>{this.props.name}</button>
                      </div>
                      <div>
                          <h3>Max Slippage : </h3>
                          <p>{this.state.estOutput}</p>

                          <h3>RESERVES :</h3>

                          <p></p>
                          <p></p>
                          <p></p>
                          <p>Total : {this.state.coinList.reduce((acc,val)=>{
                                          acc=acc+val.balance
                                          return acc;
                              },0)} </p>
                          <p>24H VOLUME : </p>
                          <p>APY : </p>
                      </div>
                  </div>
              </div>
          </div>
      </Modal>
  </React.Fragment>
    );
}