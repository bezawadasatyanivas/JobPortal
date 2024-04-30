import {Route,createBrowserRouter,
  createRoutesFromElements,RouterProvider}from 'react-router-dom'

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




const App=()=> {
 // adding new Job
  const addJob=async(newJob)=>{

   const res=await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(newJob)
   });
 return ;

};

//Delete job
const deleteJob=async(id)=>{
  const res=await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
   
   });
 return ;

}

//update job
const updateJob=async(job)=>{

  const res=await fetch(`/api/jobs/${job.id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(job),
   });
 return ;

}

const router= createBrowserRouter(
 createRoutesFromElements(
   <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/add-job' element={<AddJobPage  addJobSubmit={addJob}/>} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/> 
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>  
 
      <Route path='*' element={<NotFoundPage />}/>
   </Route>
 )
);

  return <RouterProvider router={router} />
  

  // <Navbar/>
  // <Hero title='Test Title' subtitle='its a subtitle'/>
  // <HomeCards/>
  // <JobListings />
  // <ViewAllJobs />

    {/* Navbar */}
    {/* <!-- Hero --> */}
    {/* <!-- Developers and Employers --> */} 
    {/* <!-- Browse Jobs --> */}
    {/* View all jobs */}
    
    
  
  
  
};

export default App;
