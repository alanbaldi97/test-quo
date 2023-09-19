"use client"
import Card from "@/components/Card";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { useRef, useState, useEffect } from "react";

import { getTransactions } from '@/services/transactions'

interface BarChartProps {
    fromDate: string
}

const BarChart = ({fromDate} : BarChartProps) => {

    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const [options, setOptions] = useState({});

    const [loading, setLoading] = useState(false);

    const transactions = async(type: string) => {
        setLoading(true);

        const {results} = await getTransactions({
            link: 'e9b7f135-52eb-4b6d-8de1-91ffd2dd9a65',
            type,
            page_size: 10000000,
            "created_at__gt": fromDate
        })

        return results
    }


    const formedData = async() => {
        setLoading(true);
        const inflow = await transactions('INFLOW')
        const outflow = await transactions('OUTFLOW')

        const incomes = inflow.map( (item: any) => item.amount)

        const expenses = outflow.map( (item: any) => item.amount)

        setOptions({
            chart: {
                type: 'column',
                backgroundColor: '#F3F4F6'
            },
            title: {
                text: 'Income vs. Expenses'
            },
            xAxis: {
                categories: ['Incomes', 'Expenses'],
            },
            series: [
                {
                    name: 'Incomes',
                    data: incomes,
                    color: '#059669'
                },
                {
                    name: 'Expenses',
                    data: expenses,
                    color: '#DC2626'
                }
            ]
        });
        setLoading(false);
    }

    useEffect(() => {
        formedData()
    }, [fromDate])

    return (
        <Card >
            {loading 
            ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )
            : <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
            />}
        </Card>
    );
}

export default BarChart;