const keys=require("../../config/keys")
module.exports=(survey)=>{
    return `
    <html>
    <body>
    <div style="text-align:center;">
    <h3>i'd like your input on the web site </h3>
    <p>${survey.body}</p>
    <div><a href="${keys.redirectDomain}/api/surveys/thanks">this link will not work yet </a></div>
    <div><a href="${keys.redirectDomain}/api/surveys/thanks">this link will not work yet </a></div>
    </div>
    </body>
   
    </html>
    `

}