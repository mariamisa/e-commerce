import React,{Component} from 'react'

import FormInput from '../FormInput';
import FormHeader from '../FormHeader';
import Button from '../Button'

import {signInWithGoogle,auth} from '../../firebase/firebase.utils'

import './style.scss'

export default class LoginForm extends Component {
    state={
        email:"",
        password:"",
    }
    handelSubmit=async(e)=>{
        e.preventDefault();
        const {email,password} =this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:"",password:""})
        }catch(e){
            alert(e.message)
        }
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
                    <div className='buttons'>
                    <Button type="submit">sign in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>sign in with google</Button>
                    </div>
                </form>
            </div>
        )
    }
}
