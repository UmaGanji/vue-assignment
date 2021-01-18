<template>
  <div class="wizard">
    <!-- Header of steps -->
    <header class="wizard__header--default">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="{ active: step.is_current }"
        class="item"
      >
        <div v-html="step.html" />
        <h5>{{ step.title }}</h5>
      </div>
    </header>
    <!-- Body of steps -->
    <main>
      <div class="wizard__body">
        <template v-for="slotName in Object.keys($scopedSlots)">
          <slot :name="slotName" v-if="current_slot == slotName"></slot>
          <!-- <div class="step-divider"  :class="{'ml-5': ste2_slot}"></div> -->
        </template>
        {{ current_slot == "step_1" }}
        <!-- <slot name="step1" v-show="current_slot == 'step_1'"></slot>
        <div class="step-divider"></div>
        <slot name="step1" v-show="current_slot == 'step_2'"></slot>
        <div class="step-divider"></div>
        <slot name="step1" v-show="current_slot == 'step_3'"></slot>
        <div class="step-divider"></div>
        <slot name="step1" v-show="current_slot == 'step_4'"></slot> -->
      </div>

      <div class="wizard__footer mt-2">
        <!-- <b-button
          :disabled="current_step === 0"
          :class="previous_btn_class"
          @click="on_back_click"
          >{{ previous_btn_label }}</b-button
        > -->

        <b-button
          v-show="current_step !== wizard_steps.length - 1"
          variant="primary"
          @click="on_next_click"
          >{{ next_btn_label }}</b-button
        >

        <b-button
          v-show="current_step === wizard_steps.length - 1"
          class="primary"
          @click="on_finish_click"
          >Save</b-button>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "wizard",
  props: {
    /**
     * @param steps to show
     */
    steps: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      current_step: 0,
      next_btn_class: {},
      previous_btn_label: "Previous",
      next_btn_label: "Next",
      wizard_steps: [],
      current_slot: "step_1",
      ste2_slot: true,
    };
  },
  created() {
    this.wizard_steps = this.steps.map((el, index) => {
      const is_current = index === this.current_step;
      if (!el.id) {
        el.id = new Date().getTime() * Math.random();
      }

      el.is_current = is_current;

      if (is_current) {
        this.current_slot = el.block;
      }
      return el;
    });
    console.log("Formed wizard steps ... ", this.wizard_steps);
  },
  methods: {
    // Handle next button click feature
    on_next_click: function () {
      console.log("In on_next_click method...");
      // this.$validator.validateAll().then((valid) => {
      //   console.log("valid ... ",valid);
      // })
      this.$children[0].validate().then((validationData) => {
        if (validationData.valid) {
          this.current_step = this.current_step + 1;
          this.changeCurrentStep();
        } else{
          console.log("validation required")
        }
      });
    },

    on_finish_click: function () {
      console.log("In on_finish_click method..");
      // this.current_step = this.current_step - 1;
      // this.changeCurrentStep();
    },
    changeCurrentStep() {
      console.log(
        "In changeCurrentStep methos .. wizard_steps .. ",
        this.wizard_steps
      );
      this.wizard_steps = this.wizard_steps.map((el, index) => {
        const is_current = index === this.current_step;
        el.is_current = is_current;
        if (is_current) {
          this.current_slot = el.block;
        }
        return el;
      });
    },
  },
};
</script>
<style scoped>
/* .wizard.is-vertical {
  display: flex;
} */
.wizard__header--default {
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-around;
}
.wizard__body {
  display: flex;
  justify-content: space-around;
}
.item {
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item.active {
  opacity: 1;
}

.step-divider {
  border-right: 1px solid #333;
}

.h-divider {
  border-right: 1px solid #333;
}
</style>