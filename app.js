const { createApp } = Vue;
//Валидация логина и пароля

const task1 = createApp({
  data() {
    return {
      userLogin: null,
      userPassword: null,
      loginStatus: null,
      img: null,
      auth: false,
    };
  },
  methods: {
    handleSubmit() {
      let image;
      if (this.userLogin === "ivan" && this.userPassword === "111") {
        return (image = "./task1/Screenshot_1.png");
      } else {
        return (image = "");
      }
    },
  },
  computed: {
    checkUser() {
      if (this.userLogin === "ivan" && this.userPassword === "111") {
        return "login__error-color";
      } else if (this.userLogin == null && this.userPassword == null) {
        return "login__usual-color";
      } else {
        return "login__else-color";
      }
    },
  },
});

task1.mount("#task1");
