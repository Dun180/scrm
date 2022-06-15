<template>
<div class="admin-sidebar">
  <div class="admin-sidebar-container">
    <div class="admin-sidebar-content">
      <div class="logo-wrapper">
        <div class="wrapper">
          <div class="logo"></div>
          <div class="title">SCRM</div>
        </div>
      </div>
      <div class="menu-wrapper">
        <el-menu
            default-active="1"
            class="menu"
            background-color="#f0f2f7"
        >
          <router-link to="/member-management">
            <el-menu-item index="1" >
              <span>会员管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/member-consumption-flow-entry">
            <el-menu-item index="2" >
              <span>会员消费流水录入</span>
            </el-menu-item>
          </router-link>
          <router-link to="/member-point-rule-management">
            <el-menu-item index="3" >
              <span>会员积分规则管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AdminSideBar',
  props: {
    msg: String
  }
}
</script>

<style>
.admin-sidebar{

  width: 13vw;
  min-width: 160px;
  transition: .35s;
  height: 100%;
  border-right: 1px solid #E5E9F2;
  box-shadow: 1px 0 rgba(255,255,255,0.5);
  overflow: hidden;
}
.admin-sidebar-container{
  height: 100%;

}
.admin-sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logo-wrapper {
  border-bottom: 1px solid #E5E9F2;
  box-shadow: 0 1px rgba(255,255,255,0.5);
  padding: 15px 11px;
  margin: 0 10px 10px;
}
.wrapper {
  display: flex;
  align-items: center;
}
.logo{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: 100% 100%;
}
.title{
  margin-left: 10px;
  font-size: 18px;
  color: #324057;
  text-shadow: 2px 2px 3px rgba(31,45,61,0.2),-1px -1px #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.menu:not(.el-menu--collapse){
  background: inherit;
}
.menu-wrapper{
  padding: 0 0 0 10px;
}
.user-wrapper{
  padding: 0 0 0 10px;
  margin-top: auto;
}
</style>
