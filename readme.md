# 📌 QuickPost

QuickPost is a simple **mini-blogging platform** built using **Node.js**, **Express.js**, **EJS**, and **MongoDB**.  
It allows users to **create**, **view**, **edit**, and **delete** blog posts in an easy-to-use interface.

---

## 🚀 Features

- 📝 Create new blog posts
- 📖 View all posts or read posts in detail
- ✏️ Edit existing posts
- 🗑️ Delete posts (with confirmation)
- 🎨 Simple and clean UI with custom styling
- 📅 Displays post ID and creation date on the detail page
- 💾 Stores posts in **MongoDB** for persistence

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS templates, HTML, CSS
- **Styling:** Custom CSS
- **Database:** MongoDB (Mongoose ODM)

---

## 📂 Project Structure

QuickPost/
│
├── public/ # Static assets (CSS, images)
├── views/ # EJS templates (pages)
│ ├── index.ejs # Homepage (list of posts)
│ ├── show.ejs # Detailed post view
│ ├── new.ejs # Create new post form
│ ├── edit.ejs # Edit post form
│
├── models/ # Mongoose models
├── app.js # Main Express.js server file
├── package.json # Project metadata & dependencies

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/QuickPost.git
   cd QuickPost

2. **Install dependencies**
    npm install

3. **Set up MongoDB**

    Make sure MongoDB is installed and running locally, or use MongoDB Atlas.
    Create a .env file in the project root and add your MongoDB connection string:

    MONGO_URI=mongodb://localhost:27017/quickpost
    PORT=3000

4. **Run the application**

    npm start
    **or*
    node app.js

5. Open in your browser

    http://localhost:8080/

All SET :)