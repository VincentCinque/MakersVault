import dotenv from 'dotenv';
dotenv.config();

export default {
  server: {
    allowedHosts: [process.env.VITE_ALLOWED_HOST || 'localhost']
  },
};