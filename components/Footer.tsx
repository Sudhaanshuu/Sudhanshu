import React from 'react';
import { Github, Linkedin, Code, CodeSquare } from 'lucide-react';

const socialLinks = [
    { href: "https://github.com/sudhaanshuu", icon: Github },
    { href: "https://www.linkedin.com/in/sudhanshuu/", icon: Linkedin },
    { href: "https://leetcode.com/u/imsudhanshuu/", icon: Code },
    { href: "https://www.geeksforgeeks.org/user/sudhanshuu/", icon: CodeSquare },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-bg border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
                    <p className="text-sm text-gray-600 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Sudhanshu Kumar. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                             <a key={index} href={link.href} className="text-gray-500 hover:text-secondary transition-colors">
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;