"use client"
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { useState } from "react";
import moment from "moment";

const Page = () => {

    const [selectFilter, setSelectFilter] = useState('')

    const [fromDate, setFromDate] = useState(moment().subtract(1, 'months').format('YYYY-MM-DD'))

    const changeFilter = (e: any) => {
        setSelectFilter(e.target.value)

        let monthsSub = parseInt(e.target.value)

        let date = moment().subtract(monthsSub, 'months').format('YYYY-MM-DD')

        setFromDate(date)
    }

    return (
        <>
        <div >
            <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small select</label>
            <select value={selectFilter} onChange={changeFilter} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" selected>Current Month</option>
                <option value="2">2 Months</option>
                <option value="3">3 Months</option>
            </select>
        </div>
            <div className="p-2">
                <LineChart fromDate={fromDate} />
            </div>
            <div className="p-2">
                <BarChart fromDate={fromDate} />
            </div>
        </>
    );
}

export default Page;