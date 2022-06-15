<template>
  <div class="page-container">
    <div class="page-title">
      <span>会员积分规则管理</span>
    </div>
    <div class="page-content">
      <div class="query-bar">
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </div>
      <el-table :data="ruleList" style="width: inherit;">
        <el-table-column label="编号" prop="id"/>
        <el-table-column label="规则名称" prop="rule_name" />
        <el-table-column label="规则描述" prop="description" />
        <el-table-column label="积分系数" prop="coefficient" />

        <el-table-column
            fixed="right"
            label="操作"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="积分规则编辑" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">

        <el-form-item label="编号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="规则名称" :label-width="formLabelWidth">
          <el-input v-model="form.rule_name" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="规则描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="积分系数" :label-width="formLabelWidth">
          <el-input v-model="form.coefficient" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "MemberPointRuleManagement",
  data() {
    return {
      ruleList:[
        {
          id: 1,
          rule_name: '默认规则',
          description: '正常情况下使用的规则',
          coefficient: 3,
        },
        {
          id: 2,
          rule_name: '生日规则',
          description: '会员生日时使用的规则',
          coefficient: 5,
        }
      ],
      formInline: {
        user: '',
        region: ''
      },
      dialogFormVisible: false,
      dialogStandingBookVisible: false,
      form: {
        id: 1,
        rule_name: '默认规则',
        description: '正常情况下使用的规则',
        coefficient: 3,
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
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

.query-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
