import Validator from 'validator';

export const validasiLogin = (form) => {
    const error={};
    if(form.email) {
        if(!Validator.isEmail(form.email)) {
            error.email= "Email salah";
        }
    } else if(!form.email) {
            error.email="Email tidak boleh kosng"
    }
    if(!form.password) {
            error.password="Password tidak boleh kosong"
        }
    return error;
}

export const validasiRegister = (form) => {
    const error={}
    if(!form.fullName) {
        error.email="Nama tidak boleh kosng"
    }
    if(form.email) {
        if(!Validator.isEmail(form.email)) {
            error.email= "Email salah";
        }
    } else if(!form.email) {
            error.email="Email tidak boleh kosng"
    }
    if(form.password) {
        if(!Validator.isAlphanumeric(form.password) && !Validator.isUppercase(form.password)) {
            error.password= "Password harus mengandung huruf kecil, huruf kapital, dan angka";
        }
    } else if(!form.password) {
        error.password="Password tidak boleh kosong"
    }
return error;
}