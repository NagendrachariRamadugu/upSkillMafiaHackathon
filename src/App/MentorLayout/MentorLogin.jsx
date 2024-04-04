import React from "react"
import {useState, useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import {format} from 'date-fns';

const MentorLogin = () => {
    const currentDate = new Date ()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState(format(currentDate, 'yyyy-MM-dd'))
    const [gender, setGender] = useState('')
    const [degree, setDegree] = useState('')
    const [domain, setDomain] = useState('')
    const [skills, setSkills] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const navigate = useNavigate()

    return (
        <div className="mentorship-main">
            <div className="enter-details-text">Please enter your details</div>
            <form className="mentorship-form">
                <label htmlFor="name-input">Enter Name</label>
                <input onChange = {(e) => {
                    setName(e.target.value)
                }}  
                    type="text"
                    name = 'name-input' 
                    id = 'name-input' 
                    value = {name}
                    required
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name = 'email' 
                    id = 'email'
                    value = {email}
                    onChange = {(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                />
                <label htmlFor="dob">Date of Birth</label>
                <input 
                    type="date" 
                    name = 'dob' 
                    id = 'dob'
                    value = {dob}
                    onChange = {(e) => {
                        setDob(e.target.value)
                    }}
                    required
                />
                <label htmlFor="male">Gender</label>
                <div className="gender">
                    <div>
                        <label className = 'gender-label' htmlFor="male">Male</label>
                        <input 
                            type = 'radio' 
                            id = 'male' 
                            name = 'gender' 
                            value = 'male'
                            onChange = {(e) => {
                                setGender(e.target.value)                            
                            }}
                        />
                    </div>
                    <div>
                        <label className = 'gender-label' htmlFor="female">Female</label>
                        <input 
                            type = 'radio' 
                            id = 'female' 
                            name = 'gender'
                            value = 'female'
                            onChange = {(e) => {
                                setGender(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label className = 'gender-label' htmlFor="prefer-not-to-say">prefer-not-to-say</label>
                        <input 
                            type = 'radio' 
                            id = 'prefer-not-to-say' 
                            name = 'gender'
                            value = 'prefer-not-to-say'
                            onChange = {(e) => {
                                setGender(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <label htmlFor="degree">Degree</label>
                <select 
                    name="degree" 
                    id="degree"
                    onChange = {(e) => {
                        setDegree(e.target.value)
                    }}
                >
                    <option value="Intermediate/diploma">Intermediate/diploma</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                </select>
                <label htmlFor="domain">Domain</label>
                <select 
                    name="domain"
                    id="domain"
                    onChange = {(e) => {
                        setDomain(e.target.value)
                        console.log(e.target.value)
                    }}
                >
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Full Stack development">Full Stack development</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select>
                <label htmlFor="skills">Skills</label>
                <textarea 
                    name="skills" 
                    id="skills"
                    value = {skills}
                    onChange = {(e) => {
                        setSkills(e.target.value)
                    }}
                    required
                ></textarea>
                <label htmlFor="password">Create password</label>
                <input 
                    type="password" 
                    id = 'password' 
                    name = 'password' 
                    value = {password}
                    onChange = {(e) => {
                        setPassword(e.target.value);
                    } }
                    required
                />
                <label htmlFor="password">Confirm password</label>
                <input 
                    type="password"
                    id = 'confirm-password' 
                    name = 'confirm-password' 
                    value = {conPassword}
                    onChange = {(e) => {
                        setConPassword(e.target.value);
                    }}
                    required
                />
                <input 
                    type="submit" 
                    value = 'Submit'
                    name = 'submit' 
                    id = 'submit'
                    onClick={(e) => {
                        if(conPassword != password) {
                            alert("Passwords do not match");
                        }
                    }}
                />
            </form>
        </div>
    )
}
export default MentorLogin