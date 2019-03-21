export const createProject = (project) => {
   return (dispatch, getState) => {
       //we instore to thunk to halt the dispatch //thunk is a middleware
       //returns a function 
        //make async call to datatabase // performe async request
        //resume the dispatch
        dispatch({type:'CREATE_PROJECT', project});




   }




}