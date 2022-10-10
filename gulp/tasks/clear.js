import {deleteSync} from 'del';

// Конфигурация
import path from "../config/path.js"

// Удаление директории
export default async () => {
    return deleteSync(path.root);
}