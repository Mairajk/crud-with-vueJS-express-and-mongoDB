<script>
import axios from "axios";

export default {
    name: 'Home',
    props: ['msg'],

    data() {
        // console.log('after call data' , this.data.promise);
        try {
            let res = axios.get('http://localhost:5001/api/v1/posts');
            console.log('res ==>', res);
            this.data = res;
            console.log('data ==>', this.data);
        } catch (err) {
            console.log('error ===>', err);
        }
        return {
            data: '',
        }
    },
    // methods: {
    //     getAllPosts() {
    //         try {
    //             let res = axios.get('http://localhost:/5001/posts');

    //         }
    //         catch (err) {
    //             console.log('error ===>', err);
    //         }
    //     }
    // },

    // created() {
    //     console.log(this.msg);
    //     try {
    //         this.data = axios.get('http://localhost:5001/api/v1/posts');
    //         //  = res.data;
    //         console.log('data ==>', this.data);
    //         console.log('data ==>', this.data.data);
    //     } catch (err) {
    //         console.log('error ===>', err);
    //     }
    // },
}
</script>

<template>
<div>
    <h1>{{ msg }}</h1>

    <div>
    </div>
</div>
</template>
