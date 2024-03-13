
# 🎥 MovieHub

Welcome to **MovieHub**, the ultimate mobile application built with React Native for movie and series enthusiasts. 🌟 Dive into the endless world of entertainment with seamless Google sign-in integration powered by Firebase and discover a vast library of movies and series fetched directly from the TMDB (The Movie Database) API.

## 🚀 Features

- **🔐 Google Sign-In/Sign-Out:** Secure authentication using Firebase.
- **🎬 Movies and Series Tabs:** Navigate through two main tabs on the home screen to explore a curated selection of movies and series.
- **🔄 Dynamic Content:** Enjoy real-time updates of movies and series from the TMDB API.

## 📋 Getting Started

Follow these instructions to get MovieHub up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed before you start:
- Node.js
- npm (Node Package Manager)
- React Native CLI
- Android Studio or Xcode (for iOS development)

### 🛠 Installing

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/MovieHub.git
    cd MovieHub
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Firebase Setup**

    - Navigate to the Firebase Console, create a new project, and enable the Google Sign-In method.
    - Download `google-services.json` or `GoogleService-Info.plist` and place it in the correct directory.

4. **TMDB API Configuration**

    - Secure your TMDB API key and add it to a `.env` file:

    ```env
    TMDB_API_KEY=your_tmdb_api_key_here
    ```

5. **Launch the App**

    - Android:

    ```bash
    npx react-native run-android
    ```

    - iOS:

    ```bash
    npx react-native run-ios
    ```

## 📸 Screenshots

Embark on a visual journey of MovieHub's features. 🌈

![Login Screen](path/to/login_screen.png)
![Movies Tab](path/to/movies_tab.png)
![Series Tab](path/to/series_tab.png)

## 🔧 Built With

- [React Native](https://reactnative.dev/) - For building a native-like app experience.
- [Firebase](https://firebase.google.com/) - For secure authentication and backend services.
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) - For accessing the vast world of movies and series data.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Check out CONTRIBUTING.md for more information.

## 📌 Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-username/MovieHub/tags).

## ✍ Authors

- **Adith Ramdas** - *Initial work* - [YourUsername](https://github.com/aditramdas)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💖 Acknowledgments

- TMDB for their incredible database of movies and series.
- Firebase for making authentication a breeze.
- All contributors and supporters of MovieHub.
