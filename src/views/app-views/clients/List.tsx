import { Button, Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import clientService from "services/ClientService";




const List = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const loadClients = () => {
        console.log('load clients');
        setLoading(true);
        setData([
            {
                id: 1,
                name: "John Doe",
                address: "1234 Main St",
                logo: "https://via.placeholder.com/150"
            }, {
                id: "2",
                name: "May Doe",
                address: "32 ADD Jump",
                logo: "https://via.placeholder.com/150"
            }
        ])
        setLoading(false);
        // clientService.findAll(0, 10)
        //     .catch(() => [)
        //     .then(response => setData(response))
        //     .finally(() => setLoading(false));
    }
    useEffect(() => {
        loadClients();
    }, []);


    const columns = [
        {
            title: "Id",
            dataIndex: "id",
        },
        {
            title: "Logo",
            dataIndex: "logo",
            render: (logo: string) => <img src={logo} alt="logo" style={{ width: 50 }} />
        },
        {
            title: "Name",
            dataIndex: "name",
        }, {
            title: "Address",
            dataIndex: "address",
        }]

    return <div>
        <Card title="Cliet list" extra={<Button type="primary" >
            Add new client
        </Button>}></Card>


        <Card>
            <Table
                loading={loading}
                dataSource={data}
                columns={columns} />

        </Card>

    </div>
}


export default List;