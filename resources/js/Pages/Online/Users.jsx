import Table from '@/Components/DaisyUI/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                       <Table/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
