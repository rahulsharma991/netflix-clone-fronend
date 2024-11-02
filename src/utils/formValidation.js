export function formValidation(type,email, password,name = '') {
    if(type === 'login') {
        if(!email) return 'Email is required';
        if(!password) return 'Password is required';
    }
    if(type ==='signup') {
        if(!name.length) return 'Name is required';
        if(!email) return 'Email is required';
        if(!password) return 'Password is required';
    }
  
    return null;
}