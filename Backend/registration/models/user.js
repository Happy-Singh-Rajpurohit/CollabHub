// Import Mongoose library to define the data structure (schema) and model
import mongoose from "mongoose";

/*
 🧩 USER SCHEMA OVERVIEW
 ---------------------------------------
 This schema defines how each user will be stored in MongoDB.

 It covers:
  - Basic user information (name, email, password)
  - Email verification system
  - Password reset system
  - Auto timestamps (createdAt, updatedAt)
*/

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true
    },

    //  USER BASIC INFO
    name: {
      type: String,
      required: true, // Every user must have a name
    },
    // phone: {
    //   type:Number,
    //   required:true,
    //   unique: true, 
    // },

    email: {
      type: String,
      required: true,
      unique: true, // Prevents multiple accounts using the same email
    },

    //  PASSWORD (hashed using bcrypt)
    password_hash: {
      type: String,
      required: true, // Must be set during registration
    },

    //  EMAIL VERIFICATION FIELDS
    verified: {
      type: Boolean,
      default: false, // User must verify email after registering
    },

    // Token used to verify user's email address (sent in verification link)
    verification_token: {
      type: String,
    },

    // Expiry time for the verification token (e.g. valid for 24 hours)
    verification_token_expires: {
      type: Date,
    },

    // 🔁 PASSWORD RESET FIELDS
    // Token used for password reset (sent in reset link)
    reset_password_token: {
      type: String,
    },

    // Expiry time for reset token (e.g. valid for 15 minutes)
    reset_password_expires: {
      type: Date,
    },
  },
  {
    //  Automatically adds createdAt and updatedAt fields to each document
    timestamps: true,
  }
);

/*
 📤 EXPORT THE MODEL
 ---------------------------------------
 The model is what allows us to interact with the 'users' collection
 in MongoDB (create, read, update, delete users).
 
 Mongoose automatically converts 'User' → 'users' collection.
*/
export default mongoose.model("User", userSchema);
