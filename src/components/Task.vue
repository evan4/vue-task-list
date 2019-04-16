<template>
  <div class="container">
    <h1 class="mb-2 mr-md-auto font-weight-normal text-center">Edit Task</h1>
    <form @submit.prevent="createTask" v-if="formData">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="formData.name"
          class="form-control"
          id="name"
        />
      </div>
      <div class="form-group">
        <label for="tags">Tags</label>
        <input
          type="text"
          class="form-control"
          id="tags"
          v-model="formData.tags"
          aria-describedby="tagsHelp"
        />
        <small id="tagsHelp" class="form-text text-muted"
          >separate every tag by comma</small
        >
      </div>
      <div class="form-group">
        <label for="desc">Task body</label>
        <textarea
          class="form-control desc"
          id="desc"
          v-model="formData.desc"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="date">Execution date</label>
        <input
          type="date"
          class="form-control"
          v-model="formData.date"
          id="date"
        />
      </div>
      <div class="form-group">
        <label for="status">Activity of task</label>
        <select
          name="status"
          id="status"
          v-model="formData.status"
          class="form-control"
        >
          <option value="active">В работе</option>
          <option value="inactive">Завершено</option>
        </select>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Update" />
      </div>
    </form>
  </div>
</template>

<script>
import router from "../router";
import Form from "../helpers/form.js";

export default {
  data() {
    return {
      errors: [],
      formData: {
        id: null,
        name: "",
        desc: "",
        tags: "",
        date: "",
        status: "В работе"
      }
    };
  },
  created() {
    const id = Number(this.$route.params.id),
      tasks = JSON.parse(localStorage.getItem("tasks"));

    this.formData = tasks.find(todo => todo.id === id);
  },
  methods: {
    createTask() {
      this.errors = [];

      this.errors = Form.checkForm(this.formData);

      if (!this.errors.length) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        const itemId = tasks.findIndex(todo => todo.id === this.formData.id);
        tasks[itemId] = this.formData;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.clearForm();
        router.push("/");
      }
    },
    clearForm() {
      this.errors = [];
      this.formData = {
        id: null,
        name: "",
        desc: "",
        tags: "",
        date: ""
      };
    }
  },
  destroyed() {
    this.clearForm();
  }
};
</script>

<style></style>
