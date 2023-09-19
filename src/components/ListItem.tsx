import Link from "next/link";

interface ListItemProps {
    item: {
        name: string;
        link: string;
        icon: string;
    }
}

const ListItem = ({ item } : ListItemProps) => {
    return (
        <Link href={item.link}>
            <li className="p-3 hover:bg-gray-400 hover:cursor-pointer">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className={item.icon + " text-white"}></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                        </p>
                    </div>
                </div>
            </li>
        </Link>
        
    );
}

export default ListItem;