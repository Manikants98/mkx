"use client";
import { Close } from "@mui/icons-material";
import { Button, Dialog, IconButton, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRef, useState } from "react";
import { PutBlobResult } from "@vercel/blob";
const AddNewUsers = ({ fetchFn }) => {
  const [open, setOpen] = useState(false);
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      axios
        .post("/api/users", formik.values)
        .then((res) => {
          console.log(res, "SUCCESS");
          setOpen(false);
          fetchFn();
        })
        .catch((res) => {
          console.log(res, "ERROR");
        });
    },
  });

  return (
    <>
      <Button
        variant="contained"
        size="small"
        className="!bg-blue-500"
        onClick={() => setOpen(true)}
      >
        Add New User
      </Button>
      <Dialog
        PaperProps={{
          className: "!max-w-[33%] !min-w-[33%]",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        {/* <span className="flex items-center justify-between pl-3">
          <p className="text-blue-500">Add New User</p>
        
        </span>
        <Divider /> */}
        <div className="flex">
          <div>
            <Image width={500} height={500} src="/user.svg" />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex justify-center items-center flex-col gap-2 p-3 w-[500px]"
          >
            <span className="flex justify-end w-full">
              <IconButton size="small" onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </span>
            <p className="text-lg font-semibold text-center text-blue-500">
              Create New User
            </p>
            <input
              name="file"
              type="file"
              required
              onChange={async (event) => {
                const image = event.target.files?.[0];
                const response = await fetch(
                  `/api/avatar/upload?filename=${image.name}`,
                  {
                    method: "POST",
                    body: image,
                  }
                );
                const newBlob = await response.json();
                setBlob(newBlob);
              }}
            />
            <TextField
              name="name"
              label="Name"
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              name="email"
              label="Email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button variant="contained" className="!bg-blue-600" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default AddNewUsers;
