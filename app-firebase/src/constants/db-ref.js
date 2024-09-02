import { ref } from "firebase/database";
import { db } from "../firebase";

export const DB_TODOS_URL = "todos";

export const DB_TODOS_REF = ref(db, "todos");
