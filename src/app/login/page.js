import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        
        {/* onClick={() => signIn('google')}
        onClick={() => signIn('facebook')} */}
        <button
          
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded mb-4 hover:bg-red-600"
        >
          <FcGoogle className="text-xl bg-white rounded-full" />
          Continue with Google
        </button>
        
        <button
          
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded mb-6 hover:bg-blue-700"
        >
          <FaFacebook className="text-xl" />
          Continue with Facebook
        </button>

        <div className="text-center mb-4">OR</div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}