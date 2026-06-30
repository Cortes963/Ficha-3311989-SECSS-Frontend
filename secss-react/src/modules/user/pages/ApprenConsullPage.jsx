import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/modules/auth/context/AuthContext';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';

export const ApprenConsullPage = () => {
  return (
    <main className="container my-5">
        <div className="row mb-4">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Consulta de Aprendices</li>
                    </ol>
                </nav>
                <h2 className="text-secss-title"><i className="bi bi-person-search"></i> Módulo de Consulta de Aprendices</h2>
                <p className="text-muted">Busca y verifica el estado completo de un aprendiz, sus datos de cuenta, fichas y documentos cargados.</p>
            </div>
        </div>

        <div className="card shadow-sm border-0 mb-4 search-box-container">
            <div className="card-body p-4">
                <form className="row g-3 align-items-end">
                    <div className="col-md-4">
                        <label for="tipo_documento" className="form-label font-weight-bold">Tipo de Documento</label>
                        <select id="tipo_documento" className="form-select">
                            <option selected disabled>Seleccione...</option>
                            <option value="1">CC - Cédula de Ciudadanía</option>
                            <option value="2">TI - Tarjeta de Identidad</option>
                            <option value="3">CE - Cédula de Extranjería</option>
                        </select>
                    </div>
                    <div className="col-md-5">
                        <label for="numero_documento" className="form-label font-weight-bold">Número de Documento</label>
                        <input type="number" className="form-control" id="numero_documento" placeholder="Ej. 1012345678"/>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-secss-search w-100"><i className="bi bi-search"></i> Buscar Registro</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="row g-4">
            <div className="col-lg-4">
                <div className="card shadow-sm border-0 h-100 text-center card-profile-apprentice">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                        <div className="avatar-wrapper mb-3 position-relative">

                            <img src="https://via.placeholder.com/150" alt="Foto Aprendiz" className="img-fluid rounded-circle img-thumbnail apprentice-photo"/>
                            <span className="position-absolute bottom-0 end-0 badge bg-success rounded-pill px-2 py-1 small">Activo</span>
                        </div>
                        <h4 className="mb-1 font-weight-bold text-dark">Carlos Mario</h4>
                        <h5 className="text-muted mb-3">Restrepo Gómez</h5>

                        <div className="w-100 border-top pt-3 mt-2 text-start">
                            <p className="mb-2"><i className="bi bi-hash text-success"></i> <strong>Ficha:</strong> <span className="badge bg-secondary">2617543</span></p>
                            <p className="mb-2"><i className="bi bi-geo-alt-fill text-danger"></i> <strong>Dirección:</strong> Calle 26 #13-45</p>
                            <p className="mb-0"><i className="bi bi-phone-vibrate text-primary"></i> <strong>Celular:</strong> 3124567890</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="card shadow-sm border-0 h-100">
                    <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                        <h3 className="h5 m-0 text-dark font-weight-bold"><i className="bi bi-file-earmark-person"></i> Datos del Sistema (Entidades Relacionadas)</h3>
                        <span className="text-muted small">ID Usuario: #4501</span>
                    </div>
                    <div className="card-body px-4 pb-4">
                        
                        <h4 className="h6 text-success border-bottom pb-2 mb-3 mt-2 font-weight-bold">Información de Cuenta y Logins</h4>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label className="text-muted d-block small">Correo Electrónico (uc_correo)</label>
                                <span className="text-dark font-weight-medium">cmrestrepo@misena.edu.co</span>
                            </div>
                            <div className="col-md-6">
                                <label className="text-muted d-block small">Usuario de Login (uc_login)</label>
                                <span className="text-dark font-weight-medium">carlos.restrepo99</span>
                            </div>
                        </div>

                        <h4 className="h6 text-success border-bottom pb-2 mb-3 font-weight-bold">Documentación Digital (URLs Guardadas)</h4>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="p-3 border rounded d-flex align-items-center justify-content-between bg-light">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-file-earmark-pdf text-danger h4 m-0"></i>
                                        <div>
                                            <p className="m-0 small font-weight-bold">Identificación personal</p>
                                            <small className="text-muted file-url">imagen_url_identificacion</small>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-outline-secondary btn-sm" title="Ver archivo"><i className="bi bi-eye"></i></a>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="p-3 border rounded d-flex align-items-center justify-content-between bg-light">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-vcard text-primary h4 m-0"></i>
                                        <div>
                                            <p className="m-0 small font-weight-bold">Carné SENA</p>
                                            <small className="text-muted file-url">imagen_url_carne_sena</small>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-outline-secondary btn-sm" title="Ver archivo"><i className="bi bi-eye"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};
