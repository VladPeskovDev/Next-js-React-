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
        // Настройки CORS для всех API-маршрутов
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Для безопасности можно заменить на "https://advocatpeskov.com"
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
  //async rewrites() {
    //return [
      //{
        //source: '/yandex_ca6674660fe1aaf4.html',
        //destination: '/api/yandexVerification',
      //},
    //];
  //},
};

export default nextConfig;
