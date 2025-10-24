import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Header */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors"
              >
                User Management Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className='dark:text-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300'
              onClick={toggleTheme}>
                <span className="mr-2 text-yellow-500">{theme==="light" ? "🌙" : "☀️"}</span>
                {theme==="light"?"dark":"light"}
              </button>
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/add-user"
                className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Add User
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
