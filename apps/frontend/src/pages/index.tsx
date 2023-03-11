import dynamic from "next/dynamic"

const Tasks = dynamic(() => import("@/componants/Tasks"))

const Home = () => {
  return (<>
    <Tasks />
  </>)
}
export default Home