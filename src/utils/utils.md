Helper Functions: These are small, reusable functions that perform specific, common tasks. Helper functions make the code cleaner and easier to read. For example, formatting dates, converting units, capitalizing strings, or generating unique IDs.

Example:

// utils/helpers.js
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
Formatting Functions: Utility functions that format data, such as dates, currency, or numbers, are often placed in the utils folder. This ensures a consistent format across the app, making updates to the format easier if needed.

Example:

// utils/format.js
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};
Validation Functions: Utility functions for input validation, such as checking if an email address is valid or if a password meets certain criteria. These are especially useful if you have custom validation requirements.

Example:

// utils/validation.js
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
Constants: Sometimes, the utils folder also holds constants that are reused across the app. This might include configuration settings, API endpoint URLs, status codes, or other values that are used in multiple places.

Example:

// utils/constants.js
export const API_BASE_URL = 'https://api.example.com';
export const STATUS_CODES = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
Custom Hooks: In React, custom hooks (if not stored in a dedicated hooks folder) are sometimes stored in utils. These are hooks you create to encapsulate reusable logic involving state and side effects. They are used in function components to share logic that doesn’t involve rendering.

Example:

// utils/useWindowDimensions.js
import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
Miscellaneous Utility Code: Any other generic or reusable code that doesn’t have a specific location can go in the utils folder. This can include debounce functions, throttle functions, custom error handling functions, or even data transformation functions.

Example (Debounce):

// utils/debounce.js
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
Example of a Typical utils Folder Structure

src/
├── utils/
│   ├── helpers.js        # Generic helper functions
│   ├── format.js         # Formatting functions for dates, currency, etc.
│   ├── validation.js     # Validation functions for email, phone numbers, etc.
│   ├── constants.js      # Shared constants
│   ├── useWindowDimensions.js # Custom hook
│   ├── debounce.js       # Debounce function for limiting event execution
│   └── otherUtility.js   # Miscellaneous utility code
├── App.js
└── index.js
In Summary
The utils folder serves as a centralized location for reusable utility functions and code that supports the app’s overall functionality but doesn’t directly interact with the UI or application state. It improves code organization, reduces repetition, and makes commonly used functions easily accessible throughout the project.