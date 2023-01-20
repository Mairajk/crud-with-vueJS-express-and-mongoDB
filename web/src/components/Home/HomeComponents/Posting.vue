<script>
import axios from "axios";

export default {
    name: "Posting",
    data() {

        return {
            formData: {
                postingImage: "",
                postingText: "",
            }
        };
    },
    methods: {
        postingHandler: function (e) {
            e.preventDefault();
            let newFormData = new FormData()
            newFormData.append("formData", this.formData);

            axios({
                    method: "post",
                    url: `http://localhost:5001/api/v1/post`,
                    data: newFormData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                })
                .then((res) => {
                    console.log("response ==>", res);
                })
                .catch((err) => {
                    console.log("error ==> ", err);
                });
        },
    },
};
</script>

<template>
<div>
    <h2>This is posting</h2>
    <form @submit="postingHandler">
        <input type="file" @change="
          (e) => {
            formData.postingImage = e.currentTarget.files[0];
            console.log('onchange');
          }
        " />

        <textarea name="" id="" cols="30" rows="10" placeholder="Write something here ....." v-model="formData.postingText"></textarea>

        <button type="submit">Post</button>
    </form>
</div>
</template>
