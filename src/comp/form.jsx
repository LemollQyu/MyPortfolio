import '../App.css'
import {useState, useRef, useEffect, useContext} from 'react'


const Form = () => {
	const {setAuth} = useContext(AuthContext)
	
	const userRef = useRef();
	const errRef = useRef();
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMassage, setErrMassage] = useState('')
	const [succes, setSucces] = useState(false)
	
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		console.log("berhasil")
		
		
		
	}	
	
	 
	
	
		
  return (
    <>
		
	
		<form onSubmit={handleSubmit} className="flex flex-col lg:flex-row">
			<label htmlFor="email">Email:</label>
			<input 
				className="py-2 px-4 border"
				type="text"
				id="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
			<label htmlFor="password">Password:</label>
			<input
				className="py-2 px-4 border"
				id="password"
				type="text"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			/>
			
			<button className="rounded-md mt-3 lg:mt-0 border">Login</button>
		
		</form>
		
	
	
     
    </>
  )
}

export default Form
