var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserController } from "./controllers/user.controller.js";
const URL_USERS = "http://localhost:3000/User";
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const crudUsers = new UserController(URL_USERS);
    const respuesta = yield crudUsers.login(email, password);
    const token = respuesta.data.token;
    if (token) {
        console.log(`login exitoso ${token}`);
        localStorage.setItem("authToken", token);
        window.location.href = "books.html";
    }
    else {
        console.log("login fallo");
    }
    form.reset();
}));
