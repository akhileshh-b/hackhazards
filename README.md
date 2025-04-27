# 📚 StoryBuilder

StoryBuilder is an AI-powered story generation platform that helps writers, educators, and creative minds bring their ideas to life. Built with React, Material-UI, and Supabase, it offers an intuitive interface for creating, saving, and managing stories.

![StoryBuilder Banner](https://your-image-url-here.com/banner.png)

## ✨ Features

- 🤖 **AI-Powered Story Generation**: Leverage advanced AI technology to create engaging narratives
- 🎨 **Intuitive Interface**: User-friendly design for seamless story creation
- 💾 **Story Management**: Save, edit, and organize your stories
- 🔐 **Secure Authentication**: Email-based authentication system
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎯 **Customizable Prompts**: Fine-tune your story generation with detailed prompts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- Groq API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/storybuilder.git
cd storybuilder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_GROQ_API_KEY=your_groq_api_key
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **UI Library**: Material-UI
- **Authentication & Database**: Supabase
- **AI Integration**: Groq API
- **Routing**: React Router
- **Notifications**: React Hot Toast
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── components/
│   ├── CreateStory.js
│   ├── LandingPage.js
│   ├── Login.js
│   ├── Navbar.js
│   ├── SignUp.js
│   ├── StoriesList.js
│   └── StoryResult.js
├── contexts/
│   └── AuthContext.js
├── App.js
└── supabaseClient.js
```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Set up the following tables:
   - `user_stories`
     ```sql
     create table user_stories (
       id uuid default uuid_generate_v4() primary key,
       user_id uuid references auth.users,
       title text,
       content text,
       created_at timestamp with time zone default timezone('utc'::text, now()),
       updated_at timestamp with time zone default timezone('utc'::text, now())
     );
     ```

### Environment Variables

Required environment variables:
- `REACT_APP_SUPABASE_URL`: Your Supabase project URL
- `REACT_APP_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `REACT_APP_GROQ_API_KEY`: Your Groq API key

## 🎨 Color Scheme

```css
Primary Colors:
- Main: #244855
- Light: #90AEAD
- Dark: #1A353F

Secondary Colors:
- Main: #E64833
- Light: #FF6B4A
- Dark: #C93A28

Background:
- Default: #FBE9D0
- Paper: #FFFFFF

Text:
- Primary: #244855
- Secondary: #874F41
```

## 🔒 Security

- Authentication is handled through Supabase
- All API keys are stored securely in environment variables
- Protected routes ensure authenticated access
- Database rules enforce user-specific data access

## 🚀 Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy to your preferred hosting platform:
- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Supabase](https://supabase.com/)
- [Groq](https://groq.com/)

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/storybuilder](https://github.com/yourusername/storybuilder)

---
Made with ❤️ by [Your Name] 