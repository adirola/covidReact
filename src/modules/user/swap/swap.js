import {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Signinhtml from './swap.html'
import store from '../../../store/store'
import toastr from 'toastr'
import BigNumber from "bignumber.js";
import { CONTRACT_ABI_POOL, CONTRACT_ADDRESS_POOL, ERC_20_ABI} from '../../../contracts/config'
import Web3 from "web3";

let web3;


const precision = 10**18;


class Signin1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            basePoolCoins:[{name:'BUSD',balance:0,index:0,add:'0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'},{name:'USDT',balance:0,index:1,add:'0x55d398326f99059ff775485246999027b3197955'},{name:'DAI',balance:0,index:2,add:'0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3'},{name:'USDC',balance:0,index:3,add:'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'}],
            metaPoolVaiCoins : [{name:'VAI',balance:0},{name:'BUSD',balance:0},{name:'USDT',balance:0},{name:'DAI',balance:0},{name:'USDC',balance:0}],
            secondaryCoin : [{name:'USDT',balance:0,index:1,add:'0x55d398326f99059ff775485246999027b3197955'},{name:'DAI',balance:0,index:2,add:'0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3'},{name:'USDC',balance:0,index:3,add:'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'}],
            inputCoin : 'BUSD',
            outPutCoin : 'USDT',
            poolInfo : [{poolIndex:0,name:"4 POOL",type:'base'},{poolIndex:1,name:"VAI POOL",type:"meta"}],
            selectedPool : 0,
            BUSD:0,
            USDT:0,
            DAI:0,
            VAI:0,
            USDC:0,
            walletConnected:false,
            expectedOutput:0,
            inputValue:0

        }
    }
    

    loadBlockchainData = async ()=>{
        web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        if (typeof web3 === 'undefined') {
            this.setState({ethEnabled:false})
        }else{
        web3.eth.getAccounts(function(err, accounts){
            if (err != null) {console.error("An error occurred: "+err);}
            else if (accounts.length == 0){ console.log("User is not logged in to MetaMask") ;}
            else {console.log("User is logged in to MetaMask");}
        });
        }
        const accounts = await web3.eth.getAccounts()

        this.setState({ account: accounts[0] ,walletConnected:true})

        console.log(accounts)
        let contract= null;
       
        switch(this.state.selectedPool){
            case 0 :  contract = new web3.eth.Contract(CONTRACT_ABI_POOL, CONTRACT_ADDRESS_POOL);
                        this.setState({ contract })
                        let balances = []
                       for(let i=0;i<this.state.basePoolCoins.length;++i){
                           let val = await contract.methods.balances(i).call();
                           balances.push(val/precision)
                       }
                        var newArr = this.state.basePoolCoins.map((val,index)=>{
                             val.balance = balances[index];
                             return val;
                        })
                        this.setState({basePoolCoins:newArr})
                        break;
        }
    }

    getXY = () =>{
        let result= {x:-1,y:-1}
        switch(this.state.selectedPool){
            case 0: result.x= this.state.basePoolCoins.find((val)=>{
                        return val.name.toLowerCase() == this.state.inputCoin.toLowerCase();
                    }).index
                    result.y=this.state.basePoolCoins.find((val)=>{
                        return val.name.toLowerCase() == this.state.outPutCoin.toLowerCase();
                    }).index
        }

        return result

    }


    getPriceEstimate= async(e)=>{
        if(e){
            this.setState({inputValue:e.target.value})
        }
        let xy = this.getXY() 
        if(this.state.contract){
            let inputVal = new BigNumber(this.state.inputValue*Math.pow(10,18));
            console.log(inputVal)
            let estOutput = await this.state.contract.methods.get_dy(xy.x,xy.y,inputVal.toString()).call()
            let bigEstOutput = new BigNumber(estOutput);
            let priceImpact = bigEstOutput.minus(this.state.inputValue*Math.pow(10,18)).div(this.state.inputValue*Math.pow(10,18)).times(100);
            this.setState({priceImpact:priceImpact.toString()/precision});
            this.setState({expectedOutput:bigEstOutput.toString()/precision});
        }
    }


    swap = async() =>{
        let xy = this.getXY();
        let address = null;
        switch(this.state.selectedPool){
            case 0 : address = this.state.basePoolCoins[xy.x].add
        }
        const erc20abiContract = new web3.eth.Contract(ERC_20_ABI, address);
        let ammount = new BigNumber(this.state.inputValue*Math.pow(10,18));
        console.log(ammount.toString())
        let result = await erc20abiContract.methods.approve(CONTRACT_ADDRESS_POOL,ammount.toString()).send({from:this.state.account});
        if(result.code !== 4001){
            let inputValue= new BigNumber(this.state.inputValue*precision)
            let minOutput = new BigNumber((this.state.inputValue*(1-this.state.maxSlipage))*Math.pow(10,18));
            let finalResult = await this.state.contract.methods.exchange(1,0,inputValue.toString(),minOutput.toString()).send({from:this.state.account});
            console.log(finalResult);
        }
        
    }

    onInputChange=(e)=>{
        this.setState({inputCoin:e.target.value})
        switch(this.state.selectedPool){
            case 0: this.setState({inputCoin:e.target.value},function() {
                console.log(this.state.inputCoin);
                let arr = this.state.basePoolCoins.filter(val=>val.name.toLowerCase()!==this.state.inputCoin.toLowerCase())
                this.setState({secondaryCoin:arr,outPutCoin:arr[0].name});
                
                }) 
                break;
            case 1 : this.setState({inputCoin:e.target.value},function() {
                console.log(this.state.inputCoin);
                let arr = this.state.metaPoolVaiCoins.filter(val=>val.name.toLowerCase()!==this.state.inputCoin.toLowerCase())
                this.setState({secondaryCoin:arr,outPutCoin:arr[0].name});
                
                }) 
                break;
        }
        this.getPriceEstimate();
    }

    manageContract = (index)=>{

       
        switch(index){
            case 0 : this.setState({inputCoin:this.state.basePoolCoins[0].name,selectedPool:0},function() {
                        console.log(this.state.inputCoin);
                        this.setState({secondaryCoin:this.state.basePoolCoins.filter(val=>val.name.toLowerCase()!==this.state.inputCoin.toLowerCase())});
                        
            });
            break;
            case 1 : this.setState({inputCoin:this.state.metaPoolVaiCoins[0].name,selectedPool:1},function() {
                console.log(this.state.inputCoin);
                this.setState({secondaryCoin:this.state.metaPoolVaiCoins.filter(val=>val.name.toLowerCase()!==this.state.inputCoin.toLowerCase())});});
                break;
                
        }
        
       
    }

    renderSecondaryField = () =>{}

    

    

    register = () =>{
        this.props.history.push('/register')
    }

    render(){
        return Signinhtml.call(this);
    }
}
const matchStateToProps = state => ({
    authenticate : state.authenticate
})

export default withRouter(connect(matchStateToProps)(Signin1))
