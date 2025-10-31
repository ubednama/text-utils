# TextUtils

A modern, feature-rich text manipulation utility built with Next.js, React, and TypeScript. TextUtils provides a clean, intuitive interface for various text transformations and editing operations with real-time preview and undo/redo functionality.

## ✨ Features

### Text Transformations

- **Case Conversions**: Convert text to uppercase, lowercase, title case, and sentence case
- **Text Cleaning**: Remove extra spaces, clean line breaks, and normalize whitespace
- **Text Formatting**: Add proper spacing and formatting to improve readability
- **Real-time Preview**: See changes instantly as you type or apply transformations

### User Experience

- **Undo/Redo System**: Full history tracking with unlimited undo/redo operations
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid user interactions
- **Keyboard Shortcuts**: Efficient text manipulation with keyboard support

### Technical Features

- **Modern UI Components**: Built with Radix UI primitives and custom components
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Performance Optimized**: Fast rendering and efficient state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ubednama/textutils.git
   cd textutils
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```text
textutils/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   │       ├── animated-button.tsx
│   │       ├── header.tsx
│   │       ├── icons.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎯 Usage

### Basic Text Operations

1. **Enter or paste text** into the main textarea
2. **Use transformation buttons** to apply various text operations:
   - **UPPERCASE**: Convert all text to uppercase
   - **lowercase**: Convert all text to lowercase
   - **Title Case**: Capitalize the first letter of each word
   - **Sentence case**: Capitalize only the first letter of sentences
   - **Clean Spaces**: Remove extra whitespace and normalize spacing
   - **Clean Lines**: Remove empty lines and normalize line breaks

3. **Undo/Redo**: Use the undo (↶) and redo (↷) buttons to navigate through your edit history

4. **Theme Toggle**: Switch between dark and light modes using the theme toggle button

### Keyboard Shortcuts

- `Ctrl/Cmd + Z`: Undo last action
- `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z`: Redo last undone action

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:
4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```text
textutils/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   │       ├── animated-button.tsx
│   │       ├── header.tsx
│   │       ├── icons.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎯 Usage

### Basic Text Operations

1. **Enter or paste text** into the main textarea
2. **Use transformation buttons** to apply various text operations:
   - **UPPERCASE**: Convert all text to uppercase
   - **lowercase**: Convert all text to lowercase
   - **Title Case**: Capitalize the first letter of each word
   - **Sentence case**: Capitalize only the first letter of sentences
   - **Clean Spaces**: Remove extra whitespace and normalize spacing
   - **Clean Lines**: Remove empty lines and normalize line breaks

3. **Undo/Redo**: Use the undo (↶) and redo (↷) buttons to navigate through your edit history

4. **Theme Toggle**: Switch between dark and light modes using the theme toggle button

### Keyboard Shortcuts

- `Ctrl/Cmd + Z`: Undo last action
- `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z`: Redo last undone action

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

- Modifying the Tailwind configuration in `tailwind.config.js`
- Updating component styles in the respective component files
- Customizing the color scheme and theme variables

### Adding New Features

To add new text transformation features:

1. Create the transformation function in the main page component
2. Add a new button to the UI with appropriate styling
3. Implement the transformation logic with history tracking

## 🔧 Technologies Used

- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## 🚧 Development Status

### Current Features

- ✅ Text transformations (case conversions, cleaning)
- ✅ Undo/redo system
- ✅ Dark/light mode toggle
- ✅ Responsive design
- ✅ Smooth animations

### Planned Features

- 🔄 Find and replace functionality (currently commented out for future implementation)
- 📊 Text statistics and analysis
- 💾 Save/load text files
- 🔗 Text sharing capabilities
- 📋 Enhanced clipboard operations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Icons provided by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**TextUtils** - Making text manipulation simple, fast, and beautiful. ✨
- Modifying the Tailwind configuration in `tailwind.config.js`
- Updating component styles in the respective component files
- Customizing the color scheme and theme variables

### Adding New Features

To add new text transformation features:

1. Create the transformation function in the main page component
2. Add a new button to the UI with appropriate styling
3. Implement the transformation logic with history tracking

## 🔧 Technologies Used

- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## 🚧 Development Status

### Current Features

- ✅ Text transformations (case conversions, cleaning)
- ✅ Undo/redo system
- ✅ Dark/light mode toggle
- ✅ Responsive design
- ✅ Smooth animations

### Planned Features

- 🔄 Find and replace functionality (currently commented out for future implementation)
- 📊 Text statistics and analysis
- 💾 Save/load text files
- 🔗 Text sharing capabilities
- 📋 Enhanced clipboard operations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Icons provided by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**TextUtils** - Making text manipulation simple, fast, and beautiful. ✨
