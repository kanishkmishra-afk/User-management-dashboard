import { useState,useMemo } from "react"
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import UserCard from "../components/UserCard";
import ErrorMessage from '../components/ErrorMessage.jsx'

const HomePage = ({ users, loading, error}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

   if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error}  />;
  }

  return (
     <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Users</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage and view all users in your system
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/add-user"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New User
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        placeholder="Search users by name, email, or company..."
      />

      {/* Users Grid */}
      {filteredUsers.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No users found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding a new user.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {/* Results Count */}
      {filteredUsers.length > 0 && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-300">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      )}
    </div>
  )
}

export default HomePage
