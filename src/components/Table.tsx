

interface Column {
    name: string;
    value: string;
    sortable?: boolean;
    format?: Function;
    cell?: (row: any) => JSX.Element;
}

interface propsTable {
    columns: Array<Column>;
    loading?: boolean;
    rows?: Array<any>;
    page?: number;
    previusPage?: Function;
    nextPage?: Function;
};


const Table = (props: propsTable) => {
    const { rows = []} = props;

    const previusPage = () => {
        let page = props.page;
        if(page && page > 1) {
            page = page - 1;
        }

        props.previusPage && props.previusPage(page);

    }

    const nextPage = () => {
        let page = props.page;
        if(page) {
           page = page + 1;
        }
        
        props.nextPage && props.nextPage(page);
    }

    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
                
                {props.loading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                )}

                {!props.loading && (
                    <>
                        <thead>
                            <tr>
                                {props.columns.map((column) => (
                                    <th className="text-xs text-gray-700 uppercase bg-gray-200 dark:text-gray-400 p-2" key={`th-${column.name}`}>{column.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows && rows.map((row, index) => (
                                <tr className="bg-white dark:border-gray-700 hover:bg-gray-100 hover:cursor-pointer" key={`tr-${row.id}-${index}`} >
                                    {props.columns.map((column, columnIndex) => (
                                        <td className="p-2 font-medium text-gray-900 whitespace-nowrap text-left" key={`td-${row.id}-${index}-${columnIndex}`}>
                                            {
                                                column.cell 
                                                ? column.cell(row) : 
                                                ( 
                                                    column.format 
                                                    ? column.format(row[column.value]) 
                                                    : row[column.value]
                                                )
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </>
                )}
            </table>
            <div className="flex p-2 justify-center">
                <a onClick={previusPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
                    Previous
                </a>

                <a onClick={nextPage} className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer">
                    Next
                </a>
            </div>
        </>
       
    );
}

export default Table;