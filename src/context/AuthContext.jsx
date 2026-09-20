import { createContext, useState, useEffect } from "react";

// Create the Auth Context
export const AuthContext = createContext();

// AuthProvider wraps the whole app to provide auth state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("moviehub_current_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN function - checks if user exists in registered users
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("moviehub_users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("moviehub_current_user", JSON.stringify(found));
      return { success: true, message: "Login successful!" };
    }
    return { success: false, message: "Invalid email or password." };
  };

  // REGISTER function - saves new user to localStorage
  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("moviehub_users") || "[]");

    // Check if email already exists
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "Email already registered." };
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("moviehub_users", JSON.stringify(users));

    // Auto-login after register
    setUser(newUser);
    localStorage.setItem("moviehub_current_user", JSON.stringify(newUser));
    return { success: true, message: "Registration successful!" };
  };

  // LOGOUT function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("moviehub_current_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}