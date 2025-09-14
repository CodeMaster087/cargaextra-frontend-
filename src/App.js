// App.js
/**
 * Componente principal que renderiza la lista de cargas
 * - Usa PrimeReact DataTable para presentación
 * - Consumir CargasService para obtener datos
 */

import { Component } from 'react';
import './App.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { CargasService } from './services/CargasService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default class App extends Component {
  constructor() {
    super();
    this.state = { cargas: [], loading: true }; // loading para mostrar mientras carga
    this.cargasService = new CargasService();
  }

  componentDidMount() {
    this.cargasService.getAll().then(data => {
      console.log("Datos recibidos desde backend:", data);
      this.setState({ cargas: data, loading: false });
    });
  }

  render() {
    const { cargas, loading } = this.state;

    return (
      <div className="card">
        <h2>Cargas Registradas</h2>

        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <DataTable 
            value={cargas} 
            paginator 
            rows={10} 
            rowsPerPageOptions={[5,10,20]}
            responsiveLayout="scroll"
            emptyMessage="No hay cargas registradas"
          >
            <Column field="idCarga" header="ID"></Column>
            <Column field="descripcion" header="Descripción"></Column>
            <Column field="pesoKg" header="Peso (Kg)"></Column>
            <Column field="dimensiones" header="Dimensiones"></Column>
            <Column field="puntoOrigen" header="Origen"></Column>
            <Column field="puntoDestino" header="Destino"></Column>
            <Column field="valorAPagar" header="Valor a Pagar"></Column>
            <Column field="estado" header="Estado"></Column>
            <Column field="idUsuarioPublicador" header="Usuario Publicador"></Column>
          </DataTable>
        )}
      </div>
    );
  }
}
