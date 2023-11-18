"use client";
import { DataGrid } from "@mui/x-data-grid";
import { enqueueSnackbar as Snackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteContactsFn, getContactsFn } from "../services/contacts";

const Customers = () => {
  const client = useQueryClient();
  const { data: contacts, isLoading: isloadingContacts } = useQuery(
    ["getContacts"],
    () => getContactsFn(),
    { refetchOnWindowFocus: false }
  );

  const { mutate: deleteContacts } = useMutation(deleteContactsFn, {
    onSuccess: (res) => {
      Snackbar(res.data.message, { variant: "success" });
      client.refetchQueries("getContacts");
    },
  });
  const rows =
    contacts?.data?.contacts?.map((contact) => {
      return {
        id: contact._id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        mobile_number: contact.mobile_number,
      };
    }) || [];

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "first_name", headerName: "First Name", flex: 1 },
    { field: "last_name", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "mobile_number", headerName: "Mobile Number", flex: 1 },
  ];

  return (
    <div className="grid bg-white text-black shadow w-full h-full">
      <DataGrid
        rowSelection={false}
        loading={isloadingContacts}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default Customers;
