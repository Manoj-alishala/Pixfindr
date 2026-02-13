# PixFindr

PixFindr is a responsive and dynamic image search application that allows users to explore a vast collection of high-quality images. Powered by the Unsplash API, it provides an immersive visual experience with features like category browsing, seamless pagination, and a customizable dark mode.

## 🚀 Features

-   **Smart Image Search**: Instantly find high-resolution images by typing keywords.
-   **Explore Categories**: Quick-access buttons for popular categories like "AI Art," "Galaxies," and "Wildlife Shots."
-   **Infinite Scrolling Experience**: Use the "Show More" button to load additional results for your search.
-   **Dark/Light Mode**: Toggle between themes with a built-in switch that remembers your preference.
-   **Responsive Design**: Optimized for all devices, from mobile phones to desktops, using Bootstrap.
-   **Interactive UI**: Smooth transitions and hover effects for a modern look and feel.

## 🛠️ Technologies Used

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Frameworks & Libraries**: Bootstrap 4.5, jQuery, Popper.js
-   **Icons**: Bootstrap Icons
-   **API**: [Unsplash API](https://unsplash.com/developers) for fetching real-time image data.

## 📂 Project Structure

```bash
/
├── index.html        # Main landing page
├── aboutUs.html      # Information about the platform
├── blog.html         # Blog section
├── community.html    # Community engagement page
├── helpcenter.html   # Help and support resources
├── Style.css         # Custom styling
└── index.js          # Main logic (API handling, Search, Theme toggle)
```

## ⚙️ Setup & Installation

To run this project locally on your machine, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/pixfindr.git
    ```

2.  **Navigate to the project directory**:
    ```bash
    cd pixfindr
    ```

3.  **Open the project**:
    You can open `index.html` directly in your browser.
    
    *Optional: For a better development experience, use a live server extension in VS Code.*

## 🔑 API Configuration

This project relies on the Unsplash API. To ensure it works correctly:

1.  Sign up at [Unsplash Developers](https://unsplash.com/developers).
2.  Create a new application to get your **Access Key**.
3.  Open `index.js` and locate the `accessKey` variable.
4.  Replace the existing key with your own:
    ```javascript
    const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
    ```

## 📸 Usage

1.  **Search**: Enter a keyword (e.g., "Mountains") in the search bar and hit Enter or click the Search button.
2.  **Discover**: Click on the predefined category buttons to explore specific topics.
3.  **Load More**: Scroll down and click the "Show More" arrow to see more results.
4.  **Theme**: Toggle the switch in the top-right corner to switch between Dark and Light modes.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve PixFindr, feel free to fork the repository and submit a pull request.

## 📄 License

This project is open-source and available for educational purposes.
