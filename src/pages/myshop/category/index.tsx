import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import React from "react";
import { useRouter } from "next/router";
import {
  createCategoryAction,
  getCategoryByShopIdAction,
  updateCategoryAction,
} from "../../../../redux/action/category/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import MyShopScreen from "../../../layouts/MyShopScreen";
import SearchBar from "../../../../components/searchBar/searchBar";
import { toast } from "react-toastify";
import { pushCategory } from "../../../../redux/reducer/CategorySlice";
import { ColumnTypes } from "../../../../components/table/table-type";
import { EditableCell } from "../../../../components/table/table-edit-cell";

interface DataType {
  id?: string;
  name?: string;
  createdat?: Date;
  updatedat?: Date;
}

const Category = () => {
  const [editingKey, setEditingKey] = React.useState<string>("");
  const [searchKey, setSearchKey] = React.useState("");
  const router = useRouter();
  const [forms] = Form.useForm();

  const dispatch = useAppDispatch();
  const dataRow = useAppSelector(
    (state: RootState) => state.CategoryReducer.categoryList
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    forms.resetFields();
    setOpen(false);
  };

  const [dataSource, setDataSource] = React.useState<DataType[]>([]);

  React.useEffect(() => {
    if (!Array.isArray(dataRow)) return;
    const dataList: DataType[] = [];
    dataRow.forEach((item) => {
      dataList.push({
        id: item.id,
        name: item.name,
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
      ...record,
    });
    setEditingKey(record.id as string);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: DataType) => {
    const row = await forms.validateFields();
    try {
      await dispatch(
        updateCategoryAction({
          id: key.id as string,
          name: row.name as string,
          updateat: new Date(),
        })
      );
      setEditingKey("");
    } catch (errInfo) {
      toast.error("Update failed, please try again!");
    }
  };

  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name", editable: true },
    {
      title: "Create At",
      dataIndex: "createdat",
      key: "createdat",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: "Update At",
      dataIndex: "updatedat",
      key: "updatedat",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: "Hành động",
      dataIndex: "Hành động",
      fixed: "right",
      width: 150,
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
                Lưu
              </button>
            </Typography.Link>
            <Popconfirm
              title="Bạn muốn hủy thay đổi này?"
              className="text-black"
              onConfirm={cancel}
            >
              <button
                style={{
                  cursor: "pointer",
                  padding: "0 2px",
                }}
              >
                Trở Về
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
              Sửa
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
      email: "${label} is not a valid email!",
    },
  };

  const handleDelete = (key: string) => {
    const newData = dataSource.filter((item) => item.id !== key);

    setDataSource(newData);
  };

  React.useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        dispatch(getCategoryByShopIdAction(router.query.shopid as string));
      }, 1000);
    }
  }, [dispatch, router.isReady, router.query.shopid]);

  const onCreateCategory = async () => {
    try {
      const values = await forms.validateFields();
      await dispatch(
        createCategoryAction({
          name: values.name,
          shopid: router.query.shopid as string,
        })
      );
      handleClose();
      forms.resetFields();
      dispatch(getCategoryByShopIdAction(router.query.shopid as string));
    } catch (err) {
      toast.error("Thêm thư mục thất bại");
      console.log(err);
    }
  };

  return (
    <MyShopScreen>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <h1 className="py-4 font-medium text-lg text-black">Thư Mục</h1>
        <div className="flex  space-x-3 justify-between">
          <Button onClick={handleOpen} style={{ marginBottom: 16 }}>
            Thêm Thư Mục
          </Button>
          <SearchBar
            style={{ width: "40%" }}
            placeholder="Tìm kiếm theo tên thư mục"
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
      </div>
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
          <Button key="submit" onClick={onCreateCategory}>
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
            onFinish={onCreateCategory}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Form.Item name={"name"} rules={[{ required: true }]}>
                  <Input className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </MyShopScreen>
  );
};

export default Category;
