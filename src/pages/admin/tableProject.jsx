function TableProject() {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Project Management</h2>
                        <p className="text-sm text-gray-600">Manage your portfolio projects</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        + Add New Project
                    </button>
                </div>
            </div>

            {/* Table Container - Responsive Wrapper */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    {/* Table Header */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Project
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                Technologies
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                Image
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                GitHub Link
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                Created
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body - Empty State */}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Empty State Row */}
                        <tr>
                            <td colSpan="7" className="px-6 py-12 text-center">
                                <div className="flex flex-col items-center justify-center">
                                    {/* Empty State Icon */}
                                    <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                                    <p className="text-gray-500 mb-6 max-w-sm">
                                        Get started by creating your first project to showcase in your portfolio.
                                    </p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                        Create First Project
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">0</span> to <span className="font-medium">0</span> of{' '}
                        <span className="font-medium">0</span> results
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-500 cursor-not-allowed" disabled>
                            Previous
                        </button>
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-500 cursor-not-allowed" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableProject;