import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "./Table";
import Buttons from "./Buttons";
import NotificationCards from "./NotificationCards";
import Typography from "./Typography";
import Tooltips from "./Tooltips";
import ExampleWrapper from './ExampleWrapper';
import TableUsers from "./TableUsers";
import ColorPalette from "./ColorPalette";

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

        <Typography/>
        <Table/>
        <Buttons/>
        <NotificationCards/>
        <Tooltips/>
        <ExampleWrapper/>
        <TableUsers/>
        <ColorPalette/>


    </Authenticated>
  )
}

export default index
