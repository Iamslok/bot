import usersProfile from '../models/userprofile.js';
import { ObjectId } from 'mongodb';


// function to create new user
export const createUserProfile = async (req, res) => {
    try {
        const user = new usersProfile(req.body);
        await user.save();
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// function to fetch all users
export const getAllUserProfile = async (req, res) => {
    try {
        const user = await usersProfile.find();
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// function to fetch a user by ID
export const getUserProfileById = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const user = await usersProfile.findById(id);
        if (!user) {
            return res.status(404).json({ error: "no User found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
