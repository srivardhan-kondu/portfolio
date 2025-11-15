import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
        </div>

        <div className="w-full bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-900 rounded-xl">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Phone</p>
                <p className="text-gray-900 font-semibold">+91 6302771540</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-xl">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <p className="text-gray-900 font-semibold">srivardhan.kondu@gmail.com</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-700 rounded-xl">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/kondu-srivardhan-7001a1252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  linkedin.com/in/kondu-srivardhan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
