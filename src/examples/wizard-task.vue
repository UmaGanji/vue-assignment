<template>
  <div>
    <wizard :steps="steps_arr">
      <template #step_1>
        <b-card title="step 1">
          <p>
            Step 1 content
            <!-- <appup-form ref="appup_form"></appup-form> -->
          </p>
          <ValidationProvider
            vid="name"
            name="username"
            rules="required"
            v-slot="{ errors }"
          >
            <div>
              <input type="text" class="form-control" v-model="form.username" />
              <small class="text-danger">{{ errors[0] }}</small>
            </div>
          </ValidationProvider>
        </b-card>
      </template>

      <template #step_2>
        <b-card title="step 2">
          <p>Step2 Content</p>

          <ValidationProvider
            vid="email"
            name="email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <label for="email">Email: </label>
            <b-form-input
              name="email"
              v-model="form.email"
              placeholder="Enter email"
            ></b-form-input>
            <small style="text-color: red">{{ errors[0] }}</small>
          </ValidationProvider>
        </b-card>
      </template>

      <template #step_3>
        <b-card title="step 3">
          <p>step 3 content</p>
          <ValidationProvider
            vid="name"
            name="technology"
            rules="required"
            v-slot="{ errors }"
          >
            <div>
              <label for="technology">Select Technology: </label>
              <b-form-select
                name="technology"
                v-model="form.technology"
                :options="dropdown_options"
              ></b-form-select>
              <small class="text-danger">{{ errors[0] }}</small>
            </div>
          </ValidationProvider>
        </b-card>
      </template>

      <template #step_4>
        <b-card title="step 4">
          <p>step 4 content</p>
          <label for="comments"></label>
          <b-form-input
            type="textarea"
            name="comments"
            placeholder="Enter Comments"
            v-model="form.comments"
          ></b-form-input>
          <small>{{errors[0]}}</small>
        </b-card>
      </template>
    </wizard>
  </div>
</template>
<script>
import wizard from "../components/assignment";
export default {
  name: "wizard-task",
  components: {
    wizard,
  },
  data() {
    return {
      form: {
        username: "",
        email: "",
        technology: "",
        comments: "",
      },
      dropdown_options: [
        {
          value: "Vue",
          text: "vue",
        },
        {
          value: "Angular",
          text: "angular",
        },
      ],
      steps_arr: [
        {
          html: '<div class="header-circle">1</div>',
          title: "step 1",
          description: "step 1 description",
          block: "step_1",
          active: true,
          completed: false,
          ref: "appup_form",
        },

        {
          html: '<div class="header-circle">2</div>',
          title: "step 2",
          description: "step 2 description",
          block: "step_2",
          active: true,
          completed: false,
          validator: () => this.input.length > 0,
        },

        {
          html: '<div class="header-circle">3</div>',
          title: "step 3",
          description: "step 3 description",
          block: "step_3",
          active: true,
          completed: false,
        },
        {
          html: '<div class="header-circle">4</div>',
          title: "step 4",
          description: "step 4 description",
          block: "step_4",
          active: true,
          completed: false,
        },
      ],
    };
  },
  mounted() {
    console.log("In wizard-task mounted ... ", this.stepsArr);
  },
};
</script>
<style>
.header-circle {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkblue;
  color: white;
}
</style>