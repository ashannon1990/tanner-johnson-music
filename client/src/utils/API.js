import axios from "axios";

export default {
  // Gets all saved messages
  getMessages: function() {
    return axios.get("/api/messages");
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