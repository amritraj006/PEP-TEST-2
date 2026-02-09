# PEP-TEST-2
# React Mini Projects (API + State + UI)

This repository contains 3 React mini-projects built using **React + Tailwind CSS + React Router DOM**.

## 🚀 Projects Included

### 1) Cat Fact Widget
- Fetches a random cat fact from an API
- Button to get a new fact without page reload
- Uses Axios + React state

Route:  
`/question1`

API:
- https://catfact.ninja/fact

---

### 2) GitHub User Search (Bonus)
- Search GitHub users by username
- Displays profile details (avatar, bio, followers, following, repos count)
- Fetches latest 5 repositories
- Handles 404 errors properly

Route:  
`/question2`

APIs:
- https://api.github.com/users/{username}
- https://api.github.com/users/{username}/repos?sort=created&per_page=5

---

### 3) Dynamic Product Dashboard
- Displays products in a table
- Add to Cart / Remove from Cart toggle button
- Calculates total cart price in real time

Route:  
`/question3`

---

## 🛠 Tech Stack
- React
- Tailwind CSS
- Axios
- React Router DOM

---

## 📌 Routes Setup

```js
<Route path="/" element={<Home />} />
<Route path="/question1" element={<Question1 />} />
<Route path="/question2" element={<Question2 />} />
<Route path="/question3" element={<Question3 />} />