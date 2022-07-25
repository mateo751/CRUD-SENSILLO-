import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



const data = [
  { id: 1, titulo:"programcion web",cantidad:4, anoDePublicacion:2022, paginas:800, formato:"DPF", procedencia:"matriz", editorial:"Santillana", descripcion:"libro programacion"}
];



class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      cantidad: "",
      añoDePublicacion: "",
      paginas:"",
      formato:"",
      procedencia:"",
      editorial:"",
      descripcion:""
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
        <div>          
        <h1>Registro de libros</h1>   
        </div>  
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>cantidad</th>
                <th>paginas</th>
                <th>AñoDePublicacion</th>
                <th>formato</th>
                <th>procedencia</th>
                <th>editorial</th>
                <th>descripcion</th> 
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.titulo}</td>
                  <td>{dato.cantidad}</td>
                  <td>{dato.paginas}</td>
                  <td>{dato.anoDePublicacion}</td>
                  <td>{dato.formato}</td>
                  <td>{dato.procedencia}</td>
                  <td>{dato.editorial}</td>
                  <td>{dato.descripcion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                titulo: 
              </label>
              <input
                className="form-control"
                name="titulo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.titulo}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                paginas: 
              </label>
              <input
                className="form-control"
                name="paginas"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.paginas}
              />
            </FormGroup>

            <FormGroup>
              <label>
                AñoDePublicacion: 
              </label>
              <input
                className="form-control"
                name="anoDePublicacion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.anoDePublicacion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Formato: 
              </label>
              <input
                className="form-control"
                name="formato"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.formato}
              />
            </FormGroup>

            <FormGroup>
              <label>
                procedencia: 
              </label>
              <input
                className="form-control"
                name="procedencia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.procedencia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                editorial: 
              </label>
              <input
                className="form-control"
                name="editorial"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.editorial}
              />
            </FormGroup>

            <FormGroup>
              <label>
                descripcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcion}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar libro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                titulo: 
              </label>
              <input
                className="form-control"
                name="titulo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.titulo}
              />
            </FormGroup>
            
             <FormGroup>
              <label>
                cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                paginas: 
              </label>
              <input
                className="form-control"
                name="paginas"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.paginas}
              />
            </FormGroup>

            <FormGroup>
              <label>
                AñoDePublicacion: 
              </label>
              <input
                className="form-control"
                name="anoDePublicacion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.anoDePublicacion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Formato: 
              </label>
              <input
                className="form-control"
                name="formato"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.formato}
              />
            </FormGroup>

            <FormGroup>
              <label>
                procedencia: 
              </label>
              <input
                className="form-control"
                name="procedencia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.procedencia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                editorial: 
              </label>
              <input
                className="form-control"
                name="editorial"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.editorial}
              />
            </FormGroup>

            <FormGroup>
              <label>
                descripcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcion}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        
      </>

      
    );
  }
}
export default App;
