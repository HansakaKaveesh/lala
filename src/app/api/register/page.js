import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { fullName, username, email, phoneNumber, country, role, password } = req.body;

      if (!fullName || !username || !email || !phoneNumber || !country || !role || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = new User({ fullName, username, email, phoneNumber, country, role, password });

      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
