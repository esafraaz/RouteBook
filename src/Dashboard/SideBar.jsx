
import { Sidebar } from 'flowbite-react';
import {  HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/profile.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import MobileDashboard from './MobileDashboard';
import { FaBackward } from 'react-icons/fa6';

const SideBar = () => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <div className=' h-full w-full bg-green-950'>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block '>
        <Sidebar.Logo
          href="/"
          img={ img}
          className='w-10 h-10 rounded-full bg-green-200'
          imgAlt="Flowbite logo"
        >
          <p>
            {user?.displayName || "Demo User" }
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup className='bg-green-300 rounded-lg ease-in-out duration-400'>
            <Sidebar.Item
              href="/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              <p>
                Upload Book
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/dashboard/manage"
              icon={HiInbox}
            >
              <p>
                ManageBooks
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              <p>
                Users
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
            >
              <p>
                Products
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/"
              icon={HiTable}
              onClick = {logOut}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className='bg-green-300 rounded-lg'>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              <p>
                Upgrade to Pro
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
            >
              <p>
                Documentation
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiSupport}
            >
              <p>
                Help
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={FaBackward}
            >
              <Link to = "/">
                Back To Home
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className='md:hidden'>
          <MobileDashboard/>
      </div>
    </div>
  )
}

export default SideBar