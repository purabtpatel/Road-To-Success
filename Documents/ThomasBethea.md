
# Thomas Bethea




## Team Kenny: Security

 Teammates:
 - Dhruv Kansara
 - Sergio Acevedo


## Contributions

Team Collaboration:
- Our team made use of the liveshare extension on VSCode to view eachothers' work in real-time, remotely

Auth0 authentication:
- Generated main layout (MainLayout.js) and edited contents
- Updated Routes.js to use MainLayoutr
- Made first pull request (11/1)

Reminders:
- Created branch to add reminder emails. Discontinued idea. Deleted branch.

User Email Verification:
- Generated VerificationPage
- Generated VerificationResetPage
- Modified Routes.js to reflect additions of VerificationPage and VerificationResetPage
- Added Emails folder to api/src
- Inside of Emails folder, added create-password.js, forgot-password.js, and user-verification.js
- Modified files inside of Emails folder to reflect purpose
- Created mailer.js inside of api/src/lib to utilize NodeMailer to send verification/forgot password emails to users
- Added verificaiton component to web/src/components and modified contents 
- Created "dist" folder inside of api folder. Created emails folder with create-password, forgot-password, and user-verification.js
- Created a .map file for each file inside of "dist" folder. Ex. create-password.js.map
- Modified mutation inside of schema.graphql to reflect verifyEmail and verifyReset.
- Inside of apr/src/graphql/users.sdl.js, modified Mutation to include verifyEmail and updateEmail 
- Inside of api/src/services/users/users.js modified file to include verifyEmail and updateEmail
- Email verification feature did not make it into final iteration. This is a work in progress. Branch below
- Branch: https://github.com/dhruvilk/Road-To-Success/commit/6de0406ddd6580ffe398fcb390348c8f8e76e781

References:
- https://medium.com/@agiannelli/building-an-authenticated-site-with-redwoodjs-and-auth0-e476a5313563
- https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
- https://docs.nhost.io/quickstarts/redwoodjs
- https://community.redwoodjs.com/t/how-do-i-deny-a-user-that-hasnt-verified-their-email-address/2532/6
- https://nodemailer.com/about/
- https://redwoodjs.com/docs/how-to/sending-emails


## 🔗 My Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/tombethea)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/thomas-bethea-9ba058187)
