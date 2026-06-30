// src/modules/dashboard/pages/DashboardPage.jsx
import { useAuth } from '@/modules/auth/context/AuthContext';
import { roleCardsData } from '@/components/layout/menuOptions';
import { Link } from 'react-router-dom';

// src/modules/input_output/pages/logbook.jsx

export const RegisterLogbookPage = () => {
  return (
    <div className="row g-4">
            <div className="col-xl-5 col-lg-6">
                <div className="p-4 bg-white border rounded shadow-sm card-secss h-100">
                    <h3 className="h4 text-secss mb-3 border-bottom pb-2">
                        <i className="bi bi-node-plus-fill"></i> Registrar Entrada / Salida
                    </h3>
                    
                    <form className="row g-3" onsubmit="return false;">
                        <div className="col-md-6">
                            <label className="form-label font-weight-bold">Tipo de Movimiento</label>
                            <select className="form-select" required>
                                <option value="" selected disabled>Seleccione...</option>
                                <option value="E">Entrada </option>
                                <option value="S">Salida </option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label font-weight-bold">Placa del Vehículo</label>
                            <input type="text" className="form-control text-uppercase font-monospace" placeholder="XYZ123" maxlength="6" required/>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label font-weight-bold">Tipo de Vehículo</label>
                            <select className="form-select" required>
                                <option value="Bicicleta">Bicicleta</option>
                                <option value="Moto">Moto</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label font-weight-bold">Documento Conductor</label>
                            <input type="number" className="form-control" placeholder="C.C. / CE" required/>
                        </div>

                        <div className="col-12">
                            <label className="form-label font-weight-bold">Nombres y Apellidos</label>
                            <input type="text" className="form-control" placeholder="Nombre del propietario o visitante" required/>
                        </div>

                        <div className="col-12">
                            <label className="form-label font-weight-bold">Observaciones / Destino</label>
                            <textarea className="form-control" rows="2" placeholder="Ej: Ingresa a Torre Eléctrica / Parqueadero asignado"></textarea>
                        </div>

                        <div className="col-12 pt-2">
                            <label for="modal-toggle" className="btn btn-secss w-100 py-2 font-weight-bold shadow-sm">
                                <i className="bi bi-save-fill"></i> Registrar Movimiento
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-xl-7 col-lg-6">
                <div className="p-4 bg-white border rounded shadow-sm card-secss h-100">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-3 border-bottom pb-2 gap-2">
                        <h3 className="h4 text-secss m-0">
                            <i className="bi bi-table"></i> Monitoreo de Accesos (Hoy)
                        </h3>
                        <div className="search-box-container">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Buscar Placa..."/>
                                <span className="input-group-text bg-secss-main text-white border-0"><i className="bi bi-search"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-secss table-hover align-middle shadow-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Vehículo</th>
                                    <th scope="col">Conductor</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider small">
                                <tr>
                                    <td className="font-monospace fw-bold">14:22</td>
                                    <td><span className="badge bg-dark font-monospace px-2 py-1">MHZ89C</span></td>
                                    <td>Moto</td>
                                    <td>Carlos Pérez</td>
                                    <td><span className="text-success fw-bold"><i className="bi bi-arrow-right-circle-fill"></i> 25/06/2026</span></td>
                                    <td><span className="badge bg-light text-dark border">Activo</span></td>
                                </tr>
                                <tr>
                                    <td className="font-monospace fw-bold">13:05</td>
                                    <td><span className="badge bg-dark font-monospace px-2 py-1">KLO456</span></td>
                                    <td>Carro</td>
                                    <td>Andrea Gómez</td>
                                    <td><span className="text-danger fw-bold"><i className="bi bi-arrow-left-circle-fill"></i> Salida</span></td>
                                    <td><span className="badge bg-secondary text-white">Inactivo</span></td>
                                </tr>
                                <tr>
                                    <td className="font-monospace fw-bold">10:14</td>
                                    <td><span className="badge bg-dark font-monospace px-2 py-1">SNA102</span></td>
                                    <td>Camioneta</td>
                                    <td>Instructor Meta</td>
                                    <td><span className="text-success fw-bold"><i className="bi bi-arrow-right-circle-fill"></i> 25/06/2026</span></td>
                                    <td><span className="badge bg-light text-dark border">Activo</span></td>
                                </tr>
                                <tr>
                                    <td className="font-monospace fw-bold">07:30</td>
                                    <td><span className="badge bg-dark font-monospace px-2 py-1">QWE789</span></td>
                                    <td>Carro</td>
                                    <td>Juan Caquetá</td>
                                    <td><span className="text-success fw-bold"><i className="bi bi-arrow-right-circle-fill"></i> 25/06/2026</span></td>
                                    <td><span className="badge bg-light text-dark border">Activo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="text-muted">Mostrando 4 registros recientes</small>
                        <ul className="pagination pagination-sm m-0">
                            <li className="page-item disabled"><a className="page-link" href="#">Ant</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">Sig</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
  );
};