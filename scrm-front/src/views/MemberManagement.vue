<template>
  <div class="page-container">
    <div class="page-title">
      <span>会员管理</span>
    </div>
    <div class="page-content">
      <div class="query-bar">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="编号" class="form-item">
            <el-input v-model="formInline.user" placeholder="编号"></el-input>
          </el-form-item>
          <el-form-item label="姓名" class="form-item">
            <el-input v-model="formInline.user" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" class="form-item">
            <el-input v-model="formInline.user" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" class="form-item">
            <el-input v-model="formInline.user" placeholder="电子邮箱"></el-input>
          </el-form-item>
          <div class="form-button">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-form-item>
          </div>

        </el-form>
      </div>
      <el-table :data="memberList" style="width: inherit;">
        <el-table-column label="编号" prop="id"/>

        <el-table-column label="姓名" prop="name" />
        <el-table-column label="性别" prop="sex" />
        <el-table-column label="生日" prop="birthday" />
        <el-table-column label="手机号" prop="phone" />
        <el-table-column label="电子邮箱" prop="email" />
        <el-table-column label="住址" prop="address" />
        <el-table-column label="车牌号" prop="plate_number" />
        <el-table-column label="积分" prop="points" />
        <el-table-column
            fixed="right"
            label="操作"
            >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
            <el-button type="text" size="small" @click="dialogStandingBookVisible = true">查看台账</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="编辑会员资料" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="编号" :label-width="formLabelWidth">
          <span>{{ form.id }}</span>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="生日" :label-width="formLabelWidth">
          <el-input v-model="form.birthday" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="住址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" :label-width="formLabelWidth">
          <el-input v-model="form.plate_number" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="积分" :label-width="formLabelWidth">
          <span>{{form.points}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看会员台账" :visible.sync="dialogStandingBookVisible" width="30%">
      <el-timeline :reverse="false">
        <el-timeline-item
            v-for="(item, index) in standingBook"
            :key="index"
            :timestamp="item.timestamp">
          {{item.content}}
        </el-timeline-item>
      </el-timeline>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogStandingBookVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogStandingBookVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "MemberManagement",
  data() {
    return {
      memberList:[
          {
        id: 1,
        name: '张三',
        sex: '男',
        birthday: '1990-8-3',
        phone: '13444444444',
        email: '123@33.com',
        address: '青岛',
        plate_number: '青A3333',
        points: '111'
      },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        },
        {
          id: 1,
          name: '张三',
          sex: '男',
          birthday: '1990-8-3',
          phone: '13444444444',
          email: '123@33.com',
          address: '青岛',
          plate_number: '青A3333',
          points: '111'
        }],
      formInline: {
        user: '',
        region: ''
      },
      dialogFormVisible: false,
      dialogStandingBookVisible: false,
      form: {
        id: 1,
        name: '张三',
        sex: '男',
        birthday: '1990-8-3',
        phone: '13444444444',
        email: '123@33.com',
        address: '青岛',
        plate_number: '青A3333',
        points: '111'
      },
      standingBook: [
        {
          content: '积分减少 500 => 111',
          timestamp: '2018-04-25'
        },
        {
          content: '积分增加 300 => 500',
          timestamp: '2018-04-15'
        },
        {
          content: '积分减少 400 => 300',
          timestamp: '2018-04-13'
        },
        {
          content: '积分增加 0 => 400',
          timestamp: '2018-04-11'
        }
      ],
      formLabelWidth: '120px',
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.demo-form-inline {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.demo-form-inline .form-item {
  margin-right: 40px;
}
.demo-form-inline .form-button {
  margin-left: auto;
}

</style>
