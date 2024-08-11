/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-07-29 23:50:31
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-12 00:36:36
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;