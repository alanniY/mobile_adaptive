$(function(){
  $('.form-group button').click(function(){
    settime($(this));
  })
  // 验证码计时
  var countdown = 60;
  function settime(val) {
    if (countdown == 0) {
      val.prop("disabled", false);
      val.html("发送验证码");
      countdown = 60;
    } else {
      val.attr("disabled", 'disabled');
      val.html("发送成功(" + countdown + ")");
      countdown--;
      setTimeout(function() {
        settime(val)
      },1000)
    }
  }
});