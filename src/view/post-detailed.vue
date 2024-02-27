<template>
  <div>
    <Header />
    <main>
      <PostDetailed :post-id="postId" />
      <ShareThisPost :post-id="postId" />
      <RecommendedArticles />
      <Subscribe />
    </main>
    <Footer />
  </div>
</template>
  
<script>
import Header from "../components/header";
import Footer from "../components/footer";
import PostDetailed from "../components/sections/blog-page/post-detailed.vue";
import ShareThisPost from "../components/sections/blog-page/share-this-post.vue";
import RecommendedArticles from "@/components/sections/recommended-articles/recommended-articles.vue";
import Subscribe from "@/components/sections/blog-page/subscribe.vue";

export default {
  name: "BlogPage",
  components: {
    Header,
    Footer,
    PostDetailed,
    ShareThisPost,
    RecommendedArticles,
    Subscribe
  },
  data: function () {
    return {
      postId: ''
    };
  },
  created() {
    this.postId = this.$route.params.postId;
  },

};
</script>