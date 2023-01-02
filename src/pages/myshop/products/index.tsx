import MyShopScreen from "../../../layouts/MyShopScreen";
import Head from "next/head";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/router";
import {
  CreateProduct,
  GetProductByShop,
} from "../../../../redux/action/product/productAction";
import {
  Button,
  Form,
  Popconfirm,
  Table,
  Typography,
  Image,
  Modal,
  Input,
  Upload,
  InputNumber,
  Select,
} from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { toast } from "react-toastify";
import { ColumnTypes } from "../../../../components/table/table-type";
import SearchBar from "../../../../components/searchBar/searchBar";
import { EditableCell } from "../../../../components/table/table-edit-cell";
import { getCategoryByShopIdAction } from "../../../../redux/action/category/categoryAction";
import { ProductAPI } from "../../../../api-client/product/product-api";
import { PlusOutlined } from "@ant-design/icons";

interface DataType {
  id?: string;
  price?: number;
  name?: string;
  description?: string;
  image?: string;
  quantity?: number;
  category?: string;
  createdat?: Date;
  updatedat?: Date;
}

const Products: React.FC = () => {
  const [editingKey, setEditingKey] = React.useState<string>("");
  const [searchKey, setSearchKey] = React.useState("");
  const router = useRouter();
  const [forms] = Form.useForm();
  const { TextArea } = Input;

  const dispatch = useAppDispatch();
  const dataRow = useAppSelector(
    (state: RootState) => state.ProductReducer.productShop
  );
  const [category, setCategory] = React.useState<any[]>([]);

  const categoryList = useAppSelector(
    (state: RootState) => state.CategoryReducer.categoryList
  );

  React.useEffect(() => {
    if (categoryList) {
      setCategory(categoryList);
    }
  }, [categoryList]);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    forms.resetFields();
    setOpen(false);
  };

  const [dataSource, setDataSource] = React.useState<DataType[]>([]);
  const [categoryChange, setCategoryChange] = React.useState<string>("");

  React.useEffect(() => {
    if (router.isReady) {
      dispatch(getCategoryByShopIdAction(router.query.shopid as string));
    }
  }, [router.isReady]);

  React.useEffect(() => {
    if (!Array.isArray(dataRow)) return;
    const dataList: DataType[] = [];
    dataRow.forEach(async (item) => {
      dataList.push({
        id: item.productid,
        name: item.productName,
        description: item.productDescription,
        price: item.productPrice,
        image: await ProductAPI.getImageProduct(item.productImage),
        category: item.categoryname,
        quantity: item.quantity,
        createdat: item.createdat,
        updatedat: item.updatedat,
      });
    });
    setDataSource(dataList);
  }, [dataRow]);

  const isEditing = (record: DataType) => record.id === editingKey;

  const edit = (record: DataType) => {
    forms.setFieldsValue({
      name: "",
      description: "",
      price: 1,
      // image: "",
      category: "",
      quantity: 1,
      ...record,
    });
    setCategoryChange(record.category as string);
    setEditingKey(record.id as string);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: DataType) => {
    const row = await forms.validateFields();
    try {
    } catch (error) {
      toast.error("Update failed, please try again!");
    }
  };

  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    { title: "Id", dataIndex: "id", key: "id", editable: false },
    { title: "Name", dataIndex: "name", key: "name", editable: true },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      editable: true,
    },
    { title: "Price", dataIndex: "price", key: "price", editable: true },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "25%",
      render: (_, record: DataType) => {
        return (
          <>
            <Image
              // preview={{ visible: false }}
              preview={false}
              width={100}
              src={record.image}
              alt="image"
              // onClick={() => setVisible(true)}
            />
            {/* <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image
                  src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                  alt="image"
                  width={100}
                />
                <Image
                  src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                  alt="image"
                  width={100}
                />
                <Image
                  src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                  alt="image"
                  width={100}
                />
              </Image.PreviewGroup>
            </div> */}
          </>
        );
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      editable: true,
    },
    { title: "Created At", dataIndex: "createdat", key: "createdat" },
    { title: "Updated At", dataIndex: "updatedat", key: "updatedat" },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      // editable: true,
      render: (_, record: DataType) => {
        const editable = isEditing(record);
        return editable ? (
          <Select
            showArrow
            style={{
              width: "100%",
            }}
            onChange={(value: string) => setCategoryChange(value)}
            defaultValue={record.category}
          >
            {category.map((item, idx) => (
              <Select.Option key={idx} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <>
            <div>{record.category}</div>
          </>
        );
      },
    },
    {
      title: "Hành động",
      dataIndex: "Hành động",
      fixed: "right",
      width: "20%",
      key: "Hành động",
      render: (_, record: DataType) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <Typography.Link
              style={{
                marginRight: 8,
              }}
            >
              <button
                onClick={() => save(record)}
                style={{
                  cursor: "pointer",
                  padding: "0 8px",
                }}
              >
                Save
              </button>
            </Typography.Link>
            <Popconfirm title="Bạn có muốn hủy?" onConfirm={cancel}>
              <button
                style={{
                  cursor: "pointer",
                  padding: "0 2px",
                }}
              >
                Cancel
              </button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <button
              style={{
                cursor: "pointer",
                padding: "0 10px",
                background: "danger",
              }}
            >
              Edit
            </button>
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
  };

  React.useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        dispatch(GetProductByShop(router.query.shopid as string));
      }, 1000);
    }
  }, [router.isReady]);

  const onCreateProduct = async () => {
    try {
      const values = await forms.validateFields();

      const data = {
        name: values.name,
        description: values.description,
        price: values.price,
        quantity: values.quantity,
        // image: values.image[0].originFileObj,
        categoryid: values.category,
        // categoryid:
      };

      await dispatch(
        CreateProduct({
          shopid: router.query.shopid as string,
          image: normFile(values.image)[0].originFileObj,
          payload: data,
        })
      );

      handleClose();
      forms.resetFields();
      dispatch(GetProductByShop(router.query.shopid as string));
    } catch (error) {
      toast.error("Thêm sản phẩm thất bại");
      console.log(error);
    }
  };

  return (
    <MyShopScreen>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <h1 className="py-4 font-medium text-lg text-black">Sản Phẩm</h1>
        <div className="flex  space-x-3 justify-between">
          <Button onClick={handleOpen} style={{ marginBottom: 16 }}>
            Thêm Sản Phẩm
          </Button>
          <SearchBar
            style={{ width: "40%" }}
            placeholder="Tìm kiếm theo tên sản phẩm"
            setSearchKey={setSearchKey}
          />
        </div>
        <Form form={forms} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            // pagination={{
            //   onChange: cancel,
            // }}
            bordered
            dataSource={dataSource}
            columns={mergedColumns as ColumnTypes}
          />
        </Form>
        <Modal
          style={{
            color: "black",
          }}
          open={open}
          onOk={handleClose}
          onCancel={handleClose}
          centered
          footer={[
            <Button key="back" onClick={handleClose}>
              Hủy
            </Button>,
            <Button key="submit" onClick={onCreateProduct}>
              Thêm
            </Button>,
          ]}
        >
          <div>
            <h1 className="my-4 text-base font-medium">Thêm thư mục mới</h1>
            <Form
              validateMessages={validateMessages}
              name="form-name"
              form={forms}
              onFinish={onCreateProduct}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Tên Sản Phẩm</label>
                  <Form.Item name={"name"} rules={[{ required: true }]}>
                    <Input className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="description">Mô tả</label>
                  <Form.Item name={"description"} rules={[{ required: true }]}>
                    <TextArea rows={4} />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Giá</label>
                  <Form.Item
                    name={"price"}
                    rules={[{ type: "number", min: 1 }]}
                  >
                    <InputNumber
                      // min={1}
                      // onChange={handlePriceChange}
                      className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="quantity">Số lượng</label>
                  <Form.Item
                    name={"quantity"}
                    rules={[{ type: "number", min: 1 }]}
                  >
                    <InputNumber
                      // min={1}
                      // onChange={handleQuantityChange}
                      className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category">Danh mục</label>
                  <Form.Item name={"category"}>
                    <Select>
                      {categoryList &&
                        category.map((item, idx) => (
                          <Select.Option key={idx} value={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                    </Select>
                    {/* <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select> */}
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="image">Hình ảnh</label>
                  <Form.Item
                    name={"image"}
                    getValueFromEvent={normFile}
                    valuePropName="fileList"
                  >
                    <Upload listType="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </MyShopScreen>
  );
};

export default Products;
