import axios from "axios";

export default {
  // Gets all saved messages
  getMessages: function() {
    return axios.get("/api/messages");
  },
  // Deletes the saved book with the given id
  deleteMessage: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves an book to the database
  saveMessage: function(messageData) {
    return axios.post("/api/messages", messageData);
  }
};