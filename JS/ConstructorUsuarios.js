class Usuario {
    constructor(Nombreusuario, passw, Nombre, sector, correo, telefono, ubicacion) {
        this.Nombreusuario = Nombreusuario;
        this.passw = passw;
        this.Nombre = Nombre;
        this.sector = sector;
        this.correo = correo;
        this.telefono = telefono;
        this.ubicacion = ubicacion;
    }

    // Getters
    get nombreUsuario() {
        return this.Nombreusuario;
    }

    get password() {
        return this.passw;
    }

    get nombre() {
        return this.Nombre;
    }

    get sector() {
        return this.sector;
    }

    get correo() {
        return this.correo;
    }

    get telefono() {
        return this.telefono;
    }

    get ubicacion() {
        return this.ubicacion;
    }

    // Setters
    set nombreUsuario(Nombreusuario) {
        this.Nombreusuario = Nombreusuario;
    }

    set password(passw) {
        this.passw = passw;
    }

    set nombre(Nombre) {
        this.Nombre = Nombre;
    }

    set sector(sector) {
        this.sector = sector;
    }

    set correo(correo) {
        this.correo = correo;
    }

    set telefono(telefono) {
        this.telefono = telefono;
    }

    set ubicacion(ubicacion) {
        this.ubicacion = ubicacion;
    }
}