import React from 'react';
import './swap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalView from "./modal"
import swapIcon from "../../../assets/images/swap.svg"

export default function () {
    return(
      <React.Fragment>
      <div className="pb-20">
      <div className="connect-wallet-top"> 
                    <button className="btn"  onClick={this.loadBlockchainData}>{this.state.walletConnected?this.state.account:'Connect Wallet'}</button>
                </div>
          <Tabs onSelect={index => this.manageContract(index)}>
              <TabList>
                {this.state.poolInfo.map((val,index)=>{
                  return <Tab className="btn">{val.name}</Tab>
                })}
              </TabList>

              <TabPanel>
                  <div className="box-wrapper">
                      <h1>Melon Swap</h1>
                      <div className="select-group-section">
                          <div className="select-group">
                              <select onChange={(e)=>this.onInputChange(e)}>
                                  {this.state.basePoolCoins.map((val,index)=>{
                                    return <option key={index} value={val.name}>{val.name}</option>
                                  })}
                              </select>
                              <input onBlur={(e)=>this.getPriceEstimate(e)} />
                          </div>
                          <div className="select-group">
                              <select value={this.state.outPutCoin} onChange={(e)=>{this.setState({outPutCoin:e.target.value})}}>
                              {this.state.secondaryCoin.map((val,index)=>{
                                    return <option key={index} value={val.name}>{val.name}</option>
                                })}
                              </select>
                              <input disbaled={true} value={this.state.expectedOutput} readOnly={true}/>
                          </div>
                      </div>
                      <div className="swap-icon">
                          <img src={swapIcon} alt="Swap" />
                      </div>
                      <div className="swap-btn">
                          <button className="btn" onClick={this.swap}>SWAP</button>
                      </div>
                      <div className="row text-white details-text">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                              <b>Price Impact : {this.state.priceImpact} </b>
                          </div>
                          <div className="col-sm-4">
                              <b>Max Slippage : <span onClick={(e)=>{this.setState({maxSlipage:e.target.value})}}>0.1</span>, <span onClick={(e)=>{this.setState({maxSlipage:e.target.value})}}>0.05</span> </b>
                          </div>
                      </div>
                  </div>
                  <div className="two-buttons">
                      <ModalView name="DEPOSIT" coinList={this.state.basePoolCoins} selectedPool={this.state.selectedPool} contract={this.state.contract}/>
                      <ModalView name="WITHDRAW" />
                  </div>
                  <div className="box-wrapper pb-0">
                      <h3>Reserves</h3>
                      {this.state.basePoolCoins.map((val,index)=>{
                        return (
                          <div className="row text-white details-text" key={index}>
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                              <b>{val.name} :{val.balance} </b> 
                          </div>
                          </div>
                        )
                      })}
                      <div className="row text-white details-text details-footer">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-3">
                              <b>Total : {this.state.basePoolCoins.reduce((acc,val)=>{
                                          acc=acc+val.balance
                                          return acc;
                              },0)} </b>
                          </div>
                          <div className="col-sm-3">
                              <b>24H Vol : </b>
                          </div>
                          <div className="col-sm-3">
                              <b>APY : </b>
                          </div>
                      </div>
                  </div>
              </TabPanel>
              <TabPanel>
                  <div className="box-wrapper">
                      <h1>Melon Swap</h1>
                      <div className="select-group-section">
                          <div className="select-group">
                              <select onChange={(e)=>this.onInputChange(e)}>
                              {this.state.metaPoolVaiCoins.map((val,index)=>{
                                    return <option key={index} value={val.name}>{val.name}</option>
                                  })}
                              </select>
                              <input />
                          </div>
                          <div className="select-group">
                              <select>
                              {this.state.secondaryCoin.map((val,index)=>{
                                    return <option key={index} value={val.name}>{val.name}</option>
                                })}
                              </select>
                              <input />
                          </div>
                      </div>
                      <div className="swap-icon">
                          <img src={swapIcon} alt="Swap" />
                      </div>
                      <div className="swap-btn">
                          <button className="btn">SWAP</button>
                      </div>
                      <div className="row text-white details-text">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                              <b>Price Impact : </b>
                          </div>
                          <div className="col-sm-4">
                              <b>Max Shippage : </b>
                          </div>
                      </div>
                  </div>
                  <div className="two-buttons">
                      {/* <ModalView name="DEPOSIT" />
                      <ModalView name="WITHDRAW" /> */}
                  </div>
                  <div className="box-wrapper pb-0">
                      <h3>Reserves</h3>
                      <div className="row text-white details-text">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                              <b>BUSD : </b>
                          </div>
                          <div className="col-sm-4">
                              <b>DAI : </b>
                          </div>
                      </div>
                      <div className="row text-white details-text">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                              <b>USDT : </b>
                          </div>
                          <div className="col-sm-4">
                              <b>USDC : </b>
                          </div>
                      </div>
                      <div className="row text-white details-text details-footer">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-3">
                              <b>Total : </b>
                          </div>
                          <div className="col-sm-3">
                              <b>24H Vol : </b>
                          </div>
                          <div className="col-sm-3">
                              <b>APY : </b>
                          </div>
                      </div>
                  </div>
              </TabPanel>
          </Tabs>
      </div>
  </React.Fragment>
    );
}