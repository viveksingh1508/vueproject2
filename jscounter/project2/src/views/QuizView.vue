<script setup>
import { ref, computed } from "vue";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";
const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestion = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);
const questionStatus = computed(
  () => `${currentQuestion.value}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${(currentQuestion.value / quiz.questions.length) * 100}%`
);
const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (quiz.questions.length - 1 === currentQuestion.value) {
    showResults.value = true;
  }
  currentQuestion.value++;
};
</script>

<template>
  <div>
    <div>
      <QuizHeader
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
      />
    </div>
    <div v-if="!showResults">
      <Question
        :question="quiz.questions[currentQuestion]"
        @selectOption="onOptionSelected"
      />
      <button @click="currentQuestion++">Next Question</button>
    </div>
    <div v-else>
      <Result
        :quizQuestionLenght="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>