export const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  const adminUser = "admin";
  const adminPassword = "admin123";

  if (username === adminUser && password === adminPassword) {
    res.status(200).json({
      message: "Login successful",
      user: { username },
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
