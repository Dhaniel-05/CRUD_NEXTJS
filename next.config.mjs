/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: "/",
                destination:"/products",
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
