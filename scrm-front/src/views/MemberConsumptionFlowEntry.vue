<template>
  <div class="page-container">
    <div class="page-title">
      <span>会员消费流水录入</span>
    </div>
    <div class="page-content">
      <div class="query-bar">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="流水编号" class="form-item">
            <el-input v-model="formInline.user" placeholder="流水编号"></el-input>
          </el-form-item>
          <el-form-item label="会员编号" class="form-item">
            <el-input v-model="formInline.user" placeholder="会员编号"></el-input>
          </el-form-item>
          <el-form-item label="商品" class="form-item">
            <el-input v-model="formInline.user" placeholder="商品"></el-input>
          </el-form-item>
          <el-form-item label="支付方式" class="form-item">
            <el-input v-model="formInline.user" placeholder="支付方式"></el-input>
          </el-form-item>
          <el-form-item label="状态" class="form-item">
            <el-input v-model="formInline.user" placeholder="状态"></el-input>
          </el-form-item>
          <div class="form-button">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">录入</el-button>
            </el-form-item>
          </div>

        </el-form>
      </div>
      <el-table :data="transactionList" style="width: inherit;">
        <el-table-column label="流水编号" prop="id"/>

        <el-table-column label="会员编号" prop="member_id" />
        <el-table-column label="商品" prop="commodity" />
        <el-table-column label="交易金额" prop="transaction_amount" />
        <el-table-column label="支付金额" prop="payment_amount" />
        <el-table-column label="支付方式" prop="payment_method" />
        <el-table-column label="创建时间" prop="create_time" />
        <el-table-column label="状态" prop="state" />

        <el-table-column
            fixed="right"
            label="操作"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogFormVisible = true" :disabled="scope.row.state == '已记账'">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="会员流水录入" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">

        <el-form-item label="会员编号" :label-width="formLabelWidth">
          <el-input v-model="form.member_id" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="商品" :label-width="formLabelWidth">
          <el-input v-model="form.commodity" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="交易金额" :label-width="formLabelWidth">
          <el-input v-model="form.transaction_amount" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="支付金额" :label-width="formLabelWidth">
          <el-input v-model="form.payment_amount" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="支付方式" :label-width="formLabelWidth">
          <el-input v-model="form.payment_method" autocomplete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="积分计算规则" :label-width="formLabelWidth">
          <el-select v-model="form.payment_method" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">记 账</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "MemberConsumptionFlowEntry",
  data() {
    return {
      transactionList:[
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '未记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '未记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '未记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '已记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '已记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '已记账'
        },
        {
          id: 1,
          member_id: 3,
          commodity: '商品1号',
          transaction_amount: 300,
          payment_amount: 300,
          payment_method: '支付宝',
          create_time: '2021-8-3',
          state: '已记账'
        },
        ],
      formInline: {
        user: '',
        region: ''
      },
      dialogFormVisible: false,
      dialogStandingBookVisible: false,
      form: {
        id: '',
        member_id: '',
        commodity: '',
        transaction_amount: '',
        payment_amount: '',
        payment_method: '',
        create_time: '',
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
.demo-form-inline {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.demo-form-inline .form-item {
  margin-right: 20px;
}
.demo-form-inline .form-button {
  margin-left: auto;
}
</style>
