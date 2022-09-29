import { useState } from "react"
import LoadingPage from "./components/loading-page/loading-page"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<LoadingPage />
		</div>
	)
}

export default App
