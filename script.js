
//making a vue component 
Vue.component("displayinfo",{
    template:`<h3>Persons Name:{{thename}}</h3>`,
    props:["thename"]
})



//making a new instance 
const examApp = new Vue({
    el:"#examApp",
    data:{
       famousPeople:"",


    },
    //on load method to load dom with component and its elements
    mounted(){
   axios.get('https://api.themoviedb.org/3/person/popular?api_key=5134b3f56c2cae575bb0ad435f0be5ee&language=en-US&page=1')
   .then((response)=>{
       console.log(response)
       this.famousPeople = response.data.results
       console.log(this.famousPeople)
   })
   .catch((err)=>{
       console.log(err)
   })
   
    }

})