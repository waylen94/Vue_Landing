<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">
      <!-- 消息组件 -->
  <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Please entering</h3>
        </div>

         <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">Nick Name</label>
            <input v-model.trim="nickname" v-validator:input.required="{ regex: /^[a-zA-Z]+\w*\s?\w*$/, error: 'please type started from char' }" type="text" class="form-control" placeholder="Please fill your nick name">
          </div>


          <div class="form-group">
            <label class="control-label">Email</label>
             <input v-model.trim="email" v-validator:input.required="{ regex:'', error: 'please type correct format' }" type="text" class="form-control" placeholder="Please fill your Email">
          </div>

          <div class="form-group">
            <label class="control-label">Subject</label>
             <input v-model.trim="subject" v-validator:input.required="{ regex: /^[a-zA-Z]+\w*\s?\w*$/, error: 'please type correct format' }" type="text" class="form-control" placeholder="Please fill your subject">
          </div>

          <div class="form-group">
            <label class="control-label">Spark</label>
             <input v-model.trim="spark" v-validator:input.required="{ regex: '', error: 'please type correct format' }" type="text" class="form-control" placeholder="Please tell us your Interest points">
          </div>

          <div class="form-group">
            <label class="control-label">Captcha</label>
            <input v-model.trim="captcha" v-validator.required="{ title: 'Captcha' }" type="text" class="form-control" placeholder="Captcha">
          </div>
              <div class="thumbnail" title="Please clicking for changing captcha" @click="getCaptcha">
                  <div class="captcha vcenter" v-html="captchaTpl"></div>
                </div>
          <span @click="register">
             <button type="submit" class="btn btn-lg btn-success btn-block">
                <i class="fa fa-btn fa-sign-in"></i>Sending
              </button>
          </span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createCaptcha from '@/utils/createCaptcha'
import ls from '@/utils/localStorage'
import moment from 'moment'

export default {
  name: 'Register',
  data() {
    return {
      captchaTpl: '', // Cpatcha
      nickname: '',
      subject: '',
      email:'',
      spark: '',
      captcha: '',
      msg: '',
      msgType: '',
      msgShow: false
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      const { tpl, captcha } = createCaptcha()

      this.captchaTpl = tpl
      this.localCaptcha = captcha
    },

    register(e) {
      this.$nextTick(() => {
        const target = e.target.type === 'submit' ? e.target : e.target.parentElement

        if (target.canSubmit) {
          this.submit()
        }
      })
    },

    submit() {
      if (this.captcha.toUpperCase() !== this.localCaptcha) {
         this.showMsg('Please ensure your Captcha correct')
        this.getCaptcha()
      } else {
        const user = {
          nickname: this.nickname,
          subject: this.subject,
          spark: this.spark,
          email: this.email,
        }
        //fill the data in local storage
        this.login(user)

      }
    },
    login(user) {
      const date = moment().format('L');
      let login_list = ls.getItem(date);

      if (!Array.isArray(login_list)) login_list = []

      if(login_list){
        login_list.push(
        user)
        ls.setItem(date, login_list)
          }else{
            ls.setItem(date, user)
          }

      this.showMsg('Correct sending', 'success')
    },

   showMsg(msg, type = 'warning') {
      this.msg = msg
      this.msgType = type
      this.msgShow = false

      this.$nextTick(() => {
        this.msgShow = true
      })
    }
  }
}
</script>

<style scoped>
.thumbnail { width: 170px; margin-top: 10px; cursor: pointer;}
.thumbnail .captcha { height: 46px; background: #E1E6E8;}
.captcha { font-size: 24px; font-weight: bold; user-select: none;}
</style>
