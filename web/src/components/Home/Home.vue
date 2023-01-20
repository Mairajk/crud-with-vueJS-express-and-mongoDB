<script>
import axios from "axios";
import moment from 'moment';
import Posting from './HomeComponents/Posting.vue'
export default {
    name: 'Home',
    props: ['msg'],
    components: {
        Posting
    },

    data() {
        return {
            data: '',
            postDate: ''
        }
    },
    methods: {
        moment: function () {
            return moment();
        }
    },

    created() {
        axios.get('http://localhost:5001/api/v1/posts')
            .then((res) => {
                console.log('response', res);
                this.data = res.data;
                console.log('data', this.data);
            })
            .catch((err) => {
                console.log('err', err);
            })
    },
}
</script>

<template>
<div class="home">
    <h1>{{ msg }}</h1>
    <Posting />

    <div class="posts">
        <div class="eachPost" v-for="post in data.data">

            <!-- <p>{{ post.date }}</p> -->
            <p class="postDate">{{moment(post.date).format('MMM Do YYYY, h:mm:ss a')}}</p>

            <h3 class="postText">{{ post.postText }}</h3>

            <img :src='post.postImage'>

        </div>
    </div>
</div>
</template>

<style>
.home {
    background-color: gainsboro;
    padding: 50px;
    width: 100%;
}

.eachPost {
    border: none;
    border-radius: 15px;
    background-color: white;
    padding: 10px 0px;
    margin: 20px auto;
    width: 350px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.eachPost img {
    width: 99.5%;
    margin: 10px auto;
}

.eachPost .postDate {
    color: gray;
    font-size: 12px;
    margin: 10px 0px;
    padding: 0px 10px;
}

.eachPost .postText {
    padding: 5px 10px;
}
</style>
