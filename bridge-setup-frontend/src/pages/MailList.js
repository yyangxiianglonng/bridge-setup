import { Table, Tag, Space } from 'antd';
export default function MailList() {
    const columns = [
        {
            title: '店舗名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: '担当者',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'メール',
            dataIndex: 'mail',
            key: 'mail',
        },
        {
            title: 'Office365',
            dataIndex: 'office',
            key: 'office',
        },
        {
            title: 'Google',
            dataIndex: 'google',
            key: 'google',
        },
        {
            title: 'グループ',
            dataIndex: 'tags',
            key: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {/* <a>編集 {record.name}</a>
                     */}
                    <a>編集</a>
                    <a>削除</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <Table columns={columns} dataSource={data} style={{ marginTop: '60px' }} />
    )
}