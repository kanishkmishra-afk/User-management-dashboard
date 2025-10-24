import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link 
      to={`/user/${user.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6 hover:border-blue-300"
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {user.name}
          </h3>
          <p className="text-sm text-gray-600 truncate">
            {user.email}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {user.phone}
          </p>
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {user.company?.name || 'No Company'}
            </span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
