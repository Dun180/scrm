<template>
  <div class="admin-container">
    <div class="wrapper">
      <AdminSidebar></AdminSidebar>
      <div class="admin-page">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import AdminSidebar from "@/components/AdminSidebar";
export default {
  name: 'App',
  components: {
    AdminSidebar
  }
}
</script>
<style>
.admin-container{
  height: 100vh;
  max-height: inherit;
  background: #f0f2f7;

}
.wrapper {
//display: grid;
//grid-template-columns: auto 1fr;
  display: flex;
  flex-direction: row;
  height: 100%;

}
.admin-page{
  height: 100%;
  padding: 0 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 13vw);
  min-width: 760px;
}
.page-title{
  padding: 0 10px;
  font-size: 24px;
  color: #475669;
  text-shadow: 2px 2px 3px rgba(31,45,61,0.2),-1px -1px #ffffff;
  line-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-content{
  background: #ffffff;
  box-shadow: 5px 8px 12px rgba(31,45,61,0.1);
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 20px;
  flex: 1;
}
.page-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
