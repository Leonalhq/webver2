import React from 'react';
// import './Login.css';
import { withRouter } from 'react-router-dom';


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
        if(this.state.username==='admin' && this.state.password===111){
            alert("login success");
            this.props.history.push({pathname:'/main'});
        }else{
            alert("username or password wrong!");
        }

    }
    render(){
        return(

            <div className='Login_main'>
                <h1 id="hh">Login</h1>
                <b className='Login'/>
                <br></br>
                <input ref="username" onChange={this.userchange} placeholder="Username"/> 
                <br/><br/>
                <a className='password'/>
                <input ref="password" onChange={this.passwordcange} placeholder="Password"/>
                <br/><br/>  
                
                <button id='submit' onClick={this.checkuser}>login</button>
                
            </div>
        );
    }
}


export default withRouter (Login);;