import logo from './logo.svg';
import './App.css';
import { Router,Route,Switch,Redirect } from "react-router-dom";
import Navbar from './component/Navbar';
import Main from './component/Main';
//import Banner from './component/Banner';
import Footer from './component/Footer';

import TeacherLogin from './component/TeacherLogin';
import StudentLogin from './component/StudentLogin'
import StudentRegister from './component/StudentRegister';
import TeacherRegister from './component/TeacherRegister';
import StudentList from './component/StudentList';
import AdminPage from './component/AdminPage';

import TeacherList from './component/TeacherList';
import StudentProfile from './component/StudentProfile';
import TeacherProfile from './component/TeacherProfile';
import StudentPage from './component/StudentPage';
import TeacherPage from './component/TeacherPage';
import AdminLogin from './component/AdminLogin';
import AdminProfile from './component/AdminProfile';
import SchoolDetails from './component/SchoolDetails';

import TeacherListForStudent from './component/TeacherListForStudent';
import StudentListForTeacher from './component/StudentListForTeacher';
//import Course from './component/Course';
import AllCourses from './component/AllCourses';
import AddCourse from './component/AddCourse';

function App() {

  return (
    <>
     <Navbar/>
     {/* <Main/> */}
     {/* <AdminPage/> */}
     {/* <StudentPage/>
     <TeacherPage/> */}
     {/* <StudentProfile/> */}
     {/* <AdminLogin/>
     <TeacherLogin/>
     <StudentLogin/> */}
    
     {/* <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/adminlogin"  element={<LoginForm/>}/>
      <Route path="/studentlogin"  element={<LoginForm/>}/>
      <Route path="/teacherlogin"  element={<LoginForm/>}/>
      <Route path="/studentregister"  element={<StudentRegister/>}/>
      <Route path="/teacherregister"  element={<TeacherRegister/>}/>
      <Route path="/adminpage"  element={<AdminPage/>}/>
      <Route path="/studentpage"  element={<StudentPage/>}/>
      <Route path="/teacherpage"  element={<TeacherPage/>}/>
      <Route path="/studentprofile"  element={<StudentProfile/>}/>
      <Route path="/teacherprofile"  element={<TeacherProfile/>}/>
      <Route path="/studentlist"  element={<StudentList/>}/>
      <Route path="/teacherlist"  element={<TeacherList/>}/> 
      

    </Routes> */}

    


          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/adminLogin" exact component={AdminLogin}></Route>
            <Route path="/adminPage" exact component={AdminPage}></Route>
            <Route path="/adminProfile" exact component={AdminProfile}></Route>

            <Route path="/studentLogin" exact component={StudentLogin}></Route>
            <Route path="/studentPage" exact component={StudentPage}></Route>
            <Route path="/studentProfile" exact component={StudentProfile}></Route>

            <Route path="/teacherLogin" exact component={TeacherLogin}></Route>
            <Route path="/teacherPage" exact component={TeacherPage}></Route>
            <Route path="/teacherProfile" exact component={TeacherProfile}></Route>

            <Route path="/studentRegister" exact component={StudentRegister}></Route>
            <Route path="/teacherRegister" exact component={TeacherRegister}></Route>

            <Route path="/schoolDetails" exact component={SchoolDetails}></Route>

            

            <Route path="/teacherList" exact component={TeacherList}></Route>
            <Route path="/studentList" exact component={StudentList}></Route>

            <Route path="/teacherListForStudent" exact component={TeacherListForStudent}></Route>
            <Route path="/studentListForTeacher" exact component={StudentListForTeacher}></Route>

            <Route path="/courseList" exact component={AllCourses}></Route>
            <Route path="/coursePage" exact component={AddCourse}></Route>
            {/* <Route path="/addcourse" exact component={}></Route> */}
            
          </Switch>



            
      
       
    <Footer/>
    </>

  );
}

export default App;
