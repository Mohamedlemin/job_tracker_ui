
import { Button, Card, Col, Input, Row, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from "@ant-design/icons";


type ColumnsType<T extends object> = TableProps<T>['columns'];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}



const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
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
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
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
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Companies: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div >
      <Card title="Favorite companies" style={{marginTop:30}} >
      <Row justify={"space-between"} style={{margin:10}}>
                <Col>
                    <Input.Search />
                </Col>

                <Col>
                    <Button type="primary"
                        onClick={() => navigate(`add`)}
                        icon={<PlusOutlined />}>
                        Add new Folder
                    </Button>
                </Col>
            </Row>
        <Table columns={columns}  dataSource={data} />


      </Card>
    </div>
  );
};


export default Companies;