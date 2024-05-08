import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "./../../Library/Components/Table";
const index = ({ auth }) => {
  return (
    <Authenticated
    user={auth.user}
    header={
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          ERP Library Components
        </h2>

      </div>
    }>
      <Head title="Library" />
      <div>
        <Table/>

      </div>

    </Authenticated>
  )
}

export default index
