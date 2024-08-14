export const checkValidation = (email, password) => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  
    if(!validEmail) return "Email is not valid"
    if(!validPassword) return "Password is not valid"

    return null;
  };
  