import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Card from '@/Components/Card';
import CardList from '@/Components/CardList';
import UserCard from '@/Components/UserCard';
export default function Dashboard({ auth ,latestRequests ,latestUsers,requestCount,userCount}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-6 flex flex-col gap-4 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-4 w-full mb-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <UserCard auth={auth}/>
                    </div>
                    <div className="flex gap-4">
                        <Card count={requestCount} type="requests"/>
                        <Card count={userCount} type="users"/>
                    </div>
                    <div className="flex items-center justify-around gap-4 w-full">

                    <CardList auth={auth} latest={latestRequests} type="requests"/>
                    <CardList auth={auth} latest={latestUsers} type="users"/>
                    </div>

                </div>

            </div>
        </AuthenticatedLayout>
    );
}
