
import TableInflow from '@/components/TableInflow';
import TableOutflow from '@/components/TableOutflow';


export default function Home() {
  return (
    <div className='grid grid-12'>
      <div className='col-span-12'>
        <TableInflow />
      </div>
      <div className='col-span-12 mt-5'>
        <TableOutflow />
      </div>
      
    </div>
  )
}
