/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/car.jpg')",
                // 'footer-texture': "url('/img/footer-texture.png')"
            }
        },
        plugins: []
    }
}
