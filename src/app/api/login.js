import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === 'POST') {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' })
      }

      // Here you would typically create a session or JWT token
      res.status(200).json({ message: 'Login successful' })
    } catch (error) {
      res.status(500).json({ error: 'Server error' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}