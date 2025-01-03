import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Share Shop. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://nahidhasan141400.github.io/nahidhasan141400/"
                target="_blank"
                className="hover:underline"
              >
                Nahid Hasan
              </a>
            </li>
            <li>
              <a
                href="https://flowcv.com/resume/0q6j93540j"
                target="_blank"
                className="hover:underline"
              >
                Updated CV
              </a>
            </li>
            <li>
              <a href="tel:01741013363" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
