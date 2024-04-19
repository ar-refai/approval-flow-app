import Table from "@/Components/RequestsTable";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({auth , requests}) => {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Requests
        </h2>
      }
    >
    <Head title="Requests" />
      {/* <pre className="text-white">
        {JSON.stringify(requests,undefined,2)}
      </pre> */}
    <Table requests={requests}/>
    </Authenticated>
  );
};

export default Index;
