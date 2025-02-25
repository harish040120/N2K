import React from 'react';

function Footer() {
  const branches = [
    { name: 'Head Office', address: 'Lakkampalayam, Nambiyur, Erode', phone: '81221 15775' },
    { name: 'Erode', address: 'Agilmedu', phone: '97862 85212' },
    { name: 'Coimbatore', address: 'Sundarapuram', phone: '90929 07373' },
    { name: 'Coimbatore', address: 'Ariyamangalam', phone: '97877 09290' },
    { name: 'Tiruchirappalli', address: 'Chevvapatti', phone: '99423 05679' },
    { name: 'Salem', address: 'Pushpa Theatre', phone: '90255 05651' },
    { name: 'Chennai', address: 'Vellakinaru', phone: '90929 07373' },
    { name: 'Chennai', address: 'Velachery', phone: '99423 05679' },
    { name: 'Chennai', address: 'Ambattur', phone: '97877 09290' },
    { name: 'Chennai', address: 'Valasaravakkam', phone: '90929 07373' },
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22,12.07 C22,6.48 17.52,2 12,2 C6.48,2 2,6.48 2,12.07 C2,17.06 6.17,21.13 11.14,21.88 V14.89 H8.08 V12.07 H11.14 V9.797 C11.14,7.593 12.94,6.06 15.21,6.06 C16.33,6.06 17.48,6.27 17.48,6.27 V9.34 H16.28 C14.99,9.34 14.67,10.07 14.67,10.85 V12.07 H17.33 L16.82,14.89 H14.67 V21.88 C19.64,21.13 23.81,17.06 23.81,12.07 L22,12.07 Z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22.46,6 C21.69,6.35 20.86,6.58 20,6.69 C20.88,6.16 21.55,5.3 21.88,4.3 C21.05,4.86 20.13,5.26 19.16,5.45 C18.37,4.6 17.24,4.13 16,4.13 C13.51,4.13 11.5,6.14 11.5,8.63 C11.5,8.98 11.54,9.3 11.62,9.6 C7.728,9.36 4.1,7.38 1.671,4.149 C1.245,4.82 1.003,5.63 1.003,6.5 C1.003,8.13 1.837,9.54 3.105,10.3 C2.328,10.28 1.597,10.07 0.96,9.73 C0.96,9.75 0.96,9.78 0.96,9.81 C0.96,12.09 2.678,14.07 5,14.5 C4.66,14.66 4.3,14.73 3.93,14.73 C3.7,14.73 3.47,14.7 3.24,14.65 C3.7,16.6 5.26,18.07 7.14,18.1 C5.54,19.47 3.57,20.25 1.5,20.25 C1.14,20.25 0.78,20.23 0.42,20.16 C2.32,21.59 4.56,22.39 6.96,22.39 C16,22.39 20.68,14.07 20.68,8.64 C20.68,8.48 20.68,8.32 20.68,8.16 C21.49,7.55 22.26,6.83 22.46,6 Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.75 2.24 5 5 5h14c2.76 0 5-2.25 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75 1.75 0.784 1.75 1.75-0.784 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-0.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.96v5.69h-3v-10h2.88v1.37h0.04c0.4-0.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.59v5.61z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-700 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {branches.map((branch, idx) => (
            <div key={idx} className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-3">{branch.name}</h3>
              <p className="text-sm">{branch.address}</p>
              <p className="text-sm">Contact: {branch.phone}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-4">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-200">
          <a href="/contact" className="text-white hover:text-gray-100">Contact Us</a> | &copy; {new Date().getFullYear()} N2K Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;