import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
