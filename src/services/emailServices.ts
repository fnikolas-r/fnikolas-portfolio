import axios from "axios";
import DOMPurify from 'dompurify'

export interface IsendEmail {name:string, email:string, message:string}

const EMAIL_API_URI = import.meta.env.VITE_EMAIL_BACKEND_URI
const DEST = import.meta.env.VITE_EMAIL_BACKEND_DESTINATION
const createEmailTemplate = (emailData : IsendEmail): string => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .email-body {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        .email-footer {
            font-size: 14px;
            text-align: center;
            color: #888;
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="email-header">
            Someone From Portfolio : ${emailData.name},
        </div>

        <div class="email-body">
            <p>${emailData.message}</p>
        </div>

        <div class="email-footer">
            <p>Please Response !ASAP🔥🔥 if this is important message</p>
            <p>Responder Email Here : ${emailData.email}</p>☻
        </div>
    </div>

</body>
</html>
`
export const sendEmail = async(emailData:IsendEmail)=>{
    const {name, email, message} = emailData;
    const cleanName = DOMPurify.sanitize(name) as string
    const cleanResponderEmail = DOMPurify.sanitize(email) as string
    const cleanBody = DOMPurify.sanitize(message) as string
    return axios.post(EMAIL_API_URI,{
        to:DEST,
        subject:"Portfolio Message From - "+cleanResponderEmail,
        text:createEmailTemplate({name:cleanName,message:cleanBody, email:cleanResponderEmail})
    })

}
