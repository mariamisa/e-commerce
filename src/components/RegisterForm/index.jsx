import React,{Component} from 'react'

import FormInput from '../FormInput';
import FormHeader from '../FormHeader';
import Button from '../Button'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './style.scss'

export default class RegisterForm extends Component {
    state={
        email:"",
        password:"",
        confirmPassword:"",
        displayName:""
    }
    handelSubmit=async(e)=>{
        e.preventDefault();
        const {displayName,password,email,confirmPassword}=this.state;
        if(password!==confirmPassword){
           alert('password not match') 
           return
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                password:'',
                confirmPassword:'',
                email:''
            })

        }catch(e){
            alert(e.message)
        }

    }
    handelChange=({target:{name,value}})=>{
        this.setState({[name]:value})
    }
    render(){
        const {email,password,confirmPassword,displayName}=this.state;
        return (
            <div className="sign-up">
                <FormHeader
                title="I don't have an account"
                subTitle="Sign up with your email and password"
                />
                <form onSubmit={this.handelSubmit}>
                    <FormInput
                    type="text" 
                    label="userName"
                    handelChange={this.handelChange}
                    name="displayName"
                    value={displayName}
                    required
                    />
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
                    <FormInput
                    type="password" 
                    label="Confirm Password"
                    handelChange={this.handelChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    />
                   
                   <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
}
