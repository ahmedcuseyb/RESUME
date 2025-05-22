// src/app/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Contact Info */}
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Let’s Work Together</h2>
          <p className="text-lg mb-8">
          For any information or help about website you can contact with me.would love to hear from you!
          </p>

          {/* Contact Information */}
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-green-500 text-2xl"></i>
              <div>
                <p className="font-semibold">Phone</p>
                <p>(+25261) 3174074</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-green-500 text-2xl"></i>
              <div>
                <p className="font-semibold">Email</p>
                <p>ahmedbicir2@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-green-500 text-2xl"></i>
              <div>
                <p className="font-semibold">Address</p>
                <p>Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-blue-500">Contact</span> 
          <span className="text-green-500">ME</span>
        </h2>
          <form className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="fullName" className="block text-lg mb-2 p-4">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block text-lg mb-2 p-4">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="phone" className="block text-lg mb-2">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="subject" className="block text-lg mb-2">Email Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
