const nodemailer = require("nodemailer");

// Function to send emails using Nodemailer
const sendEmail = async (to, subject, text, name) => {
  try {
    // Create a Nodemailer transporter using your email service provider's details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "expressjunction58@gmail.com",
        pass: "ezsa zhne rrjh tzxb",
      },
    });
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Express-Junction</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     
    }

    img {
      max-width: 100%;
      height: auto;
    }

    h1 {
      color: #333;
    }
    .explore-button {
      display: inline-block;
      margin-top: 20px; /* Adjust this value as needed */
      padding: 10px 20px;
      background-color: #FFA500; /* Orange color */
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
      
    }
    a{
      text-decoration:none;
    }
    .button{
    
    }
    .explore-button:hover {
      background-color: #FF8C00; /* Darker shade of orange on hover */
    }
    p {
      color: #666;
    }

    .footer {
      margin-top: 20px;

    }
  </style>
</head>

<body>
  <div class="container">
    <img src="https://res.cloudinary.com/dwmdkrjhk/image/upload/v1705643282/ExpressJunction_lc0y1w.jpg" alt="Express-Junction Logo">
    <h1>Welcome ${name}!</h1>
    <p>Thank you for registering with Express-Junction, your one-stop courier solution. We are thrilled to have you
      on board!</p>
    <p>With Express-Junction, you can enjoy fast and reliable courier services tailored to your needs. Our team is
      dedicated to providing you with the best shipping experience.</p>
    <p>Feel free to explore our services and start shipping today!</p>
    <div class="button">
    <a href="https://www.instagram.com/darshan25503/" class="explore-button">Explore Our Website</a>
    </div>
    <div class="footer">
      <p>Best Regards,<br> The Express-Junction Team</p>
    </div>
  </div>
</body>

</html>

  `;
    // Define email options
    const mailOptions = {
      from: "expressjunction58@gmail.com", // Sender's email address
      to: to, // Receiver's email address
      subject: subject, // Email subject
      text: text, // Email body
      html: htmlContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error sending email: ", error.message);
    throw error;
  }
};

module.exports = sendEmail;
