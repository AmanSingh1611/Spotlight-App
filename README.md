# 🌟 Spotlight

Spotlight is a social media platform built with **React Native**, designed to let users **post, comment, and follow each other**.
It provides a smooth mobile-first experience with **Clerk authentication** and **Convex backend services**.

---

## 🚀 Features

* 🔐 **User Authentication**

  * Secure login/signup using **Clerk** (supports Gmail & other providers).

* 📝 **Posts & Comments**

  * Users can create posts and interact by commenting.

* 👥 **Follow System**

  * Follow/unfollow users to build your own feed.

* ⚡ **Real-time Backend**

  * Powered by **Convex** for scalable, reactive backend services.

---

## 🛠️ Tech Stack

* **Frontend**: [React Native](https://reactnative.dev/)
* **Authentication**: [Clerk](https://clerk.com/)
* **Backend**: [Convex](https://convex.dev/)
* **Navigation**: [React Navigation](https://reactnavigation.org/)
* **State Management**: React Hooks / Context

---

## 🔧 Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/spotlight.git
   cd spotlight
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the project root and add:

   ```env
   EXPO_PUBLIC_CLERK_FRONTEND_API=<your-clerk-key>
   EXPO_PUBLIC_CONVEX_URL=<your-convex-url>
   CLERK_JWT_ISSUER_DOMAIN=<your-clerk-issuer-domain>
   ```

4. **Clerk Setup:**

   * Go to [Clerk Dashboard](https://dashboard.clerk.com/).
   * Create a project and get your **Frontend API key** and **Issuer domain**.
   * Configure a **Webhook** to connect Clerk with Convex for authentication & user sync:

     * In Clerk Dashboard → Webhooks → Add Endpoint.
     * Use the Convex function endpoint provided by your project.

5. **Convex Setup:**

   * Initialize Convex in the project:

     ```bash
     npx convex dev
     ```
   * This will create the `/convex/` directory and start the local development backend.

6. **Run the app:**

   ```bash
   npx expo start
   ```

---

## 📱 Screens (planned/implemented)

* **Login / Signup** (Clerk-powered auth)
* **Home Feed** (View posts from followed users)
* **Profile** (User details, posts, followers/following)
* **Post Detail** (Comments & interactions)

---

## 📹 Demo

Here are some screen recordings of Spotlight in action:
 

---

## 🛡️ Security & Authentication

* Clerk handles **OAuth with Gmail** for secure sign-in.
* Convex validates all backend requests with **JWTs issued by Clerk**.
* Environment variables ensure secure configuration for local and production builds.

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to contribute:

1. Fork the project
2. Create a new branch (`feature/new-feature`)
3. Commit changes
4. Open a Pull Request 🚀

---

## 🙌 Acknowledgements

* [Clerk](https://clerk.com/) for authentication
* [Convex](https://convex.dev/) for backend services
* [React Native](https://reactnative.dev/) for the mobile framework
