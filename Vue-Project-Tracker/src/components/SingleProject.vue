<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetail = !showDetail">{{ project.title }}</h3>
      <div class="icons">
        <span @click="delteProject" class="material-symbols-outlined">
          delete
        </span>
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-symbols-outlined"> edit </span>
        </router-link>
        <span @click="completeProject" class="material-symbols-outlined tick">
          done
        </span>
      </div>
    </div>
    <div v-if="showDetail" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SingleProject",
  props: ["project"],
  data() {
    return {
      showDetail: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    delteProject() {
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err.message));
    },
    completeProject() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
  components: { RouterLink },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 5px solid #e90778;
}

h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons {
  & .material-symbols-outlined {
    cursor: pointer;
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;

    &:hover {
      color: #777;
    }
  }
}
.project.complete {
  border-left: 5px solid #76dd78;
}

.project.complete .tick {
  color: #76dd78;
}
</style>
