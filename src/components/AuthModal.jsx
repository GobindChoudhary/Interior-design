import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          throw new Error('Please fill in all fields');
        }
        await login(formData.email, formData.password);
      } else {
        if (!formData.name || !formData.email || !formData.password || !formData.mobile) {
          throw new Error('Please fill in all fields');
        }
        await signup(formData);
      }
      closeAuthModal();
      setFormData({ name: '', email: '', password: '', mobile: '' });
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeAuthModal}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[450px] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="bg-gray-50 p-8 border-b border-gray-100">
          <h2 className="text-3xl font-bold text-[#212529] mb-2">
            {isLogin ? 'Welcome Back' : 'Join HomeLane'}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Create an account to start your dream home journey'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg animate-shake">
                {error}
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e71c24] focus:ring-1 focus:ring-[#e71c24] outline-none transition-all text-[15px]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e71c24] focus:ring-1 focus:ring-[#e71c24] outline-none transition-all text-[15px]"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e71c24] focus:ring-1 focus:ring-[#e71c24] outline-none transition-all text-[15px]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e71c24] focus:ring-1 focus:ring-[#e71c24] outline-none transition-all text-[15px]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 bg-[#e71c24] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:bg-[#c41920] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                isLogin ? 'Sign In' : 'Sign Up'
              )}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center pt-6 border-t border-gray-100 text-[14px]">
            <span className="text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="ml-2 font-bold text-[#e71c24] hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
