import React from 'react';
// import './Login.css';
import { withRouter } from 'react-router-dom';
import sq from '../fq.png';


class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111',
            username:'',
            password:'',
            verify:'',
            login:false
        };
    }
    userchange=(e)=>{
        let val = this.refs.username.value;
        this.setState(
            {
                username:val
            }
        )
    }
    passwordcange=(e)=>{
        let val = this.refs.password.value;
        this.setState(
            {
                password:parseInt(val)
            }
        )
    }
    verifychange=(e)=>{
        let val = this.refs.verify.value;
        this.setState(
            {
                verify:parseInt(val)
            }
        )
    }
    checkuser=(e)=>{
        if(this.state.username.includes('@umass.edu')){
            alert("verify code sent");
        }else{
            alert("Not umass account, Denid");
        }

    }
    submity=(e)=>{
        if(this.state.username.includes('@umass.edu') && this.state.verify==123456){
            alert("signup success");
            this.props.history.push({pathname:'/'});
        }else{
            alert("Not uMass account or verify code wrong, Denid");
        }

    }
    render(){
        return(

            <div className='Login_main'>
              <img id="flysq" alt="logo" src={sq} display="inline"/>
                <h1 id="hh">Signup</h1>
                <b className='Login'/>
                <br></br>
                <input ref="username" onChange={this.userchange} placeholder="@umass.edu"/>  <button onClick={this.checkuser}>verify</button>
                <br/><br/>
                <a className='password'/>
                <input type="password" ref="password" onChange={this.passwordcange} placeholder="Password"/>
                <br/><br/>
                <input ref="verify" onChange={this.verifychange} placeholder="verify code"/>
                <br/><br/>
                <button id='submit' onClick={this.submity}>Signup</button>
                

            </div>
        );
    }
}


export default withRouter (Signup);;
