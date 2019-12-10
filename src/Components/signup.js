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
        if(this.state.username.includes('@umass.edu')){
            alert("Signup success");
            this.props.history.push({pathname:'/'});
        }else{
            alert("Not umass account, Denid");
        }

    }
    render(){
        return(

            <div className='Login_main'>
              <img id="flysq" alt="logo" src={sq} display="inline"/>
                <h1 id="hh">Signup</h1>
                <b className='Login'/>
                <br></br>
                <input ref="username" onChange={this.userchange} placeholder="@umass.edu"/>
                <br/><br/>
                <a className='password'/>
                <input type="password" ref="password" onChange={this.passwordcange} placeholder="Password"/>
                <br/><br/>
                <button id='submit' onClick={this.checkuser}>Signup</button>
                

            </div>
        );
    }
}


export default withRouter (Signup);;
