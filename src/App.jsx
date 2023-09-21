import './App.css';
import ResuableForm from './Components/ResueableForm/ResuableForm';
// import HookForms from './Components/HookForms/HookForms';
// import RefForm from './Components/RefForm/RefForm';
// import SimpleForm from './Components/SimpleForm/SimpleForm';
// import StateFulForm from './Components/StateFulForm/StateFulForm';


function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  };

  const handleUpdateProfile = data => {
    console.log('update profile ', data);

  };

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForms></HookForms> */}
      <ResuableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}></ResuableForm>
      <ResuableForm formTitle={'Update Profile'} handleSubmit={handleUpdateProfile} submitBtnText='Update'></ResuableForm>





    </>
  );
}

export default App;
