/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的宝贝早安，😘',
    desc: `
      🗓️{{date.DATA}}
      城市：{{city.DATA}}
      天气☁️：{{weather.DATA}}
      温度🌡️: {{min_temperature.DATA}}℃--{{max_temperature.DATA}}℃
      ❤️{{notice.DATA}}
      我们恋爱{{love_day.DATA}}天啦！
      你的阴历生日还有{{yin_birthday_day.DATA}}天！
      你的阳历生日还有{{yang_birthday_day.DATA}}天！
      距离2023考研还剩{{kaoyan_day.DATA}}天，请继续加油！
      💗：{{comprehensive_horoscope.DATA}}
      亲爱的，美好的一天开始了，请继续努力啊！
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
    {
    id: '0003',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
