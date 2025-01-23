# Connectify - Video Conferencing App

[Connectify](https://connectify-7t6q.vercel.app/) is a modern video conferencing app built with **Next.js** and **React**. It allows users to host and join video meetings, share screens, and interact via a chat interface. Connectify leverages the **Stream Video SDK** for real-time video communication and integrates user authentication with **Clerk**.

## Features

- **Real-time Video Calls** – Powered by Stream Video SDK.
- **Screen Sharing** – Share your screen during video calls.
- **User Authentication** – Sign up and sign in using Clerk.
- **Responsive Design** – Optimized for both desktop and mobile.
- **Simple & Clean UI** – Styled with TailwindCSS.
- **Real-time Chat** – In-meeting chat functionality.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) – React-based framework for server-side rendering.
  - [React](https://reactjs.org/) – JavaScript library for building the UI.
  - [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework for fast UI development.
  - [Clerk](https://clerk.dev/) – Authentication service for user management.
  - [Stream Video SDK](https://getstream.io/video/) – Real-time video and chat SDK.

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/reyanshverma980/connectify.git
   cd connectify
   ```

2. **Install Dependencies:**
   If you're using npm:
   ```bash
   npm install
   ```
   Or if you are using yarn:
   ```bash
   yarn install
   ```
3. **Set Up Environment Variables:**
   Create a .env.local file in the root of the project and add the following (replace with your own credentials):

   **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**=your-clerk-publishable-key
   **CLERK_SECRET_KEY**=your-clerk-secret-key
   **NEXT_PUBLIC_CLERK_SIGN_IN_URL**=/sign-in
   **NEXT_PUBLIC_CLERK_SIGN_UP_URL**=/sign-up  
   **NEXT_PUBLIC_STREAM_API_KEY**=your-stream-api-key>
   **STREAM_SECRET_KEY**=your-stream-secret-key
   **NEXT_PUBLIC_BASE_URL**=your-base-url
   
4. **Run the Development Server:**
   To start the local development server, run the following command:

   ```bash
   npm run dev
   ```

   # or

   ```bash
   yarn dev
   ```

5. **Open the App in Your Browser:**
   Once the server starts, open your browser and go to http://localhost:3000 to access the app.

## Building for Production

To create an optimized production build:
Using npm:

```bash
npm run build
```

# or

```bash
yarn build
```

After building, you can start the production server with:
Using npm:

```bash
npm run start
```

Or using yarn:

```bash
yarn start
```

## Usage

1. **Sign Up / Sign In:**
   - Use the Clerk authentication UI to sign up or sign in.
2. **Create a Meeting:**
   - Once logged in, click the "Create Meeting" button to create a new video meeting.
3. **Join a Meeting:**

   - To join a meeting, enter the meeting ID provided by the host.

4. **In-Meeting Features:**
   - Start/Stop Video: Toggle your camera during the call.
   - Share Screen: Share your screen with participants.
   - Chat: Send messages to other participants during the call.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) for more information.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
