import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/modules/auth/context/AuthContext';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';

// src/modules/input_output/pages/LogbookPage.jsx

export const LogbookPage = () => {
  return (
    <main className="container my-5">
        
        <div className="row mb-4">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Consulta de Cupos</li>
                    </ol>
                </nav>
                <h2 className="fw-bold text-dark"><i className="bi bi-calendar2-check-fill text-success"></i> Monitoreo de Cupos en Tiempo Real</h2>
                <p className="text-muted">Estado detallado de disponibilidad y ocupación del parqueadero para Motos y Bicicletas en el CEET.</p>
            </div>
        </div>

        <div className="row g-4 mb-5">

            <div className="col-md-6">
                <div className="card cupo-card p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="card-icon-avatar bg-moto-light">
                                <i className="bi bi-bicycle"></i>
                            </div>
                            <div>
                                <h4 className="m-0 fw-bold">Cupo de Motocicletas</h4>
                                <small className="text-muted">Motos autorizadas (Aprendices/Instructores)</small>
                            </div>
                        </div>
                        <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">75 Cupos Asignados</span>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex justify-content-between small text-muted mb-1">
                            <span>Ocupación: </span>
                            <span>45 Motos adentro</span>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '37.5%' }} aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

   
            <div className="col-md-6">
                <div className="card cupo-card p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center gap-3">
                            <div className="card-icon-avatar bg-bici-light">
                                <i className="bi bi-universal-access-circle"></i>
                            </div>
                            <div>
                                <h4 className="m-0 fw-bold">Cupo de Bicicletas</h4>
                                <small className="text-muted">Bastidores y celdas estructurales</small>
                            </div>
                        </div>
                        <span className="badge bg-success rounded-pill px-3 py-2 fs-6">70 Cupos Asignados</span>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex justify-content-between small text-muted mb-1">
                            <span>Ocupación: </span>
                            <span>50 Bicicletas adentro</span>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                            <div className="progress-bar progress-bar-sena progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '62.5%' }} aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="row">
            <div className="col-12">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
                        <h5 className="m-0 fw-bold text-dark"><i className="bi bi-list-stars text-primary"></i> Detalle de Vehículos en Parqueadero</h5>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-secondary"><i className="bi bi-filter"></i> Filtrar por Tipo</button>
                            <button className="btn btn-sm btn-primary"><i className="bi bi-arrow-clockwise"></i> Actualizar</button>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-4">Propietario / Aprendiz</th>
                                        <th>Tipo Vehículo</th>
                                        <th>Datos Técnicos (Placa/Marco)</th>
                                        <th>Características</th>
                                        <th>Registro Fotográfico</th>
                                        <th className="pe-4">Estado Ingreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="https://via.placeholder.com/150" className="rounded-circle" width="40" height="40" alt="Usuario"/>
                                                <div>
                                                    <span className="fw-semibold d-block">Carlos Mario Restrepo</span>
                                                    <small className="text-muted">Ficha: 2617482</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-primary-subtle text-primary border border-primary-subtle">Moto</span></td>
                                        <td>
                                            <span className="fw-bold text-uppercase d-block">ABC-123</span>
                                            <small className="text-muted">Cilindraje: 150cc | Mod: 2023</small>
                                        </td>
                                        <td>
                                            <span className="d-block text-muted small"><strong>Marca:</strong> Yamaha</span>
                                            <span className="d-block text-muted small"><strong>Color:</strong> Negro Mate</span>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <i className="bi bi-file-earmark-image text-primary fs-5" title="SOAT" style={{ cursor: "pointer" }}></i>
                                                <i className="bi bi-card-image text-success fs-5" title="Tarjeta de Propiedad" style={{ cursor: "pointer" }}></i>
                                                <i className="bi bi-front text-info fs-5" title="Foto Vehículo" style={{ cursor: "pointer" }}></i>
                                            </div>
                                        </td>
                                        <td className="pe-4">
                                            <span className="status-pill status-active"><i className="bi bi-check-circle-fill"></i> Activo (Dentro)</span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src="https://via.placeholder.com/150" className="rounded-circle" width="40" height="40" alt="Usuario"/>
                                                <div>
                                                    <span className="fw-semibold d-block">Ana María Vanegas</span>
                                                    <small className="text-muted">Ficha: 2554190</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="badge bg-success-subtle text-success border border-success-subtle">Bicicleta</span></td>
                                        <td>
                                            <span className="fw-bold text-uppercase d-block">MARCO-987654</span>
                                            <small className="text-muted">Clase: Montaña (Mtb)</small>
                                        </td>
                                        <td>
                                            <span className="d-block text-muted small"><strong>Marca:</strong> GW</span>
                                            <span className="d-block text-muted small"><strong>Color:</strong> Verde/Gris</span>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <i className="bi bi-card-image text-success fs-5" title="Identificación Marco" style={{ cursor: "pointer" }}></i>
                                                <i className="bi bi-front text-info fs-5" title="Foto Bicicleta" style={{ cursor: "pointer" }}></i>
                                            </div>
                                        </td>
                                        <td className="pe-4">
                                            <span className="status-pill status-active"><i className="bi bi-check-circle-fill"></i> Activo (Dentro)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  );
};