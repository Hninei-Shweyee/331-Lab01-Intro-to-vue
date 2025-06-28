// const {reactive}= Vue
const reviewForm = {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>

      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <label for="recommend">Would you recommend this product?</label>
      <select id="recommend" v-model="form.recommend">
        <option>Yes</option>
        <option>No</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>
  `,
  setup(props,{emit}) {
    const form = reactive({
      name: '',
      review: '',
      rating: null,
      recommend:'Yes'
    })
    function onSubmit() {
      if (form.name==='' || form.review==='' || form.rating===null){
        alert('Review is incomplete. Please fill out all fields.')
        return
      }
      const productReview={
        name:form.name,
        review:form.review,
        rating:form.rating,
        recommend:form.recommend
      };
      emit('review-submitted',productReview)
      form.name=''
      form.review=''
      form.rating=null
      form.recommend='Yes' // Reset the recommend field to default
    }
    return {
      form,
      ...toRefs(form), // Expose form properties
      onSubmit
    };
  }
};
