
interface ListProps {
    children: React.ReactNode;
}

const List = ({children}: ListProps) => {
    return (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {children}
        </ul>
    );
}

export default List;
