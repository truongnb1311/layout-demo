import { Space, Table, Tag } from "antd"
import { Content } from "antd/lib/layout/layout"
import { ColumnsType } from "antd/lib/table";

function PaymentNew() {
    interface DataType {
        key: string;
        name: string;
        id: number;
        idAddress: number;
        price: string;
        action:string;
        status:string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Thời gian tạo',
            dataIndex: 'name',
            key: 'name',
          
        },
        {
            title: 'Mã thanh toán',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Mã đơn hàng',
            dataIndex: 'idAddress',
            key: 'idAddress',
        },
        {
            title: 'số tiền',
            key: 'price',
            dataIndex: 'price',


        },
        {
            title: 'Phương thức thanh toán',
            key: 'action',
            dataIndex:'action'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => (
                <>
                  {status.map(tag => {
                    let color = tag.length > 5 ? 'rgb(0, 190, 0)' : 'green';
                    return (
                      <Tag color={color} key={tag}>
                        {tag}
                      </Tag>
                    );
                  })}
                </>
              ),

        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: '11:40 11/10/2021',
            id: 6365440911,
            idAddress: 1831797444,
            price: "20, 000đ",
            action:"Thẻ ATM ",
            status:['Thành công']
        },
        {
            key: '2',
            name: '1:40 11/10/2022',
            id: 6365440911,
            idAddress: 1831797444,
            price: " 120, 000đ",
            action:"Thẻ ATM ",
            status:['Thành công']
        },
        {
            key: '3',
            name: '12:40 11/09/2021',
            id: 6365440911,
            idAddress: 1831797444,
            price: "12, 000đ",
            action:"Thẻ ATM ",
            status:['Thành công']
        },
    ];
    return (
        <>
            <Content className="container-payment" style={{ margin: '24px 16px 0' }}>
                <Table columns={columns} dataSource={data} />
            </Content>
        </>
    )
}
export default PaymentNew