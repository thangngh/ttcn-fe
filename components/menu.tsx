import React from "react";

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
  return (
    <>
      {Item?.map((category, i) => (
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
