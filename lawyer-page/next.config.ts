//import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
  //reactStrictMode: false,
//};

//export default nextConfig; 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // Добавляем настройки CORS для всех API-маршрутов
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // или укажите ваш домен для повышения безопасности, например, "https://advocatpeskov.com"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

