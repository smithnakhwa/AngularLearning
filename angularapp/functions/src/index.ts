import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  const displayName = user.displayName;


  console.log(`Welcome ${displayName}! We sent an email to ${email}.`);

  return null; // Return null or a Promise
});
