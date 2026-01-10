# Moonfin for Tizen

### Enhanced Jellyfin client for Samsung Tizen TVs

[![License](https://img.shields.io/github/license/Moonfin-Client/Tizen)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Moonfin-Client/Tizen)](https://github.com/Moonfin-Client/Tizen/releases)

<a href="https://www.buymeacoffee.com/moonfin" target="_blank"><img src="https://github.com/user-attachments/assets/fe26eaec-147f-496f-8e95-4ebe19f57131" alt="Buy Me A Coffee" ></a>

> [← Back to main Moonfin project](https://github.com/Moonfin-Client)

Moonfin for Tizen is an enhanced fork of the official Jellyfin Tizen client, optimized for the viewing experience on Samsung Smart TVs. Built with modern web technologies and Tizen APIs, it provides a feature-rich media experience with seamless multi-server support and integrated content discovery.

## Features & Enhancements

Moonfin for Tizen builds on the solid foundation of Jellyfin with targeted improvements for TV viewing.

### Cross-Server Content Playback

The multi-server architecture allows you to connect to multiple Jellyfin servers simultaneously, providing seamless content playback across all your servers from a single unified interface. Each server and user maintains their own secure authentication credentials, with intelligent connection pool management ensuring optimal performance. The unified search functionality spans all connected servers, making it easy to find content regardless of which server hosts it.

### Jellyseerr Integration

Moonfin is the first Tizen client with native Jellyseerr support, bringing powerful content discovery directly to your TV. The dedicated Discover page lets you browse trending, popular, and recommended movies and shows with advanced filtering by genres, studios, networks, and keywords. Request new content in HD or 4K directly from your TV with intelligent season selection for TV shows. The integration includes optional NSFW content filtering using Jellyseerr and TMDB metadata, comprehensive request management to track pending and approved items, and direct API key authentication for secure access. Global search results now include both your Jellyfin libraries and Jellyseerr content, all presented with rich backdrop images for a cinematic discovery experience.

### Customizable Navigation

The toolbar has been redesigned with flexibility in mind, allowing you to show or hide individual elements like the Shuffle, Genres, and Favorites buttons based on your preferences. You can even hide the entire library button row for a cleaner home screen. The shuffle functionality includes filters to choose between movies only, TV shows only, or both. Dynamic library buttons automatically populate based on your Jellyfin libraries and scroll horizontally when you have five or more. Quick access icons provide one-click navigation to home and search functions, while the centralized genres menu gives you a single place to browse all media by genre. The pill-shaped design provides subtle visual contrast without being distracting.

### Featured Media Bar

Your home screen features a rotating showcase of 15 random movies and TV shows, complete with ratings, genres, runtime, and overview information visible at a glance. The bar automatically refreshes content when switching profiles to ensure age-appropriate content appears on child profiles. Smooth crossfade transitions with matching backdrop images create a polished viewing experience, with height and positioning optimized for comfortable couch viewing.

### Advanced Playback Features

The player includes background theme music support for TV shows and movies with adjustable volume control. Before playback begins, you can select your preferred audio track and subtitle options through a user-friendly selection interface. During playback, the skip button displays a countdown timer when the next episode is available. An automatic screensaver dims the display after 90 seconds of inactivity, preventing screen burn-in while showing a dynamic logo and clock. The video engine uses custom Tizen AVPlay integration for optimal performance, with support for both Shaka Player and HLS.js adaptive streaming profiles.

### Enhanced Detail Views

Detail screens organize metadata into clear sections showing genres, directors, writers, studios, and runtime. Taglines appear prominently above descriptions where available, and cast members are displayed with circular profile photos for a modern look. The layout balances information density with readability, fitting more useful content on screen without feeling cramped. Dedicated person pages include complete filmography and biography information, with seamless integration to discover related content through Jellyseerr.

### Visual Polish

The interface includes customizable backdrop blur with a slider control to adjust the background intensity to your preference. Similar opacity controls allow you to fine-tune the featured media bar overlay transparency. Item details appear inline within content rows, eliminating the need to open every title individually. Button states provide clear visual feedback, with improved contrast making text easier to read across all screens. Smooth animations and responsive transitions create a fluid experience, while the consistent design language with unified icons and visual elements ties everything together. Dynamic accent color theming automatically adapts based on your server settings.

## Technical Architecture

### Core Components

The application is built around several specialized JavaScript modules that handle distinct functionality. The multi-server manager provides the foundation for connecting to multiple Jellyfin servers simultaneously with unified authentication. The Jellyseerr API client is a comprehensive HTTP client implementing complete API communication with token-based authentication. The Jellyfin API wrapper handles all server communication, while the theme music player uses HTML5 Audio for background playback.

Additional modules include a version checker that integrates with GitHub releases for OTA updates, a video player adapter that provides a unified interface for both Shaka Player and HLS.js, and a Tizen AVPlay plugin for native media playback integration. Connection pooling improves HTTP performance across all network requests.

The build system uses Gulp with Babel to transpile modern ES6+ code to ES5 for compatibility with Tizen 4+ devices, while also managing version updates and WGT packaging.

The interface is structured around distinct pages: the Browse page serves as the home screen with the featured media bar, the Discover page provides Jellyseerr integration, and dedicated Library, Favorites, and Genres pages offer various content browsing options. Detail pages for movies, TV shows, and people display comprehensive information, while the Player page handles all video playback with AVPlay integration. The Settings page provides configuration for all Moonfin features.

## Installation

### Pre-built Releases

Download the latest WGT package from the [Releases page](https://github.com/Moonfin-Client/Tizen/releases). The application supports Samsung Tizen 4 or higher, though Tizen 5.5 or newer is recommended for best performance. At least 1GB of RAM is recommended for smooth operation.

### Jellyseerr Setup

To enable media discovery and requesting, first install and configure Jellyseerr on your network following the instructions at [jellyseerr.dev](https://jellyseerr.dev/). In Moonfin, navigate to Settings and then Jellyseerr. Enter your Jellyseerr server URL (for example, `http://192.168.1.100:5055`), and your Jellyseerr API key. Test the connection to verify everything works correctly. Your API key is saved securely locally and will reconnect automatically in future sessions.

### Installation Instructions

First, enable Developer Mode on your Samsung TV by following the guide at [Enable Developer Mode on the TV](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK). Then use the excellent [Jellyfin 2 Samsung](https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer) tool by @PatrickSt1991, which simplifies the installation process considerably.

### Building from Source

#### Prerequisites
* Tizen Studio 4.6+ with IDE or Tizen Studio 4.6+ with CLI. See [Installing TV SDK](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html)
* Git
* Node.js 20+
* Tizen Certificate Manager configured

#### Build Steps

1. **Setup Tizen Certificate Manager**
   
   See [Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html)
   > If you have installation problems with the Tizen certificate, try creating a Samsung certificate. You will need a Samsung account for this.

2. **Clone Jellyfin Web repository**
   
   > It is recommended that the web version match your Jellyfin server version.
   ```sh
   git clone -b release-10.10.z https://github.com/jellyfin/jellyfin-web.git
   ```
   > Replace `release-10.10.z` with the branch matching your Jellyfin server version.

3. **Clone Moonfin Tizen repository**
   ```sh
   git clone https://github.com/Moonfin-Client/jellyfin-tizen.git
   ```

4. **Build Jellyfin Web**
   ```sh
   cd jellyfin-web
   npm ci --no-audit
   USE_SYSTEM_FONTS=1 npm run build:production
   ```
   > This creates `jellyfin-web/dist/` directory.
   
   > `USE_SYSTEM_FONTS=1` reduces app size by excluding unused fonts.
   
   > Use `npm run build:development` for debugging builds.

5. **Prepare Moonfin Interface**
   ```sh
   cd ../jellyfin-tizen
   JELLYFIN_WEB_DIR=../jellyfin-web/dist npm ci --no-audit
   ```
   > This creates `jellyfin-tizen/www/` directory with the Jellyfin web interface.

6. **Build WGT package**
   
   Using Gulp (Recommended):
   ```sh
   npm run package
   ```
   > This automatically updates version, transpiles to ES5, and creates both `Moonfin.wgt` and `Moonfin-Tizen-{version}.wgt`

   Using Tizen CLI (Advanced):
   ```sh
   tizen build-web -e ".*" -e gulpfile.babel.js -e README.md -e "node_modules/*" -e "package*.json" -e "yarn.lock"
   tizen package -t wgt -o . -- .buildResult
   ```
   > Make sure the appropriate Certificate Profile is selected in Tizen Certificate Manager.

#### Available Build Scripts

```sh
npm run build         # Build without packaging (ES5 transpilation)
npm run build:es5     # Build with ES5 transpilation
npm run package       # Build and create WGT packages
npm run package:es5   # Build ES5 and create WGT packages
```

## Deployment

### Deploy to Emulator

1. Run the Tizen emulator
2. Install package:
   ```sh
   tizen install -n Moonfin.wgt -t T-samsung-5.5-x86
   ```
   > Specify target with `-t` option. Use `sdb devices` to list available devices.

### Deploy to TV

1. **Enable Developer Mode on TV**
   
   See [Enable Developer Mode on the TV](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK)

2. **Connect to TV**
   
   Choose one of the following methods:
   
   * **Using Device Manager:** 
     - Open `Tools -> Device Manager` in Tizen Studio
     - Add your TV's IP address
   
   * **Using SDB CLI:**
     ```sh
     sdb connect YOUR_TV_IP
     ```
     > Replace `YOUR_TV_IP` with your TV's IP address

3. **Permit Installation (Samsung Certificate Only)**
   
   > Required only if using Samsung certificate. Skip this step for Tizen certificate.
   > If you need to change or create a new Samsung certificate, re-build the WGT first.
   
   Choose one of the following methods:
   
   * **Device Manager:** Right-click on the connected device and select `Permit to install applications`
   
   * **Tizen CLI:**
     ```sh
     tizen install-permit -t UE65NU7400
     ```
     > Replace `UE65NU7400` with your TV model. Use `sdb devices` to list available devices.
   
   * **SDB (Manual Certificate Push):**
     ```sh
     sdb push ~/SamsungCertificate/<PROFILE_NAME>/*.xml /home/developer
     ```

4. **Install Package**
   ```sh
   tizen install -n Moonfin.wgt -t UE65NU7400
   ```
   > Replace `UE65NU7400` with your TV model. Use `sdb devices` to list available devices.

## Development

### Development Environment

Setting up a development environment requires installing Tizen Studio with TV extensions and configuring the certificate manager.

### Project Structure

```
jellyfin-tizen/
├── js/                    # Application JavaScript modules
│   ├── jellyseerr-api.js  # Jellyseerr client (3000+ lines)
│   ├── multi-server.js    # Multi-server management
│   ├── player.js          # Video player logic
│   └── ...
├── css/                   # Stylesheets
├── components/            # Reusable UI components
├── service/               # Background service app
├── build/                 # Build output directory
├── gulpfile.babel.js      # Build configuration
└── config.xml             # Tizen app manifest
```

### Development Guidelines

* **ES5 Compatibility:** All JS is transpiled to ES5 for Tizen 4 support
* **Testing:** Test on actual TV hardware when possible (emulator has limitations)
* **Modules:** Keep JS modules focused and well-documented
* **UI Changes:** Ensure changes work at 1920x1080 resolution
* **Performance:** Be mindful of memory constraints on older TVs

### Debugging

Enable debug mode in Tizen Studio to:
* View console logs in real-time
* Inspect DOM elements
* Monitor network requests
* Profile performance

## Contributing

We welcome contributions to Moonfin for Tizen!

### Guidelines

1. **Check existing issues** - See if your idea/bug is already reported
2. **Discuss major changes** - Open an issue first for significant features
3. **Follow code style** - Match the existing codebase conventions
4. **Test on TV devices** - Verify changes work on actual Samsung Tizen TVs
5. **Consider upstream** - Features that benefit all users should go to Jellyfin first!

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with clear commit messages
4. Test thoroughly on Tizen TVs
5. Submit a pull request with a detailed description

## ⚠️ Known Issues & Limitations

## Known Issues & Limitations

Jellyseerr functionality requires local network access to your Jellyseerr server. Large libraries may cause slowdowns on TVs with limited RAM. Some features may have reduced performance on older Tizen 4 devices.

## Credits & Acknowledgments

Moonfin for Tizen is built upon the excellent work of:

* **[Jellyfin Project](https://jellyfin.org/)** - The foundation and upstream codebase
* **[MakD](https://github.com/MakD)** - Original Jellyfin-Media-Bar concept that inspired our featured media bar
* **Jellyfin Tizen Contributors** - All developers who built the original client
* **[Jellyseerr](https://jellyseerr.dev/)** - Media discovery and request management platform
* **Moonfin Contributors** - Everyone who has contributed to this enhanced fork

Special thanks to the Jellyfin community for their ongoing support and development.

## 📄 License

This project is licensed under the **Mozilla Public License Version 2.0** (MPL-2.0).

See the [LICENSE](LICENSE) file for full details.

**Important:** Moonfin for Tizen is an independent fork and is not affiliated with or endorsed by the Jellyfin project. All Jellyfin trademarks and copyrights belong to their respective owners.

---

**Made with ❤️ for the Jellyfin community**

> [← Back to main Moonfin project](https://github.com/Moonfin-Client)



