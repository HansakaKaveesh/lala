import dbConnect from '../../lib/dbConnect'; // Adjust the path as necessary
import User from '../../models/User'; // Create a User model

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      // Check if user already exists
      const existingUser  = await User.findOne({ email });
      if (existingUser ) {
        return res.status(409).json({ message: 'User  already exists' });
      }

      // Create a new user
      const user = new User({ email, password }); // You should hash the password before saving
      await user.save();

      return res.status(201).json({ message: 'User  created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}