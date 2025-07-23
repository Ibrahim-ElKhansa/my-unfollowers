# Instagram Unfollowers Analyzer

A simple and elegant web application to analyze your Instagram followers and followings data. Upload your Instagram data exports to discover insights about your social network.

## Features

- 📊 Compare followers vs following
- 🔍 Find people who don't follow you back
- 👥 Discover mutual connections
- 📈 Get detailed statistics about your Instagram network
- 🎨 Beautiful dark theme with modern UI
- 📱 Responsive design
- 🔒 Complete privacy - all data processing happens locally in your browser

## How to Get Your Instagram Data

1. Go to Instagram and click on "More" with the three horizontal lines icon, then click on "Settings"
2. Click on the button that says "Accounts Center"
3. Click on "Your information and permissions" then click on "Download your information"
4. Click on "Download or transfer information". If you have multiple accounts, choose which account you want to download
5. Choose "Some of your information" and scroll to "Connections" section, check "Followers and following"
6. Set Date Range to "All Time" and format to "JSON" (very important!)
7. Click "Create Files" and wait for the download to be ready
8. Extract the ZIP file and find:
   - `Followers_1.json` (your followers)
   - `Following.json` (people you follow)

## Usage

1. Upload your `Followers_1.json` file using the "Followers JSON" input
2. Upload your `Following.json` file using the "Following JSON" input
3. The app will automatically analyze the data and show you:
   - Total followers count
   - Total following count
   - People you follow who don't follow you back
   - People who follow you but you don't follow back
   - Mutual followers

## Privacy & Security

- ✅ **100% Client-Side**: All data processing happens in your browser
- ✅ **No Data Upload**: Your files never leave your device
- ✅ **No Storage**: No data is stored on any servers
- ✅ **Open Source**: You can verify the code yourself

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS with BEM methodology
- **Analytics**: Vercel Analytics
- **UI**: Custom responsive components with modern design

## Color Scheme

The app uses a modern dark theme with:
- **Primary**: Indigo (#6366f1)
- **Accent**: Cyan (#22d3ee)
- **Background**: Dark blue gradient
- **Text**: White and gray variants

## License

This project is for personal use. Please respect Instagram's terms of service when using your data.
