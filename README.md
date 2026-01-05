# My Portfolio Website

A modern, beginner-friendly personal portfolio website built with React JS, featuring a dark theme with beautiful gradient colors.

## Features

✨ **Modern Design**
- Dark theme with eye-catching gradient colors
- Clean and minimalist UI
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)

📱 **Sections**
- **Hero** - Eye-catching introduction with animated gradients
- **About** - Personal introduction with stats
- **Projects** - Showcase of featured projects
- **Skills** - Technical skills organized by category
- **Contact** - Contact form and social links
- **Navigation** - Smooth scrolling navigation bar

🎨 **Design Elements**
- Gradient backgrounds and text effects
- Animated floating circles
- Hover effects on cards
- Smooth scrolling
- Custom scrollbar styling

## Tech Stack

- **React 18** - JavaScript library for UI
- **JSX** - JavaScript XML for component structure
- **CSS3** - Custom styling with gradients and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps

1. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm build
   ```

The app will open in your browser at `http://localhost:3000`

## Project Structure

```
portfolio/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/             # CSS files
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx            # Main App component
│   └── index.js           # Entry point
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Customization

### Update Your Information

1. **Navbar** - Edit the nav links in [src/components/Navbar.jsx](src/components/Navbar.jsx)

2. **Hero Section** - Update your name and title in [src/components/Hero.jsx](src/components/Hero.jsx)

3. **About Section** - Edit your bio in [src/components/About.jsx](src/components/About.jsx)

4. **Projects** - Add your projects to the `projects` array in [src/components/Projects.jsx](src/components/Projects.jsx)

5. **Skills** - Update skills in the `skills` object in [src/components/Skills.jsx](src/components/Skills.jsx)

6. **Contact** - Update contact info and social links in [src/components/Contact.jsx](src/components/Contact.jsx)

### Color Theme

The color palette is defined in [src/styles/index.css](src/styles/index.css) using CSS variables:

```css
--primary-dark: #0f172a;
--secondary-dark: #1e293b;
--gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

Edit these values to customize the color scheme!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Beginner-Friendly Features

- ✅ Well-commented code
- ✅ Simple component structure
- ✅ Easy to customize
- ✅ No external UI libraries needed
- ✅ Pure CSS3 styling
- ✅ React hooks for state management

## License

This project is open source and available under the MIT License.

## Getting Help

If you're new to React, check out:
- [React Documentation](https://react.dev)
- [JavaScript ES6+ Guide](https://es6-features.org/)
- [CSS-Tricks](https://css-tricks.com/)

## Tips for Beginners

1. Start by understanding how React components work
2. Explore the component files to see JSX in action
3. Modify the content and see changes in real-time
4. Try changing colors in the CSS variables
5. Add more sections by creating new components

---

Happy coding! 🚀
