import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Screen from "../../layouts/Screen";
import SvgShop from "../../../components/svgComponent/svg-shop";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import React from "react";
import {
  editProfile,
  getAvatar,
  getProfile,
  sendMailResetPassword,
  uploadAvatar,
} from "../../../redux/action/users/userAction";
import { RootState } from "../../../redux/store";
import { IUserProfile } from "../../../type/customer/customer.interface";
import { useForm, Controller } from "react-hook-form";
import { gender } from "../../../type/utils/utli.interface";
import { useRouter } from "next/router";
import { UserAPI } from "../../../api-client/users/users-api";
import { resetSuccess } from "../../../redux/reducer/UserSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [image, setImage] = React.useState<File>();
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.UserReducer.authUser);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IUserProfile>({
    defaultValues: {
      gender: user?.gender,
    },
  });
  React.useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    accessToken && dispatch(getProfile());
  }, [dispatch]);

  React.useEffect(() => {
    setValue("firstname", user?.firstname);
    setValue("lastname", user?.lastname);
    setValue("email", user?.email);
    setValue("phone", user?.phone);
    setValue("gender", user?.gender);
    setValue("username", user?.username);
  }, [getValues, setValue, user]);

  React.useEffect(() => {
    if (user?.avatar) {
      setImageUrl(UserAPI.getImageAvatar(user?.avatar));
    }
  }, [user]);

  React.useEffect(() => {
    (async () => {
      if (image) {
        await dispatch(
          uploadAvatar({
            userId: user?.id,
            file: image,
          })
        );
      }
    })();
  }, [dispatch, image, user]);

  const onSendData = async (data: IUserProfile) => {
    await dispatch(editProfile(data));
  };

  const handleFileChange = (e: any) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSendMail = async (email: string) => {
    await dispatch(sendMailResetPassword(email));
  };
  return (
    <Screen>
      <div className="w-full mb-5">
        <div className="w-full sm:container  px-4 relative flex items-center  flex-wrap sm:flex-nowrap justify-end container mx-[15px] sm:mx-auto space-3">
          <div
            onClick={() => router.push("/myshop/dashboard")}
            className="px-2 py-2 bg-red-500 text-white font-semibold cursor-pointer rounded-md"
          >
            <span>Shop của tôi</span>
          </div>
        </div>
      </div>
      <div className="w-full sm:container mx-auto px-4">
        <div className="flex flex-col gap-x-[8px] mb-8">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <span>Hồ sơ cá nhân</span>
            </AccordionSummary>
            <AccordionDetails>
              {user && (
                <form
                  onSubmit={handleSubmit(onSendData)}
                  className="space-4 my-4 w-[90%] mx-auto"
                >
                  <div className="flex space-x-4 flex-wrap-reverse sm:flex-nowrap">
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-start">
                          <label htmlFor="firstname">Họ</label>
                          <input
                            type="text"
                            {...register("firstname")}
                            id="firstname"
                            defaultValue={user?.firstname}
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                          />
                          <label htmlFor="lastname">Tên</label>

                          <input
                            type="text"
                            {...register("lastname")}
                            defaultValue={user?.lastname}
                            className="border border-gray-300 rounded-md px-2 py-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="name">Giới tính</label>
                        <div className="flex items-center gap-x-4 justify-start">
                          <Controller
                            render={({ field }) => (
                              <RadioGroup
                                className="flex items-center !flex-row"
                                aria-label="gender"
                                {...field}
                              >
                                <FormControlLabel
                                  value={gender.FEMALE}
                                  control={<Radio />}
                                  label="Nữ"
                                />
                                <FormControlLabel
                                  value={gender.MALE}
                                  control={<Radio />}
                                  label="Nam"
                                />
                              </RadioGroup>
                            )}
                            name="gender"
                            control={control}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                          type="text"
                          {...register("phone")}
                          name="phone"
                          defaultValue={user?.phone as string}
                          className="border border-gray-300 rounded-md px-2 py-1"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          {...register("email")}
                          name="email"
                          readOnly
                          defaultValue={user?.email}
                          className="border border-gray-300 rounded-md px-2 py-1"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <label htmlFor="username">Username:</label>
                        <span>{user?.username}</span>
                      </div>
                      <div className="flex flex-col">
                        <button type="submit">
                          <span className="text-sm font-normal text-white bg-red-400 rounded-md px-4 py-3 ">
                            Thay đổi
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block w-3/4 mx-auto ">
                      <div className="flex flex-col space-y-4 items-center">
                        <label
                          htmlFor="image"
                          className="h-24 w-24 my-4 block relative"
                        >
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              layout="fill"
                              alt=""
                              className=" rounded-full peer"
                              objectFit="cover"
                              draggable={true}
                            />
                          ) : (
                            <Image
                              src={"https://i.pravatar.cc/150?img=32"}
                              layout="fill"
                              alt=""
                              className=" rounded-full peer"
                              objectFit="cover"
                              draggable={true}
                            />
                          )}
                        </label>
                        <input
                          id="image"
                          type="file"
                          autoComplete="off"
                          accept="image/*"
                          className="h-0 w-0 peer"
                          onChange={handleFileChange}
                        />

                        <label
                          htmlFor="image"
                          className="text-sm font-normal text-white bg-red-400 rounded-md px-3 py-2 "
                        >
                          Chọn Ảnh
                        </label>
                        <span>
                          Dụng lượng file tối đa 1 MB <br />
                          Định dạng:.JPEG, .PNG
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <div className="flex items-center space-x-4 justify-between">
                <span>Đổi mật khẩu</span>
                <span className="text-sm cursor-pointer font-medium hover:underline my-4">
                  <i>Cấp lại mật khẩu</i>
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <form className="space-4 my-4 w-[90%] mx-auto">
                <div className="flex space-x-4 flex-wrap-reverse sm:flex-nowrap">
                  <div className="space-y-5">
                    <div className="flex flex-col">
                      <label htmlFor="pass-current">Mật khẩu hiện tại</label>
                      <input
                        type="text"
                        name="pass-current"
                        id="pass-current"
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="pass-new">Mật khẩu mới</label>
                      <input
                        type="text"
                        name="pass-new"
                        id="pass-new"
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="re-pass-new">Nhập lại Mật khẩu mới</label>
                      <input
                        type="text"
                        name="re-pass-new"
                        id="re-pass-new"
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </div>

                    <div className="flex flex-col">
                      <button type="submit">
                        <span className="text-sm font-normal text-white bg-red-400 rounded-md px-4 py-3 ">
                          Thay đổi
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <span>Đơn hàng của tôi</span>
            </AccordionSummary>
            <AccordionDetails>
              <div className="block relative visible ">
                <div className="flex flex-col my-2 bg-[#f5f5f5] p-4 rounded-sm space-y-4">
                  <div className="px-4 pt-4 pb-3 block">
                    <div className="pb-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="flex whitespace-normal space-x-2">
                        <h1 className="max-w-xs truncate text-sm font-semibold ">
                          ruguo.vn (Chuyên Đồ Gia Dụng)
                        </h1>
                        <a>
                          <button className="flex items-center border space-x-2 py-1 px-2">
                            <SvgShop />
                            <span className="text-xs font-normal">
                              xem shop
                            </span>
                          </button>
                        </a>
                      </div>
                      <div className="block">
                        <h1>trạng thái</h1>
                      </div>
                    </div>
                  </div>
                  <div className="block relative">
                    <div className="flex items-center space-y-3  space-x-1 justify-between flex-wrap sm:flex-nowrap">
                      <div className="flex justify-between space-x-2 ">
                        <div className="relative w-20 h-20">
                          <Image
                            src={"https://i.pravatar.cc/150?img=32"}
                            layout="fill"
                            alt=""
                            className="bg-cover bg-no-repeat"
                            objectFit="cover"
                          />
                        </div>
                        <div className="flex flex-col space-y-2 justify-start">
                          <span className="sm:truncate break-inside-auto text-sm font-medium">
                            Bình Giữ Nhiệt Hiển Thị Nhiệt Độ Phong Cách Cổ Trang
                            Chất Liệu Inox 304 Cao Cấp Dung Tích 500ml
                          </span>
                          <span className="text-xs font-normal">Loại</span>
                          <span className="text-xs font-normal">số lượng</span>
                        </div>
                      </div>
                      <div className="mx-4">
                        <span>giasdadsdsads </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  justify-end">
                    <span className="text-lg font-normal">thành tiền</span>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="px-4 py-2 bg-red-500 text-white font-semibold cursor-pointer rounded-md">
                        <span>Mua lại</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Screen>
  );
};
export default Profile;
