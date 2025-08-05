# Usman's New Tab Extension

A beautiful and functional Chrome New Tab Extension that displays useful information and a dynamic Quranic verse with a clean, minimalist aesthetic.

## ✨ Features

- **Real-time Clock**: Displays current time and date with elegant typography
- **Editable User Name**: Click to edit and customize your name (saved in localStorage)
- **Weather Information**: Shows current temperature, humidity, and location using geolocation
- **Google Search**: Integrated search bar for quick Google searches
- **Quick Access Menu**: Direct links to Gmail, Google Contacts, and Google Calendar
- **Dynamic Quranic Verses**: Fetches random Quranic verses from AlQuran Cloud API with fallback verses
- **Customizable Quick Links**: Editable footer links for your frequently visited websites
- **Beautiful Design**: Glassmorphism design with warm gradients and smooth animations
- **Responsive Layout**: Works perfectly on all screen sizes

## 🚀 Installation

### Method 1: Load as Unpacked Extension

1. **Download/Clone** this repository to your local machine
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top right
4. **Click "Load unpacked"** and select the folder containing this extension
5. **Open a new tab** to see your custom new tab page!

### Method 2: Manual Installation

1. Create a new folder for the extension
2. Copy all files (`manifest.json`, `index.html`, `style.css`, `script.js`) into the folder
3. Follow steps 3-5 from Method 1

## ⚙️ Configuration

### Weather API Setup (Optional)

To enable weather functionality:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Open `script.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key
3. The weather data will automatically load based on your location

### Customizing Quick Links

1. Click the **"Edit"** button in the Quick Links section
2. Enter links in the format: `Name|URL` (one per line)
3. Example:
   ```
   GitHub|https://github.com
   LinkedIn|https://linkedin.com
   Stack Overflow|https://stackoverflow.com
   ```
4. Click **"Save"** to apply changes

## 🎨 Customization

### Changing Your Name
- Click on your name in the center of the page
- Type your desired name
- Press Enter or click outside to save

### Adding Custom Links
- Use the edit functionality in the Quick Links section
- All changes are automatically saved to localStorage

### Styling (Advanced)
- Modify `style.css` to change colors, fonts, or layout
- The extension uses CSS custom properties for easy theming

## 📁 File Structure

```
extension/
├── manifest.json      # Extension configuration
├── index.html        # Main HTML structure
├── style.css         # Beautiful styling with glassmorphism
├── script.js         # All functionality and interactions
└── README.md         # This file
```

## 🔧 Technical Details

### APIs Used
- **AlQuran Cloud API**: For fetching Quranic verses
- **OpenWeatherMap API**: For weather data (optional)
- **Geolocation API**: For user location detection

### Browser Permissions
- `geolocation`: For weather location detection
- `storage`: For saving user preferences
- `host_permissions`: For API calls to weather and Quran services

### Local Storage
- `userName`: Stores the user's custom name
- `customLinks`: Stores the user's custom quick links

## 🎯 Features in Detail

### Time & Date
- Updates every second
- 24-hour format
- Full date display with day of week

### Weather Widget
- Real-time temperature in Celsius
- Humidity percentage
- Location-based weather
- Dynamic weather icons
- Graceful fallback if location/API unavailable

### Quranic Verse
- Random verse on each page load
- Beautiful typography with Playfair Display font
- Fallback verses if API is unavailable
- Verse reference display

### Search Functionality
- Direct Google search integration
- Opens results in new tab
- Clean, minimal search bar design

### Quick Links
- Editable through intuitive interface
- Persistent storage
- Default links provided
- Hover effects and smooth animations

## 🐛 Troubleshooting

### Weather Not Showing
- Check if you've added your OpenWeatherMap API key
- Ensure location permissions are enabled
- Check browser console for error messages

### Quranic Verse Not Loading
- The extension includes fallback verses
- Check internet connection
- API may be temporarily unavailable

### Extension Not Loading
- Ensure all files are in the same directory
- Check `manifest.json` for syntax errors
- Verify Chrome extension permissions

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered interface
- **Glassmorphism**: Modern frosted glass effect
- **Warm Colors**: Purple gradient background
- **Typography**: Inter for UI, Playfair Display for verses
- **Responsive**: Works on all screen sizes
- **Accessible**: High contrast and readable text

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this extension!

## 📞 Support

If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the repository.

---

**Enjoy your beautiful new tab experience! 🌟** 