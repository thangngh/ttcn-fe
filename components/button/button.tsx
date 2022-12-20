import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { addImage } from "../../redux/reducer/ProductSlice";
import { useAppDispatch } from "../../redux/hook";
const Button = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<any>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    //multiple files
    const files = e.target.files;
    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      setData((prev: any) => [...prev, file]);
      // dispatch(addImage(file));
    });
  };
  console.log(data.map((item: any) => item));
  return (
    <div className="bg-gray-700 px-3 py-1 rounded shadow-card-layout ">
      <button type="submit" onClick={handleOpen}>
        Add
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-full overflow-auto w-full max-w-3xl p-4 bg-white">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Product
          </Typography>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description">Description</label>
                <textarea className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  min={1}
                  className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image">Image</label>
                {/* <input type="file" /> */}
                <div className="cursor-pointer rounded-full p-2 flex items-center justify-center border border-gray-400 text-gray-100 text-sm font-semibold uppercase">
                  <svg
                    className="w-6 h-6 text-gray-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    onChange={handleChange}
                    name="image"
                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    className="absolute z-10 opacity-0 bg-gray-100"
                    type="file"
                    id="image"
                    multiple
                  />
                </div>
                <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 my-4">
                  {data.map((item: any, id: number) => {
                    return (
                      <div key={id} className="relative col-span-1 m-2 border">
                        <Image
                          src={"http://localhost:3000/" + item}
                          alt="Picture of the author"
                          layout="responsive"
                          className="object-cover w-6 h-6"
                          width={150}
                          height={150}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="text-center py-3">
              <button
                type="submit"
                className="bg-red-500 text-white shadow-card-layout-sm block text-center  rounded-lg py-2 px-5 w-full max-w-xs  mt-4 mx-auto"
              >
                Add
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Button;
