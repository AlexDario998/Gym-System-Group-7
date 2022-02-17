

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
})

let mailOptions = {
    from: "Elkin",
    to: "nubemegasgratis123@gmail.com",
    subject: "Hola, bienvenido",
    html: 
        `
        <h3>Hola</h3>
    `
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    }else {
        console.log("El correo se envio correctamente " + info.response)
    }
})