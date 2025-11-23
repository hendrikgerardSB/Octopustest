import Navbar from '@/components/layout/Navbar';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-easyfairs-dark mb-6">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Quick Stats */}
                        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Active Projects</dt>
                            <dd className="mt-1 text-3xl font-semibold text-easyfairs-dark">3</dd>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Pending Reviews</dt>
                            <dd className="mt-1 text-3xl font-semibold text-easyfairs-dark">1</dd>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Total Orders</dt>
                            <dd className="mt-1 text-3xl font-semibold text-easyfairs-dark">12</dd>
                        </div>

                        {/* Recent Activity Placeholder */}
                        <div className="bg-white shadow rounded-lg md:col-span-3 p-6">
                            <h2 className="text-lg font-medium text-easyfairs-dark mb-4">Recent Activity</h2>
                            <div className="border-l-4 border-easyfairs-green bg-green-50 p-4 mb-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-green-700">
                                            Project "TechExpo 2025" was updated 2 hours ago.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-l-4 border-gray-200 bg-gray-50 p-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-gray-700">
                                            New catalog items added for "Furniture" category.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
