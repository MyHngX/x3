/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      email: process.env.email,
      password: process.env.password,
    },
  };
  
  module.exports = nextConfig;
  