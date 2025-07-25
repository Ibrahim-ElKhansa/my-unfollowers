# 📱 Instagram Unfollowers Analyzer

**Live Demo:** [https://myunfollowers.app/](https://myunfollowers.app/)

A privacy-focused web application that helps you analyze your Instagram follower relationships using your official Instagram data export. Discover who doesn't follow you back, find mutual connections, and gain insights into your Instagram network - all processed locally in your browser for maximum privacy.

![Instagram Unfollowers Analyzer](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass)

## 🌟 Features

### 📊 **Data Analysis**
- **Followers Analysis**: View all your followers with timestamps
- **Following Analysis**: See everyone you follow
- **Mutual Followers**: Find people who follow you back
- **Non-Followers**: Discover who you follow but doesn't follow you back
- **Non-Following**: See who follows you but you don't follow back

### 🎯 **Smart Features**
- **Auto-Hide Functionality**: Automatically hide users from lists after clicking their profile links
- **Interactive Tutorial**: Step-by-step guide with screenshots for downloading Instagram data
- **Real-time Validation**: Instant feedback on uploaded JSON files
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🔒 **Privacy & Security**
- **100% Client-Side Processing**: Your data never leaves your device
- **No Server Upload**: All analysis happens in your browser
- **Official Instagram Data**: Uses Instagram's official data export feature
- **Complete Privacy**: Full transparency with secure local processing

### 🎨 **User Experience**
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Custom Scrollbars**: Themed scrollbars matching the color scheme
- **Drag & Drop**: Easy file upload with drag and drop support
- **Tab Navigation**: Organized data viewing with tab-based interface
- **Hide/Show Users**: Remove users from lists with one click

##  How to Get Your Instagram Data

The app includes a detailed tutorial, but here's a quick overview:

1. **Instagram Settings** → **Accounts Center**
2. **Your information and permissions** → **Download your information**
3. Select **"Some of your information"** → Check **"Followers and following"**
4. Choose **"Download to device"** → **All time** → **JSON format**
5. **Create Files** → Wait for processing → Download ZIP
6. Extract `followers_1.json` and `following.json` from the ZIP file

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor with BEM methodology
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Main page component
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── FileInput.tsx   # File upload component
│   ├── Tabs.tsx        # Tab navigation
│   ├── Tutorial.tsx    # Interactive tutorial
│   └── UserList.tsx    # User list display
├── styles/             # SCSS stylesheets
│   ├── main.scss       # Main stylesheet
│   ├── variables.scss  # SCSS variables
│   ├── tutorial.scss   # Tutorial styles
│   ├── userlist.scss   # User list styles
│   ├── settings.scss   # Settings panel styles
│   └── ...
├── types/              # TypeScript type definitions
│   └── instagram.ts    # Instagram data types
└── utils/              # Utility functions
    └── instagram.ts    # Data processing utilities
```

## 🔧 Key Features Implementation

### Data Processing
- **JSON Validation**: Robust validation for Instagram data format
- **Type Safety**: Full TypeScript implementation with custom interfaces
- **Efficient Processing**: Optimized algorithms for large datasets

### User Interface
- **Responsive Design**: Mobile-first approach with CSS clamp() functions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized with Next.js Image component and lazy loading

### Privacy Features
- **Local Processing**: No data transmission to external servers
- **Secure File Handling**: Client-side file reading and processing
- **Data Control**: Users maintain full control over their data

## 🔗 Connect with the Developer

- **🌐 Live Demo**: [https://myunfollowers.app/](https://myunfollowers.app/)
- **📱 Follow on Instagram**: [@noprobbxb](https://www.instagram.com/noprobbxb/)
- **🚀 More Projects**: [ibrahimelkhansa.com](https://www.ibrahimelkhansa.com/)

## 👨‍💻 Developer

Created by **Ibrahim El Khansa**

**Connect with me:**
- 🌐 Portfolio: [ibrahimelkhansa.com](https://www.ibrahimelkhansa.com/)
- 📱 Instagram: [@noprobbxb](https://www.instagram.com/noprobbxb/)

---

� **Built with modern web technologies for optimal performance and user experience.**
