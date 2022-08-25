import { LaptopOutlined, NotificationOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
export const router=[
    {
        icon:UserOutlined,
        key:"Dashboard",
        link:'/dashBoard'

    },
    {
        icon: LaptopOutlined,
        key:"Quản lý số dư",
        link:'/balances'

    },
    {
        icon:VideoCameraOutlined,
        key:"Thanh toán mới",
        link:'/paymentNew'

    }
]