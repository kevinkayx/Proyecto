import React, { useState, useRef } from 'react';
import { Container } from 'reactstrap';
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {Link} from 'react-router-dom';



function Registro () {
    
    let usuarios=[];
    const nomUsuario = useRef();
    const apeUsuario = useRef();
    const tipDocUsuario = useRef();
    const docUsuario = useRef();
    const emailUsuario = useRef();
    const telUsuario = useRef();
    const sexUsuario = useRef();
    const rolUsuario = useRef();
    const [success, setSuccess] = useState();
    const guardar = () => {
        const nombre = nomUsuario.current.value;
        const apellido = apeUsuario.current.value;
        const tipoDocumento = tipDocUsuario.current.value;
        const documento = docUsuario.current.value;
        const email = emailUsuario.current.value;
        const telefono = telUsuario.current.value;
        const sexo = sexUsuario.current.value;
        const rol = rolUsuario.current.value;
        const usuario = {
            "Nombre": nombre,
            "Apellido": apellido,
            "Tipo_de_Documento": tipoDocumento,
            "Documento": documento,
            "Email": email,
            "Telefono": telefono,
            "Sexo": sexo,
            "Rol": rol
        }
        usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
        nomUsuario.current.value="";
        apeUsuario.current.value="";
        tipDocUsuario.current.value="";
        docUsuario.current.value="";
        emailUsuario.current.value="";
        telUsuario.current.value="";
        sexUsuario.current.value="";
        rolUsuario.current.value="";
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <>
        {success && <div className="alert alert-success" role="alert">
            Guardado con exito
        </div>}
    <Container>
        <Header />
        <hr></hr>
        <Link to="/">Home</Link>
    </Container>
        <Container>
        <div className="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Registrar Usuario</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="nombreUsuario" type="text" placeholder="Ingrese el nombre del usuario" ref={nomUsuario}/>
                                                                    <label for="inputCodigo">Nombres</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" id="apellidoUsuario" type="text" placeholder="Ingrese el apellido del usuario" ref={apeUsuario}/>
                                                                    <label for="inputNombre">Apellidos</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                        <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                <select class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario" ref={tipDocUsuario}>
                                                                    <option value="C.C" >C.C.</option>
                                                                    <option value="C.E" >C.E.</option>
                                                                    <option value="NIT" >NIT.</option>
                                                                </select>
                                                                <label for="tipoDocumento">Tipo de Documento</label>
                                                                </div>
                                                            </div> 
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="idUsuario" type="text" placeholder="Ingrese el identificación del usuario" ref={docUsuario}/>
                                                                    <label for="inputFirstName">Identificación</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="correo" type="email" placeholder="Ingrese el correo del usuario" ref={emailUsuario} />
                                                                    <label for="inputTipoUnidad">Correo</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" id="telefono" type="text" placeholder="Ingrese el telefono del usuario" ref={telUsuario} />
                                                                    <label for="inputPrecio">Telefono</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3">
                                                                <select class="form-control" type="text" placeholder="Ingrese el sexo del usuario" ref={sexUsuario}>
                                                                    <option value="Hombre" >Hombre</option>
                                                                    <option value="Mujer" >Mujer</option>
                                                                </select>
                                                                <label for="inputSexo">Sexo</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3">
                                                                <select class="form-control" type="text" placeholder="Ingrese el sexo del usuario" ref={rolUsuario}>
                                                                    <option value="Administrador" >administrador</option>
                                                                    <option value="usuario de configuracion" >Usuario de Configuración</option>
                                                                    <option value="usuario de gestion" >Usuario de Gestión</option>
                                                                </select>
                                                                <label for="inputSexo">Rol</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="mt-4 mb-0">
                                                            <div class="d-grid"><a type="button" class="btn btn-primary btn-block" onClick={guardar}>Registrar Usuario</a></div>
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
    );
}

export {Registro};