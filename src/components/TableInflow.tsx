'use client'
import { useEffect, useState } from 'react';
import Card from "./Card";
import Table from "./Table";
import { getTransactions } from '@/services/transactions'



const TableInflow = () => {

    const [rows, setRows] = useState([]);

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    const columns = [
        {
            name: 'ID',
            value: 'id'
        },
        {
            name: 'Category',
            value: 'category',
        },
        {
            name: 'Amount',
            value: 'amount',
            format: (value: any) => {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                
                return formatter.format(value);
            }
        },
        {
            name: 'Status',
            value: 'status',
            cell: (row: any) => {

                if(row.status === 'PENDING'){
                    return (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {row.status}
                        </span>
                    )
                }else if(row.status === 'PROCESSED'){
                    return (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {row.status}
                        </span>
                    )
                }

                return row.status
            }
        },
        {
            name: 'Balance',
            value: 'balance',
            format: (value: any) => {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                
                return formatter.format(value);
            }
        },
        {
            name: 'Currency',
            value: 'currency'
        },
        {
            name: 'Reference',
            value: 'reference'
        },
        {
            name: 'Date',
            value: 'value_date'
        },
    ];

    const transactions = async(page: number) => {
        setPage(page);
        setLoading(true);
        getTransactions({link: 'e9b7f135-52eb-4b6d-8de1-91ffd2dd9a65', type: 'INFLOW', page: page}).then((transactions) => {
            setRows(transactions.results)
            setLoading(false);
        })
    }



    const nextPage = (page: number) => {
        transactions(page);
    }

    const previusPage = (page: number) => {
        transactions(page);
    }


    useEffect(() => {
        transactions(page);
    }, [])

   
    return (
        <Card >
            <h3 className="text-xl font-bold mb-2 text-green-500 ">
                Income <span className='mdi mdi-arrow-down'></span>
            </h3>
            <div className="w-full">
                <Table columns={columns} rows={rows} previusPage={previusPage} nextPage={nextPage} page={page} loading={loading} />
            </div>
        </Card>
    );
}

export default TableInflow;