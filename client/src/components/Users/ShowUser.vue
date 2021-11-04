<template>
  <div>
    <h1>ผู้จัดทำ</h1>
    <p>1. 62314228 นายเมธาวี ปันนา</p>
    <p>2. 62314891 นายศักดากร กวยวงศา</p>
    <p>นิสิตชั้นปีที่ 3 </p>
    <p>คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ</p>
    <p>มหาวิทยาลัยนเรศวร</p>

  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>