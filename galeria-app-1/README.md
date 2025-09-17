# Galería App

## Overview
The Galería App is a React Native application that showcases a list of products. Users can filter products in real-time, view product details in a modal, and mark products as favorites.

## Features
- **Product List**: Displays a list of products using a FlatList.
- **Real-time Filtering**: A TextInput at the top allows users to filter products by title.
- **Product Details Modal**: When a product is pressed, a modal opens displaying a larger image, title, and description.
- **Favorite Functionality**: Users can long-press a product to mark it as a favorite, changing its visual representation.

## Project Structure
```
galeria-app
├── src
│   ├── components
│   │   ├── ProductItem.tsx
│   │   └── FavoriteIcon.tsx
│   ├── screens
│   │   └── GaleriaScreen.tsx
│   ├── assets
│   │   └── images
│   │       └── local-product.jpg
│   ├── types
│   │   └── index.ts
│   └── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd galeria-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the App
To run the application, use the following command:
```
npm start
```

## Technologies Used
- React Native
- TypeScript
- React Navigation

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.