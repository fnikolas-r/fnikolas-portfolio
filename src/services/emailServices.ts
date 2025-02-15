import axios from "axios";
import DOMPurify from 'dompurify'

export interface IsendEmail {name:string, email:string, message:string, phone:string}

const EMAIL_API_URI = import.meta.env.VITE_EMAIL_BACKEND_URI

export const sendEmail = async(emailData:IsendEmail)=>{
    const {name, email, message, phone} = emailData;
    const cleanName = DOMPurify.sanitize(name) as string
    const cleanPhone = DOMPurify.sanitize(phone) as string
    const cleanResponderEmail = DOMPurify.sanitize(email) as string
    const cleanBody = DOMPurify.sanitize(message+" Also Phone Number is :"+cleanPhone) as string
    return axios.post(EMAIL_API_URI,{
        name:cleanName,
        email:cleanResponderEmail,
        message:cleanBody
    })

}
