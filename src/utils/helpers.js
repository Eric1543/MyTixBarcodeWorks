import axios from 'axios';


const helper = {
  // Returns a promise object we can .then() off inside our Parent component
  getEvents: function() {
    return axios.get("/api/Events");
  },
  getOneEvent: function(id){
  	return axios.get("/events/" + id)
  }
}
  export default helper;