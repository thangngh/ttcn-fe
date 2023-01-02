import React from "react";
import { getAllCategoryAction } from "../redux/action/category/categoryAction";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

const Item = [
  "LAPTOP",
  "TABLET",
  "MOBILE",
  "CASE – VỎ MÁY TÍNH",
  // "MÁY TÍNH VĂN PHÒNG",
  // "MÁY TÍNH ĐỒ HỌA, RENDER",
  // "MÁY TÍNH GAMING, STREMING",
  // "MONITOR – MÀN HÌNH",
  // "RAM BỘ NHỚ TRONG",
  // "CPU BỘ VI XỬ LÝ",
  // "Ổ CỨNG – THIẾT BỊ LƯU TRỮ",
  // "COOLING TẢN NHIỆT",
  // "GAMING GEAR – PHỤ KIỆN",
  // "SPU – NGUỒN MÁY TÍNH",
  // "VGA-CARD MÀN HÌNH",
];

export const Menu = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = React.useState<any[]>([]);

  const allCategory = useAppSelector(
    (state: RootState) => state.CategoryReducer.allCategory
  );

  React.useEffect(() => {
    const datas: any[] = [];

    allCategory?.map((category) => {
      datas.push(category.name.toUpperCase());
    });

    setData([...new Set(datas)]);
  }, [allCategory]);

  React.useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  return (
    <>
      {data?.slice(0, 5).map((category, i) => (
        <div
          key={`category-${i}`}
          className={`py-2 px-6 bg-white text-center whitespace-nowrap rounded hover:bg-blue-light  transition-all cursor-pointer ease-in-out duration-200 shadow`}
        >
          {category}
        </div>
      ))}
    </>
  );
};
