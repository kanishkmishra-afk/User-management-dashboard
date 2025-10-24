const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="text-center py-12">
      <svg className="mx-auto h-12 w-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">Error loading users</h3>
      <p className="mt-1 text-sm text-gray-500">{error}</p>
      <div className="mt-6">
        
      </div>
    </div>
  );
};

export default ErrorMessage;
