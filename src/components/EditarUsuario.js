import React from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

function EditarUsuario(){
    return(
        <>
        <Container>
        <Header />
        <hr></hr>
        </Container>
        <Container>
        <div className="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Editar Usuario</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="nombreUsuario" type="text" placeholder="Ingrese el nombre del usuario" />
                                                                    <label for="inputCodigo">Nombres</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" />
                                                                    <label for="inputNombre">Apellidos</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                        <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                <select class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario">
                                                                    <option value="1">C.C.</option>
                                                                    <option value="2">C.E.</option>
                                                                    <option value="3">NIT.</option>
                                                                </select>
                                                                <label for="tipoDocumento">Tipo de Documento</label>
                                                                </div>
                                                            </div> 
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario" />
                                                                    <label for="inputFirstName">Identificación</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="correo" type="email" placeholder="Ingrese el correo del usuario" />
                                                                    <label for="inputTipoUnidad">Correo</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="telefono" type="text" placeholder="Ingrese el telefono del usuario" />
                                                                    <label for="inputPrecio">Telefono</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label for="inputSexo">Sexo</label>
                                                                <div class="form-floating mb-3">
                                                                    <input type="radio" id="hombre" name="sexo" value="hombre"/> Hombre <br/> 
                                                                    <input type="radio" id="mujer" name="sexo" value="mujer"/> Mujer 
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="inputRol">Rol</label>
                                                                <div class="form-floating mb-3">
                                                                    <input type="radio" id="admin" name="rol" value="administrador"/> Administrador <br/> 
                                                                    <input type="radio" id="usuarioC" name="rol" value="usuario de configuracion"/> Usuario de Configuración  <br/> 
                                                                    <input type="radio" id="usuarioG" name="rol" value="usuario de gestion"/> Usuario de Gestión
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 mb-0">
                                                            <div class="d-grid"><a type="submit" class="btn btn-primary btn-block" href="/editarUsuario">Editar Usuario</a></div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    
        </Container>
        <Container>
            <Footer />
            </Container>
        </>
    )
}

export {EditarUsuario};