import List from "./List";
import ListItem from "./ListItem";
const Menu = async () => {
    
    // const transactions = await getTransactions({link: 'e9b7f135-52eb-4b6d-8de1-91ffd2dd9a65'})
    
    return (
        <div className='col-span-2 border-r-2 h-screen bg-[#111827] '>
            <List>
                <ListItem item={{name: 'Account Status', link: '/', icon: 'mdi mdi-currency-usd'}} />
                <ListItem item={{name: 'Graphs', link: '/graphs', icon: 'mdi mdi-chart-line'}} />
            </List>
        </div>
    );
}

export default Menu;