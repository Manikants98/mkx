"use client";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AddNewUsers from "../components/AddNewUsers/page";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("/api/users").then((response) => {
      setUsers(response?.data?.data);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex w-screen h-screen p-[1vh] gap-3 bg-gray-200">
      <div className="bg-white h-full shadow-md !rounded-md">
        <List className="!flex !flex-col !justify-center !rounded-md !w-[15vw] !p-0">
          <ListItem className="!h-32 !text-center !text-4xl !rounded-t-md !font-semibold !bg-gradient-to-r !text-white !from-cyan-500 !to-blue-500">
            HEADER
          </ListItem>
          <Divider />
          <ListItemButton>Dashbaord</ListItemButton>
          <ListItemButton className="!bg-gradient-to-r !rounded-l-full !text-white !from-cyan-500 !to-blue-500">
            Users
          </ListItemButton>
          <ListItemButton>Chats</ListItemButton>
        </List>
      </div>

      <div className="flex flex-col gap-4 h-full !w-[85vw]">
        <div className="h-[15%] flex flex-col gap-3 w-full">
          <div className="h-[50%] bg-white shadow-md flex items-center justify-center !rounded-md">
            Header
          </div>
          <div className="h-[50%] bg-white shadow-md flex items-center justify-end !rounded-md px-4">
            <AddNewUsers fetchFn={fetchUsers} />
          </div>
        </div>
        <div className="h-[85%] bg-white shadow-md !rounded-md w-full">
          <TableContainer component="div" className="rounded-md">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="!bg-gradient-to-r !text-white !from-cyan-500 !to-blue-500">
                <TableRow>
                  <TableCell className="!text-white font-semibold">
                    Name
                  </TableCell>
                  <TableCell
                    className="!text-white font-semibold"
                    align="right"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    className="!text-white font-semibold"
                    align="right"
                  >
                    Date Of Birth
                  </TableCell>
                  <TableCell
                    className="!text-white font-semibold"
                    align="right"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    className="!text-white font-semibold"
                    align="right"
                  >
                    Gender
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((row) => {
                  return (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
