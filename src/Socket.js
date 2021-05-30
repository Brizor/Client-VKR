import io from "socket.io-client";
let socket = io.connect('http://192.168.31.89:5000');
export default socket;