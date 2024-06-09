import '../App.css'
import LayoutHome from "../layout/layout-home.jsx"

const News = () => {
  return (
    <>
	<LayoutHome>
	<div className="w-full border flex h-[500px] justify-center items-center flex-col gap-3">
		<h1>Hello News</h1>
		<h1 className="font-bold font-italic"> On Process</h1>
	</div>
	</LayoutHome>
	</>
  )
}

export default News
