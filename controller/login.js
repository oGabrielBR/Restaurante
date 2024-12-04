const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
  }
  
  function validateEmail(email) {
    return /\S+@\S+.\S+/.test(email);
  }
  
  function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
  }
  
  function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
  }
  
  function login() {
    const email = form.email().value;
    const password = form.password().value;
  
    if (email && password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          window.location.href = "../view/restaurante.html";
        })
        .catch(error => {
          alert(getErrorMessage(error));
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios (E-mail e Senha).");
    }
  }
  
  function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
  }
  
  function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
  }
  
  function toggleButtonsDisable() {
    const email = form.email().value;
    const password = form.password().value;
    form.loginButton().disabled = !(email && password);
  }
  
  function getErrorMessage(error) {
    switch (error.code) {
      case "auth/invalid-email":
        return "E-mail inválido.";
      case "auth/user-not-found":
        return "Usuário não encontrado.";
      case "auth/wrong-password":
        return "Senha incorreta.";
      default:
        return "Erro ao realizar login.";
    }
  }