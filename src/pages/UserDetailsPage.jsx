import { useParams, Link } from 'react-router-dom';

const UserDetailsPage = ({ users }) => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">User not found</h3>
        <p className="mt-1 text-sm text-gray-500">The user you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Users
        </Link>
      </div>

      {/* User Details Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white dark:bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white dark:text-gray-100">{user.name}</h1>
              <p className="text-blue-100 dark:text-blue-400 text-lg">{user.email}</p>
              <p className="text-blue-200 dark:text-blue-500">{user.phone}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Personal Information</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</dt>
                  <dd className="text-sm text-gray-900 dark:text-gray-200">{user.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</dt>
                  <dd className="text-sm text-gray-900 dark:text-gray-200">{user.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</dt>
                  <dd className="text-sm text-gray-900 dark:text-gray-200">{user.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Username</dt>
                  <dd className="text-sm text-gray-900 dark:text-gray-200">{user.username}</dd>
                </div>
                {user.website && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</dt>
                    <dd className="text-sm text-gray-900 dark:text-gray-200 ">
                      <a 
                        href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
                      >
                        {user.website}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Company Information</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Company Name</dt>
                  <dd className="text-sm text-gray-900 dark:text-gray-200">{user.company?.name || 'N/A'}</dd>
                </div>
                {user.company?.catchPhrase && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Catch Phrase</dt>
                    <dd className="text-sm text-gray-900 dark:text-gray-200">{user.company.catchPhrase}</dd>
                  </div>
                )}
                {user.company?.bs && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Business Strategy</dt>
                    <dd className="text-sm text-gray-900 dark:text-gray-200">{user.company.bs}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>

          {/* Address Information */}
          {user.address && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Street</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.street || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Suite</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.suite || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">City</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.city || 'N/A'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Zip Code</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.zipcode || 'N/A'}</dd>
                    </div>
                  </dl>
                </div>
                {user.address.geo && (user.address.geo.lat || user.address.geo.lng) && (
                  <div>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Latitude</dt>
                        <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.geo.lat || 'N/A'}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Longitude</dt>
                        <dd className="text-sm text-gray-900 dark:text-gray-200">{user.address.geo.lng || 'N/A'}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
