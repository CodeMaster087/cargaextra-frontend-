// services/CargasService.js
/**
 * Servicio para consumir endpoints del backend relacionados con 'cargas'.
 * - getAll: obtiene todas las cargas disponibles.
 */
import axios from 'axios';

export class CargasService {
  // URL base del backend
  baseUrl = "http://localhost:8080/cargas";

  // Obtener todas las cargas
  getAll() {
    return axios.get(this.baseUrl + "/mostrar")
      .then(res => res.data)  // Devuelve solo los datos
      .catch(err => {
        console.error("Error al obtener cargas:", err);
        return []; // Retorna array vacío en caso de error
      });
  }
}
