import React from 'react'
import UsersTable from '@/Components/UsersTable'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

const Index = ({auth,users}) => {
  return (
    <Authenticated
    user={auth.user}
    header={
      <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Users
      </h2>
    }
  >
  <Head title="Requests" />
    {/* <pre className="text-white">
      {JSON.stringify(requests,undefined,2)}
    </pre> */}
  <UsersTable users={users}/>
  </Authenticated>
  )
}

export default Index
