import { FC } from "react"
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Rooms from "../components/rooms";

const RoomsPage: FC = () => {
  return (
    <>
      <Rooms/>
      <Footer/>
    </>
  )
}

export default RoomsPage;