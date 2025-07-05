# 🌟 My React Learning Journey

This repository documents my hands-on experience while learning **React.js**. It includes practice projects and components demonstrating concepts like React Hooks, image handling, forms, CSS styling, and lifecycle cleanup operations.

---

## 📚 Topics Covered

### 🔁 React Hooks

React Hooks allow function components to manage state and side effects effectively. Here's a summary of the hooks I've learned:

- **`useState`**: For local component state management.
- **`useEffect`**: For handling side effects such as data fetching, timers, or event listeners.
- **`useRef`**: To reference DOM elements or store mutable values without causing re-renders.
- **`useReducer`**: An alternative to `useState` for managing complex state logic.
- **Cleanup in `useEffect`**: Ensures resources like intervals or event listeners are cleaned up to avoid memory leaks.

#### 🧹 Example: `useEffect` with Cleanup

```jsx
import { useEffect } from "react";

function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏱ Timer running...");
    }, 1000);

    // Cleanup function: runs when the component unmounts
    return () => {
      clearInterval(timer);
      console.log("🧹 Timer cleared.");
    };
  }, []);

  return <h3>Timer is active. Check your console.</h3>;
}
