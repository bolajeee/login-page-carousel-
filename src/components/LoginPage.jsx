import { useState, useEffect } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

const LoginPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const images = [image1, image2, image3, image4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-5">
      <div className="container max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden flex shadow-lg">
          {/* Carousel Section */}
          <div className="w-1/2 md:block hidden">
            <div className="relative h-full overflow-hidden">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-full h-full object-cover flex-shrink-0"
                    alt={`Login Image ${index + 1}`}
                  />
                ))}
              </div>
              {/* Carousel Navigation
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={previousSlide}
                  className="p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div> */}
              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-white w-4"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 mb-8">Please login to your account</p>

              <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                    required
                  />
                </div>

                <div className="relative mb-6">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <label className="flex items-center space-x-2 text-gray-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span>Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 transition"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
                >
                  Login
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Or login with</p>
                <div className="flex justify-center space-x-4">
                  {["google", "facebook", "twitter"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition duration-200"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-center mt-8 text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
