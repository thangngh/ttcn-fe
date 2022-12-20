import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../../redux/hook";
import { useRouter } from "next/router";
import { becomeShopper } from "../../../redux/action/users/userAction";

const BeComeShop = () => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClose = () => setOpen(false);

  const beComeShop = async () => {
    await dispatch(becomeShopper());
    setTimeout(() => {
      router.push("/myshop/dashboard");
    }, 1000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-full overflow-auto w-full max-w-3xl p-4 bg-white">
        <Typography
          className="text-2xl font-semibold text-center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Trở thành người bán hàng
        </Typography>
        <div className="mt-2">
          <div className="flex w-1/2 mx-auto items-center justify-between">
            <button
              onClick={beComeShop}
              className=" bg-red-700 text-white px-3 py-1 rounded shadow-card-layout "
            >
              <span>Đồng ý</span>
            </button>
            <button
              onClick={() => router.push("/")}
              className="bg-red-700 text-white px-3 py-1 rounded shadow-card-layout "
            >
              <span>Hủy</span>
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default BeComeShop;
