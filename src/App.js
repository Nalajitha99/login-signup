import './App.css';
import SignupForm from './Components/LoginSignup/Signup';



function App() {
  return (
    
      <div>
        {/* <BrowserRouter>
        <Routes>
          <Route exact path="/Signup" element={<SignupForm/>}>
            <SignupForm />
          </Route>
          <Route exact path="/login" element={<LoginForm />}>
            <LoginForm />
          </Route>
          </Routes>
        </BrowserRouter> */}
        <SignupForm />
      </div>
    
  );
}

export default App;
