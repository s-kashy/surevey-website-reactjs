const mongoose = require("mongoose")


const requireLogin = require("../middlewares/requireLogin")
const requireCredits = require("../middlewares/requireCredits")
const surveyTemplate = require("../service/emailTemplet/surveyTemplate")
const Mailer = require("../service/Mailer")
const Survey = mongoose.model("surveys")
module.exports = app => {

    app.get("/api/surveys/thanks",(req,res)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.end('<p>hi there</p>')
    })
    app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {

        const { title, subject, body, recipients } = req.body
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() } }),
            _user: req.user.id,
            dateSent: Date.now()

        })

        const mailer = new Mailer(survey, surveyTemplate(survey))
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1
            const user = await req.user.save();
            res.send(user)
        } catch (err) {
            res.status(422).send(err)
        }



    })
}