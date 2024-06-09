import '../App.css'
import LayoutPapper from "../layout/layout-papper.jsx"

const Papper = () => {
  return (
    <>
	<LayoutPapper>
	<div className="w-full border flex h-[500px] justify-center items-center flex-col gap-3">
		<h1>Hello Papper</h1>
		<h1 className="font-bold font-italic"> On Process</h1>
	</div>
	</LayoutPapper>
     
    </>
  )
}

export default Papper
