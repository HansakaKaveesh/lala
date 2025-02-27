import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === 'POST') {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    try {
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' })
      }

      const user = new User({ name, email, password })
      await user.save()
      res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}