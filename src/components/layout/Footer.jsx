import React from 'react';

const socialIcons = [
  {
    href: '#',
    label: 'Instagram',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cream">
        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    href: '#',
    label: 'Twitter',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cream">
        <path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6 1A4.11 4.11 0 0012 8.09c0 .32.04.64.1.94A11.65 11.65 0 013 4.89s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.18 0-.36-.01-.54A7.72 7.72 0 0022 5.92z" strokeWidth="2"/>
      </svg>
    )
  },
  {
    href: '#',
    label: 'LinkedIn',
    svg: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cream">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
        <path d="M16 8a4 4 0 014 4v4M8 8v8M8 12h.01M16 12h.01" strokeWidth="2"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-heading text-lg">Contact us: foodie@email.com</p>
          <p className="text-sm mt-2">© 2024 FOODIE. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          {socialIcons.map(icon => (
            <a key={icon.label} href={icon.href} aria-label={icon.label} className="hover:text-matcha transition-colors">
              {icon.svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
} 