// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Topmenu } from '@/components/Topmenu/Topmenu';
import { CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch } from 'react-icons/ci';
import DashboardPage from './page';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>

        <Sidebar/>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

        <Topmenu/>
        <div className="px-6 pt-6 bg-white p-2 pb-5 m-2 rounded">
          {children}
        </div>
      </div>
    </>
  );
}