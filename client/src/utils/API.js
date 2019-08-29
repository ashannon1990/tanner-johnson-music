import axios from "axios";

export default {
  //authentication
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  //get messages to display
  getMessages: function(messageData) {
    return axios.get("/api/messages", messageData);
  },
  // Deletes the saved message with the given id
  deleteMessage: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves an message to the database
  saveMessage: function(messageData) {
    return axios.post("/api/messages", messageData);
  },
  getEvents: function() {
    return axios.get("/api/events");
  },
  addUpcomingEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events" + id)
  }
};