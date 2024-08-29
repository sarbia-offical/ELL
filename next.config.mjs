/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-07-29 23:50:31
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-24 22:40:44
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    reactStrictMode: false
};

export default nextConfig;