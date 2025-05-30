<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          @delete="hanldeDelete"
          @complete="handleComplete"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from "@/components/SingleProject";
import FilterNav from "@/components/FilterNav";

export default {
  name: "HomeView",
  components: {
    SingleProject,
    FilterNav,
  },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    hanldeDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleComplete(id) {
      this.projects.map((project) => {
        if (project.id === id) {
          project.complete = !project.complete;
        }
      });
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed")
        return this.projects.filter((project) => project.complete);
      else if (this.current === "ongoing")
        return this.projects.filter((project) => !project.complete);
      else return this.projects;
    },
  },
};
</script>
