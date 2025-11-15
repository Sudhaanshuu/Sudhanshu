import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, value }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-gray-300">{value}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-secondary font-semibold mb-2">Get In Touch</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Let's Work Together
                    </h2>
                </div>

                <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-center">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* LEFT SIDE INFO */}
                    <div className="space-y-8">
                        <ContactInfoItem icon={Mail} title="Email" value="sudhaanshuu@gmail.com" />
                        <ContactInfoItem icon={Phone} title="Phone" value="+91 8252228793" />
                        <ContactInfoItem icon={MapPin} title="Location" value="Chennai, India" />

                        <div className="pt-6">
                            <h4 className="font-bold text-lg mb-4 text-white">Available for:</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-secondary" /> Full-time opportunities</li>
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-secondary" /> Freelance projects</li>
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-secondary" /> Open source collaboration</li>
                                <li className="flex items-center gap-3"><CheckCircle size={20} className="text-secondary" /> Technical consulting</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>

                        <form
                            action="https://formspree.io/f/xlddonad"
                            method="POST"
                            className="space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="What's this about?"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell me about your project or just say hello..."
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-secondary text-primary px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
