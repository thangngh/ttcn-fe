import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Logo from "../../../components/logo";
import { IShopUser } from "../../../type/users/users.interface";
import Screen from "../../layouts/Screen";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  name: Yup.string()
    .required("Tên shop là bắt buộc")
    .trim("Tên shop là bắt buộc"),
  description: Yup.string()
    .required("Mô tả là bắt buộc")
    .trim("Mô tả là bắt buộc"),
  phone: Yup.string()
    .required("Số điện thoại là bắt buộc")
    .trim("Số điện thoại là bắt buộc"),
  address: Yup.string()
    .required("Địa chỉ là bắt buộc")
    .trim("Địa chỉ là bắt buộc"),
  email: Yup.string()
    .required("Email bắt buộc")
    .trim("Email bắt buộc")
    .max(50, "Email quá dài")
    .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, {
      message: "Email sai định dạng",
    }),
});

const CreateShop = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShopUser>({
    resolver: yupResolver(schemaValidation),
  });

  const onCreateShop = async (data: IShopUser) => {
    console.log(data);
  };

  return (
    <Screen>
      <div className="w-full mx-auto mb-5 max-w-7xl">
        <div className="w-screen sm:container mx-auto mb-10 px-4 relative ">
          <div className=" flex space-x-2 items-center">
            <Logo />
            <span className="text-xl font-medium">| Shop của tôi</span>
          </div>
        </div>
        <div className="w-screen sm:container mx-auto mb-10 px-4 relative ">
          <form onSubmit={handleSubmit(onCreateShop)}>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-3">
                <label htmlFor="name">Tên shop</label>
                <input
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.name ? "ring-red-200" : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                  type="text"
                  id="name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.description ? "ring-red-200" : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label htmlFor="phone">Điện Thoại</label>
                <input
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.phone ? "ring-red-200" : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                  type="text"
                  {...register("phone")}
                  id="phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label htmlFor="email">Email</label>
                <input
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.email ? "ring-red-200" : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                  type="text"
                  {...register("email")}
                  id="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.address ? "ring-red-200" : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                  type="text"
                  {...register("address")}
                  id="address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  className="bg-red-500 text-white shadow-card-layout-sm block text-center 3xl:text-xl rounded-lg py-2 px-5 w-2/5  mt-4 mx-auto"
                  type="submit"
                >
                  Tạo shop
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Screen>
  );
};

export default CreateShop;
