import mongoose from "mongoose";

//Creating a User Model
const userProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name."]
    },
    linkedin: {
        type: String,
        required: [true, "Please provide a LinkedIn link."]
    },
    twitter: {
        type: String, 
        required: [true, "Please provide a Twitter link."],
    },
    github: {
        type: String, 
        required: [true, "Please provide a Github link."],
    },
    profile: {
        type: String, 
        required: [true, "Please provide your profile."],
    },
    languages:{
        type: Array,
        required: [true, "Please provide Programming languages."],
    }
}, { timestamps: true });

const userProfile = mongoose.model("userProfile", userProfileSchema);
export default userProfile;