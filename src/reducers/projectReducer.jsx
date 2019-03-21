const initState = {
    projects: [
          {id: 1, title:'help me find peach', content:'yeah yeah yeah'},
          {id: 1, title:'jobcy collected all his stars', content:'yeah yeah yeah'},
          {id: 1, title:'jobcy is a rock star', content:'yeah yeah yeah'}
    ]
               


}


const projectReducer = (state=initState, action) => {
    // if(action.type === 'CREATE_PROJECT') {
    //     console.log('created project', action.project)
    // }
   switch (action.type) {
    case 'CREATE_PROJECT' :
    console.log('created project', action.project)
   }

 return state;


 }

 export default projectReducer;