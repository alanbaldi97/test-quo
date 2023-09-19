
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => (
    <div className="bg-white dark:bg-white rounded-lg shadow-lg p-3 w-full">
        {children}
    </div>
);

export default Card;