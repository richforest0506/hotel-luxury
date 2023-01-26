import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="page-wrapper">
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout;