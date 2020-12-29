import React,{Component} from 'react'

import FormInput from '../FormInput';
import FormHeader from '../FormHeader';
import Button from '../Button'

import './style.scss'

export default class LoginForm extends Component {
    state={
        email:"",
        password:"",
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:"",password:""})
    }
    handelChange=({target:{name,value}})=>{
        this.setState({[name]:value})
    }
    render(){
        const {email,password}=this.state;
        return (
            <div className="sign-in">
                <FormHeader
                title="I already have an account"
                subTitle="Sign in with your email and password"
                />
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                    type="email" 
                    label="Email"
                    handelChange={this.handelChange}
                    name="email"
                    value={email}
                    required
                    />

                    <FormInput
                    type="password" 
                    label="Password"
                    handelChange={this.handelChange}
                    name="password"
                    value={password}
                    required
                    />
                   <Button type="submit">sign in</Button>
                </form>
            </div>
        )
    }
}
