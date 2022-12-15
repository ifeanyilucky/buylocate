import { EmptyContainer } from '../../svgIcons';

export default function EmptyOrders() {
  return (
    <>
      <div className='empty-container'>
        <div className='empty'>
          <EmptyContainer />
          <p className='text-muted mt-5'>You have not made any order yet!</p>
        </div>
      </div>
    </>
  );
}
