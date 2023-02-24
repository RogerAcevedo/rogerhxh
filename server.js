// ! NODEMAILER PACKAGE

// ! DECLARE/USE MODULES 
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// ! SET UP A SERVER THAT RUNS ON LOCALHOST 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// ! SET UP ACCOUNT WITH "APPLICATION PASSWORD"
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "rogeracevedocreate@gmail.com",
    pass: "pmynoqejxaueqvej"
  },
});

// ! VERIFY THAT IT IS RUNNING
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// ! MAKE A POST REQUEST TO OUR CREATED API URL
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "rogeracevedocreate@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

//   ! SEND BACK ERROR OR MESSAGE SENT
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});



// ! RUN SERVER ON LOCAL COMPUER - ON TERMINAL RUN "NPM SERVER"