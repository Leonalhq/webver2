import React from 'react';
// import './Login.css';
import { withRouter } from 'react-router-dom';
import sq from '../fq.png';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111',
            username:'',
            password:'',
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
    checkuser=(e)=>{
        if(this.state.username==='tim@umass.edu' && this.state.password===111){
            alert("login success");
            this.props.history.push({pathname:'/main'});
        }else{
            alert("username or password wrong!");
        }

    }
    signup=(e)=>{
        
            this.props.history.push({pathname:'/Signup'});

    }
    render(){
        return(

            <div className='Login_main'>
              <img id="flysq" alt="logo" src={sq} display="inline"/>
                <h1 id="hh">Login</h1>
                <b className='Login'/>
                <br></br>
                <input ref="username" onChange={this.userchange} placeholder="Username"/>
                <br/><br/>
                <a className='password'/>
                <input type="password" ref="password" onChange={this.passwordcange} placeholder="Password"/>
                <br/><br/>
                <button id='submit' onClick={this.checkuser}>Login</button>
                <br/><br/>
                <button id='submit' onClick={this.signup}>Signup</button>

                

            </div>
        );
    }
}


export default withRouter (Login);;
