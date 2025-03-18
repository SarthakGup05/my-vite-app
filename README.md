# Random Quote Generator

A beautiful React application that generates random quotes with dynamic backgrounds. Built with React, Vite, and Tailwind CSS.

![Quote Generator Preview](public\preview.png)

## 🌍 Live Demo

Experience the app live: [Quote Generator Demo](https://my-vite-app-coral.vercel.app/)

Try it out now and generate your own inspiring quotes!

## 🌟 Features

- **Random Quote Generation**: Fetches inspiring quotes from an external API
- **Dynamic Backgrounds**: Beautiful background images that change with each quote
- **Interactive UI Elements**:
  - Generate new quotes
  - Change background images independently
  - Copy quotes to clipboard
  - Download quotes as images
  - Share quotes directly to Twitter
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Effects**:
  - Smooth transitions
  - Loading animations
  - Backdrop blur effects
  - Modern glassmorphism design

## 🚀 Technologies Used

- React 19
- Vite 6
- Tailwind CSS
- DaisyUI
- html2canvas
- React Icons

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quotegen.git
cd quotegen
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

The project uses several configuration files:
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - ESLint rules

## 📦 Build

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🎨 Customization

### Background Images
You can modify the background images array in `src/Home.jsx`:

```javascript
const backgroundImages = [
  "your-image-url-1",
  "your-image-url-2",
  // Add more images
];
```

### Styling
The project uses Tailwind CSS for styling. Modify the classes in the components or update `tailwind.config.js` for custom themes.

## 📱 Features in Detail

### Quote Generation
- Fetches random quotes from freeapi.app
- Displays author and quote content
- Loading state while fetching

### Image Download
- Captures the entire quote card with background
- Saves as a high-quality PNG file
- Custom filename based on the author

### Social Sharing
- Direct Twitter integration
- Clipboard copy functionality
- Image download and sharing

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
