<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title:</label>
    <input id="title" type="text" v-model="title" />
    <label for="detail">Detail:</label>
    <textarea id="detail" v-model="details"></textarea>
    <button type="submit">Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      let newproject = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newproject),
      }).then(() => this.$router.push("/"))
      .catch((err)=> console.log(err.message))
    },
  },
};
</script>

<style >
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label {
  color: #bbb;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #bbb;
  }
}
textarea {
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #bbb;
  }
}
button {
  display: block;
  margin: 20px auto 0;
  background-color: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  outline: 1px solid #76dd78;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #76dd78be;
    outline-offset: 3px;
  }
  &:active {
    background-color: #76dd78;
  }
}
</style>
